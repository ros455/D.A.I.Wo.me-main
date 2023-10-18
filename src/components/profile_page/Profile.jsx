import React, { useState, useEffect } from "react";
import '../../style/profile.scss'
import TransactionHistory from './TransactionHistory';
import AirCounter from '../AirCounter';
import CounterYear from '../CounterYear';
import Counter from '../Counter';

import { useAccount, useContractReads, useContractWrite } from 'wagmi'
import { USDT, DAIWO, PANCAKE_ROUTER } from '../web3/config'
import { parseEther } from 'viem'

import DAIWOLogo from '../header/assets/icon_daiwo_coin.svg'
import { BASE_URL } from "../../http/url";


const Profile = () => {

  const [allData, setAllData] = useState([]);
  const [lastRate, setaLastRate] = useState(0);
  const [lastAir, setLastAir] = useState(0);
  const [time, setTime] = useState(0);
  const [totalbalance, setTotalbalance] = useState(0);
  const [totalbalanceFinal, setTotalbalanceFinal] = useState(0);
  const [angle, setAngle] = useState(0);
  const [lastEmission, setLastEmission] = useState(0);


  // WEB3 begin

  const { address } = useAccount();

  const [USDTbalance, setUSDTbalance] = useState(0);
  const [DAIWObalance, setDAIWObalance] = useState(0);
  const [DAIWOprice, setDAIWOprice] = useState(0);

  // const [USDTAllowance, setUSDTAllowance] = useState(0);
  // const [DAIWOAllowance, setDAIWOAllowance] = useState(0);

  const [allowances, setAllowances] = useState({ USDT: 0, DAIWO: 0 });
  const [inputAmount, setInputAmount] = useState({ USDT: 0, DAIWO: 0 });
  const [outputAmount, setOutputAmount] = useState({ USDT: 0, DAIWO: 0 });

  const [slippage, setSlippage] = useState(0.1);
  const [fromInitial, setFromInitial] = useState(true);

  const { data: readData, isError: isErrorRead, isLoading: isLoadingRead, refetch } = useContractReads({
    contracts: [
      { // 0
        ...USDT,
        functionName: 'balanceOf',
        args: [address],
      },
      { // 1
        ...USDT,
        functionName: 'allowance',
        args: [address, PANCAKE_ROUTER.address],
      },
      { // 2
        ...DAIWO,
        functionName: 'balanceOf',
        args: [address],
      },
      { // 3
        ...DAIWO,
        functionName: 'allowance',
        args: [address, PANCAKE_ROUTER.address],
      },
      { // 4
        ...PANCAKE_ROUTER,
        functionName: 'getAmountsOut',
        args: [parseEther('1'), [USDT.address, DAIWO.address]],
      },
      { // 5
        ...PANCAKE_ROUTER,
        functionName: 'getAmountsOut',
        args: [parseEther('1'), [DAIWO.address, USDT.address]],
      }
    ]
  })

  const { write: writeSwap } = useContractWrite({
    ...PANCAKE_ROUTER,
    functionName: 'swapExactTokensForTokens',
    args: [parseEther(inputAmount[fromInitial ? 'USDT' : 'DAIWO'].toString()), parseEther((outputAmount[fromInitial ? 'DAIWO' : 'USDT'] * (1 - slippage / 100)).toString()), fromInitial ? ([USDT.address, DAIWO.address]) : ([DAIWO.address, USDT.address]), address, Date.now() + 1000 * 60 * 10],
    gas: 150000n,
  })

  const { write: writeApproveUSDT } = useContractWrite({
    ...USDT,
    functionName: 'approve',
    args: [PANCAKE_ROUTER.address, parseEther('1000000000000')],
    gas: 60000n,
  })

  const { write: writeApproveDAIWO } = useContractWrite({
    ...DAIWO,
    functionName: 'approve',
    args: [PANCAKE_ROUTER.address, parseEther('1000000000000')],
    gas: 60000n,
  })

  useEffect(() => {
    if (readData) {
      var temp_allowances = { ...allowances };
      if (!readData[0].error) {
        setUSDTbalance(Number(readData[0].result) / 10e17);
      } else {
        setUSDTbalance(0);
      }
      if (!readData[1].error) {
        temp_allowances['USDT'] = Number(readData[1].result) / 10e17;
      } else {
        temp_allowances['USDT'] = 0;
      }
      if (!readData[2].error) {
        setDAIWObalance(Number(readData[2].result) / 10e17);
      } else {
        setDAIWObalance(0);
      }
      if (!readData[3].error) {
        temp_allowances['DAIWO'] = Number(readData[3].result) / 10e17;
      } else {
        temp_allowances['DAIWO'] = 0;
      }
      if (!readData[4].error) {
        setDAIWOprice(Number(readData[4].result[readData[4].result.length - 1]) / 10e17);
      } else {
        setDAIWOprice(0);
      }
      console.log(readData[5])
      setAllowances(temp_allowances);
    }
  }, [readData, isLoadingRead, isErrorRead])

  useEffect(() => {
    const timer = setTimeout(() => {
      refetch();
    }, 5000);
    return () => clearTimeout(timer);
  })

  useEffect(() => {
    if (fromInitial) {
      if (inputAmount['USDT'] > 0) {
        setOutputAmount({ USDT: 0, DAIWO: inputAmount['USDT'] * DAIWOprice });
      }
    } else {
      if (inputAmount['DAIWO'] > 0) {
        setOutputAmount({ USDT: inputAmount['DAIWO'] / DAIWOprice, DAIWO: 0 });
      }
    }
  }, [inputAmount, fromInitial])

  const handleApprove = () => {
    if (fromInitial) {
      writeApproveUSDT();
    } else {
      writeApproveDAIWO();
    }
  }

  const handleSwap = () => {
    if (fromInitial && (allowances['USDT'] < inputAmount['USDT'] || inputAmount['USDT'] === 0)) {
      return;
    } else if (!fromInitial && (allowances['DAIWO'] < inputAmount['DAIWO'] || inputAmount['DAIWO'] === 0)) {
      return;
    }
    writeSwap();
  }

  // WEB3 end

  useEffect(() => {
    fetch(`${BASE_URL}/getall`)
      .then((res) => res.json())
      .then((res) => setAllData(res))
      .catch((error) => {
        console.log('error',error);
      })
  }, []);

  useEffect(() => {
    if (allData.length != 0) {
      let totalSumHeader = 0;
      let totalSum = 0;
      allData.forEach((item) => {
        totalSumHeader = item.balans + totalSumHeader;
      });
      setTotalbalanceFinal(totalSumHeader.toFixed(0));

      for (let i = 0; i < allData.length - 1; i++) {
        totalSum = allData[i].balans + totalSum;
      }
      setTotalbalance(totalSum.toFixed(0));
      returnLastItem(allData);
    }
  }, [allData]);

  const returnLastItem = (arr) => {
    setaLastRate(arr[arr.length - 1]?.rate);
    setLastEmission(arr[arr.length - 1]?.emission);
    setLastAir(arr[arr.length - 1]?.air * 100);
    const dateString = arr[arr.length - 1].createdAt;
    const dateObject = new Date(Date.parse(dateString));
    const dateMilliseconds = dateObject.getTime();
    setTime(dateMilliseconds);
  };

  const addTokenToWallet = async () => {
    await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: DAIWO.address,
          symbol: 'DAIWO',
          decimals: 18,
          image: DAIWOLogo,
        },
      },
    });
  }

  useEffect(() => {
    const num = lastAir;

    if (num == 0) {
      setAngle(num + 215);
    } else if (num <= 5) {
      setAngle(num + 222);
    } else if (num <= 10) {
      setAngle(num + 232);
    } else if (num <= 15) {
      setAngle(num + 240);
    } else if (num <= 20) {
      setAngle(num + 251);
    } else if (num <= 25) {
      setAngle(num + 265);
    } else if (num <= 30) {
      setAngle(num + 275);
    } else if (num <= 35) {
      setAngle(num + 280);
    } else if (num <= 40) {
      setAngle(num + 292);
    } else if (num <= 45) {
      setAngle(num + 305);
    } else if (num <= 50) {
      setAngle(num + 312);
    } else if (num <= 55) {
      setAngle(num + 320);
    } else if (num <= 60) {
      setAngle(num + 330);
    } else if (num <= 65) {
      setAngle(num + 342);
    } else if (num <= 70) {
      setAngle(num + 349);
    } else if (num <= 75) {
      setAngle(num + 358);
    } else if (num <= 80) {
      setAngle(num + 370);
    } else if (num <= 85) {
      setAngle(num + 382);
    } else if (num <= 90) {
      setAngle(num + 389);
    } else if (num <= 95) {
      setAngle(num + 395);
    } else if (num <= 100) {
      setAngle(num + 405);
    }
  }, [lastAir]);

  const arrNumb = new Array(27).fill(1);
  const arrNum2 = new Array(15).fill(1);

  return (
    <div className="profile">
      <div className="main_background">
        <div className="profile_spotlight_one"></div>
        <div className="profile_spotlight_two"></div>
        <div className="profile_spotlight_three"></div>
      </div>
      <div className="container">
        <div className="profile_indicators">
          <div className="cart_item card_air air__prof">
            <div className="">
              <div className="card_title">Air:</div>
              <div className="card_item_two">
                <AirCounter angle={angle} lastAir={lastAir} />
              </div>
            </div>
          </div>
          <div className="cart_item card_rate rate_prof">
            <div className="card_title title_rate_profile">Rate:</div>
            <div className="card_item_one">
              {lastRate && (
                <CounterYear
                  firstValue={Number(lastRate)}
                  val={Number(lastRate * (lastAir / 100) + lastRate)}
                  time={time}
                  isBool={false}
                />
              )}
            </div>
          </div>
          <div className="rate_prof">
            <div className="card_title_prof">Emission:</div>
            <div className="number_item">
              <div className="card_item_one">
                <ul className="rate_list rate_list_profile ">
                  {lastEmission && <Counter val={lastEmission} />}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_main_desk" style={{ marginBottom: '5vh' }}>
          <div className="desk_one">
            <div className="total_number">
              <div className="desk_title">Your Assets:</div>
              <div className="total_number_item">
                <div className="number_item_prof">
                  <h4 className="coin_name">USDT</h4>
                  <div className="number_block">
                    <div className="card_item_one">
                      <ul className="rate_list">
                        <li className="rate_list_item">
                          {USDTbalance}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="number_item_prof">
                  <h4 className="coin_name">Daiwo</h4>
                  <div className="number_block">
                    <div className="card_item_one">
                      <ul className="rate_list">
                        <li className="rate_list_item">
                          {DAIWObalance}
                        </li>
  
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile_analysis">
              <div className="desk_title">Analytics:</div>
              <div className="analysis_board">
                <div className="analysis_chart">
                  <div className="box">
                    <div className="box-inner">
                    </div>
                  </div>
                </div>
                <div className="chart_info">
                  <div className="chart_info_data">
                    <div className="data_block">
                      <h5>
                      Day <p>$475</p>
                      </h5>
                      <h5>
                      Week <p>$3.327</p>
                      </h5>
                      <h5>
                      Month <p>$12.131</p>
                      </h5>
                    </div>
                    <div className="amount_block"></div>
                  </div>
                  <div className="chart_info_coin">
                    <h5 className="purple">USDT</h5>
                    <h5 className="emerald">Daiwo</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="desk_two">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: '2vw',
              }}
            >
              <div className="desk_title">Exchange:</div>
              <button onClick={addTokenToWallet} className='add_token'>
                <img src={DAIWOLogo} />
              </button>
            </div>
            <div className="exchange_line_one">
              <div className="line_one_header">
                <p className="avalible">Available:</p>
                <p className="sum usdt">{USDTbalance}</p>
              </div>
              <div className="exchange_input_block">
                <input
                  type="number"
                  className="exchange_input"
                  placeholder="Введіть к-сть"
                  value={fromInitial ? inputAmount['USDT'] : inputAmount['DAIWO']}
                  onChange={(e) => {
                    fromInitial ? setInputAmount({ ...inputAmount, USDT: e.target.value }) : setInputAmount({ ...inputAmount, DAIWO: e.target.value });
                  }}
                />
                <div className="coin_selector">
                  {fromInitial ? (
                    <img
                      src="/icons/icon_cryptocurrency-usdt.svg"
                      alt="crypto"
                    />
                  ) : (
                    <img src="/icons/icon_daiwo_coin.svg" alt="crypto" />
                  )}
                  <img
                    className="arr_click"
                    src="/icons/icon_arrow_white.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="vector_down">
              <img
                src="/icons/icon_vector_down.svg"
                alt="vector"
                onClick={() => setFromInitial(!fromInitial)}
                className={fromInitial ? "vector_down_img" : "vector_down_img rotate"}
              />
            </div>
            <div className="exchange_line_one">
              <div className="line_one_header">
                <p className="avalible">Available:</p>
                <p className="sum daiwo">{DAIWObalance}</p>
              </div>
              <div className="exchange_input_block">
                <input
                  type="text"
                  className="exchange_input"
                  placeholder="Введіть к-сть"
                  disabled={true}
                  value={fromInitial ? outputAmount['DAIWO'] : outputAmount['USDT']}
                  onChange={(e) => {
                    !fromInitial && setInputAmount({ ...inputAmount, DAIWO: e.target.value });
                  }}
                />
                <div className="coin_selector">
                  {fromInitial ? (
                    <img src="/icons/icon_daiwo_coin.svg" alt="crypto" />
                  ) : (
                    <img
                      src="/icons/icon_cryptocurrency-usdt.svg"
                      alt="crypto"
                    />
                  )}
                  <img
                    className="arr_click"
                    src="/icons/icon_arrow_white.svg"
                    alt="arrow"
                  />
                </div>
              </div>
              <div className="line_two_header">
                <p className="commission">Minimum output:</p>
                <p className="sum_commission">{outputAmount[fromInitial ? 'DAIWO' : 'USDT'] * (1 - slippage / 100)} {fromInitial ? ('DAIWO') : ('USDT')}</p>
              </div>
              <div className="line_two_header">
                <p className="commission">Maximum sliding:</p>
                <button
                  className={"slippage_button" + (slippage === 0.1 ? " selected" : "")}
                  onClick={() => setSlippage(0.1)}
                >0.1%</button>
                <button
                  className={"slippage_button" + (slippage === 0.5 ? " selected" : "")}
                  onClick={() => setSlippage(0.5)}
                >0.5%</button>
                <button
                  className={"slippage_button" + (slippage === 1 ? " selected" : "")}
                  onClick={() => setSlippage(1)}
                >1%</button>
              </div>
            </div>
            <div className="total_amount_sum">
              <h5>You will recieved:</h5>
              <p className="total_sum">{outputAmount[fromInitial ? 'DAIWO' : 'USDT']}</p>
              {fromInitial ? (
                <img
                  className="coin_icon"
                  src="/icons/icon_daiwo_coin.svg"
                  alt="coin"
                />
              ) : (
                <img
                  className="coin_icon"
                  src="/icons/icon_cryptocurrency-usdt.svg"
                  alt="usdt"
                />
              )}

            </div>
            <div className="btn_wraper_exchange">
              {inputAmount[fromInitial ? 'USDT' : 'DAIWO'] <= allowances[fromInitial ? 'USDT' : 'DAIWO'] ? (
                <button className="exchange_btn" onClick={() => handleSwap()}>Submit</button>
              ) : (
                <button className="exchange_btn" onClick={() => handleApprove()}>Approve</button>
              )}
            </div>
          </div>
        </div>
        {/* <TransactionHistory /> */}
      </div>
    </div>
  );
}

export default Profile;
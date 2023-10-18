import React,{useState}  from 'react';
import '../../style/profile.scss'
import Transaction from './Transaction';
import { Link } from 'react-router-dom';


const TransactionHistory = () => {


    const [arr,setArr]=useState([
        {
            img:'/icons/icon_deposit.svg',
            title:'Депозит',
            date:'Квітень 25.22',
            sum:'+$874',
        },
        {
            img:'/icons/icon_withdrawal.svg',
            title:'Виведення',
            date:'Квітень 25.22',
            sum:'-$2490',
        },
        {
            img:'/icons/icon_deposit.svg',
            title:'Депозит',
            date:'Квітень 25.22',
            sum:'+$874',
        }
        
    ])

    return (
      <div className="TransactionHistory">
        <div className="transaction_history">
          <div className="desk_title">Історія транзакцій:</div>
          {arr.map((item, index) => (
            <Transaction
              key={index}
              img={item.img}
              title={item.title}
              date={item.date}
              sum={item.sum}
            />
          ))}

          <div className="show_more">
            <Link className="btn_show_more">Дізнатись більше</Link>
            <img src="/icons/icon_arrow-forward.svg" alt="arrow" />
          </div>
        </div>
      </div>
    );
};



export default TransactionHistory;
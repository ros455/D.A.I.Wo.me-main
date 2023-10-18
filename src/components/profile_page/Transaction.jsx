import React from 'react';
import '../../style/profile.scss'




const Transaction = ({img,title,date,sum}) => {

    console.log();
    return (
      <div className="Transaction">
        <div className="history_desk">
          <div className="transaction_name">
            <img src={img} alt="deposit" />
            
          </div>
          <div className="transaction_date">
            <div className='transaction_date_item'>
              <h5>{title}</h5>
              <p> {date}</p>
              </div>
          </div>
          <div
            className={
              sum[0] == "+" ? "transaction_sum" : "transaction_sum red"
            }
          >
            {sum}
          </div>
        </div>
      </div>
    );
};

export default Transaction;
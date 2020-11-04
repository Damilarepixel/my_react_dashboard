import React from 'react';
import Credit from './Credit.png'
import Debit from './Debit.png'




function Table() {
  

  return (
    <div>
      <div className="table">
      <div className="title">
        <h3>New Account Holders</h3>
      </div>
      <div>
      <hr></hr>
      </div>
      

      <div className="tableHeader">
        <h5>Status</h5>
        <h5>Account Holder</h5>
        <h5>Account Number</h5>
        <h5>Type</h5>
        <h5>Balance</h5>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="data">
        <p>Pending</p>
        <p>Aminat Adams</p>
        <p><strong>xxxxxx</strong>2294</p>
        <p>Current Account</p>
        <p>47, 027<strong> NGN</strong></p>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="data">
        <p>Completed</p>
        <p>Aminat Adams</p>
        <p><strong>xxxxxx</strong>2294</p>
        <p>Current Account</p>
        <p>47, 027<strong> NGN</strong></p>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="data">
        <p>Completed</p>
        <p>Aminat Adams</p>
        <p><strong>xxxxxx</strong>2294</p>
        <p>Current Account</p>
        <p>47, 027<strong> NGN</strong></p>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="data">
        <p>Pending</p>
        <p>Aminat Adams</p>
        <p><strong>xxxxxx</strong>2294</p>
        <p>Current Account</p>
        <p>47, 027<strong> NGN</strong></p>
      </div>

      <div>
        <hr></hr>
      </div>
    </div>

    <div className="transactions">
      <div className="title">
        <h3>Transaction History</h3>
      </div>
      <div>
      <hr></hr>
      </div>
      


      <div className="data">
      <img src={Debit} alt='debit' height="38px" width="38px" id="bv" />
        <p>Aminat Adams</p>
        <p id="debit">- 10, 000 <strong> NGN</strong></p>
        <p>Card-<strong>xxxxxx</strong>2294</p>
        <p>47, 027<strong> NGN</strong></p>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="data">
      <img src={Credit} alt='credit' height="38px" width="38px" id="bv" />
        <p>Aminat Adams</p>
        <p id="credit">+ 10, 000 <strong> NGN</strong></p>
        <p>Ussd Transaction</p>
        <p>47, 027<strong> NGN</strong></p>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="data">
      <img src={Debit} alt='debit' height="38px" width="38px" id="bv" />
        <p>Aminat Adams</p>
        <p id="debit">- 10, 000 <strong> NGN</strong></p>
        <p>Card-<strong>xxxxxx</strong>2294</p>
        <p>47, 027<strong> NGN</strong></p>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="data">
      <img src={Credit} alt='credit' height="38px" width="38px" id="bv" />
        <p>Aminat Adams</p>
        <p id="credit">+ 10, 000 <strong> NGN</strong></p>
        <p>Card-<strong>xxxxxx</strong>2294</p>
        <p>47, 027<strong> NGN</strong></p>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="data">
      <img src={Credit} alt='credit' height="38px" width="38px" id="bv" />
        <p>Aminat Adams</p>
        <p id="credit">+ 10, 000 <strong> NGN</strong></p>
        <p>Card-<strong>xxxxxx</strong>2294</p>
        <p>47, 027<strong> NGN</strong></p>
      </div>

      <div>
        <hr></hr>
      </div>
    </div>
    </div>
  );
}

export default Table
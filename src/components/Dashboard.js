import React from 'react'
import CountUp from 'react-countup';
import Cheque from './Cheque.png'
import Dom from './Dom.png'
import Fixed from './Fixed.png'
import Savings from './Savings.png'
import Table from'./Table'






function dashboard() {
    return (
        <div className="dashBoard">
            <h3>Welcome back, Aminat Adams &#128075;.</h3>
            <p>Find details of KPIs below</p>

            <div className="accountHolders">
                <div className="currentAccount">
                    <p id="tag">Current Account</p>
                    <h2 id="countUp"><CountUp end={14811} delay={1.5} duration={4.50}  /></h2>
                    <img src={Cheque} alt='cheque' height="120px" width="120px" id="bg" />
                </div>

                <div className="savingsAccount">
                    <p id="tag">Savings Account</p>
                    <h2 id="countUp"><CountUp end={38513} delay={1.5} duration={4.50} /></h2>
                    <img src={Savings} alt='savings' height="120px" width="120px" id="bg" />
                </div>

                <div className="domAccount">
                    <p id="tag">Domiciliary Account</p>
                    <h2 id="countUp"><CountUp end={6017} delay={1.5} duration={4.50} /></h2>
                    <img src={Dom} alt='domiciliary' height="120px" width="120px" id="bg" />
                </div>

                <div className="fixedAccount">
                    <p id="tag">Fixed Account</p>
                    <h2 id="countUp"><CountUp end={10003} delay={1.5} duration={4.50} /></h2>
                    <img src={Fixed} alt='Fixed' height="120px" width="120px" id="bg" />
                </div>
                
            </div>

            <div className="newAccountsTable">
                <Table />
            </div>
        </div>
    )
}

export default dashboard

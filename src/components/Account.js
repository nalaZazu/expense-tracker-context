import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { UserProvider } from '../context/GlobalState'

const Account = () => {
    // let amount = useSelector(store => store.userSection)
    let { transcation } = useContext(UserProvider)
    let plus = [];
    let minus = [];
    transcation.forEach((a) => {
        if (a.transcationAmount > 0) {
            plus.push(a.transcationAmount);
            console.log(a.transcationAmount);
        }
        else {
            minus.push(a.transcationAmount);
            console.log(a.transcationAmount);
        }
    });

    let plustotal = 0;
    let minustotal = 0;
    plus.forEach((p) => {
        return plustotal += + p
    })
    minus.forEach((m) => {
        return minustotal -= - m
    })


    return (
        <div>
            <div className='inc-container'>

                <div>
                    <h4>Income</h4>


                    <p className='money plus'>${plustotal}</p>

                </div>
                <div>
                    <h4>Expense</h4>
                    <p className='money minus' >${minustotal}</p>
                </div>


            </div>
        </div>
    )
}

export default Account
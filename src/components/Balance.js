import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { UserProvider } from '../context/GlobalState';

function Balance() {
  //   let amount = useSelector(store => store.userSection);
  let { transcation } = useContext(UserProvider)
  let total = 0.00;

  transcation.forEach((element) => {

    if (element.transcationAmount > 0) {
      total += +element.transcationAmount;

    } else {
      total -= -element.transcationAmount
    }

  });

  return (
    <div>
      <h4>Current Balance</h4>
      <h1 id='balance'>${total}</h1>
    </div>
  )
}

export default Balance
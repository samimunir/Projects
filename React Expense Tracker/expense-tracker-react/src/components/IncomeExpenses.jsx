import React from 'react';

const IncomeExpenses = () => {
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p id='money-plus' class='money plus'>+$0.00</p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p id='money-minus' class='money minus'>-$0.00</p>
        </div>
    </div>
  );
}

export default IncomeExpenses;
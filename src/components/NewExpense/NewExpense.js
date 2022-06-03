import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense = (props) => {

  const onSaveNewExpenseData = (expenseData) =>{
      
     const singleExpenseData = { ...expenseData,id: Math.random().toString() }
     props.addExpenseDataInArray(singleExpenseData);
     //console.log(singleExpenseData);
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveNewExpenseData={onSaveNewExpenseData} />
    </div>
  )
}

export default NewExpense
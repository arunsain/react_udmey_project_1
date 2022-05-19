import React from 'react'
import Card from './Card';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'


const Expenses = () => {
    const expense = [
        {
          title:"car insurance",
          amount: 234,
          date: new Date(2022 , 4 ,18)
        },
        {
          title:"toliet paper",
          amount: 256,
          date: new Date(2022 , 6 ,25)
        },
        {
          title:"paper soap",
          amount: 247,
          date: new Date(2022 , 4 ,7)
        },
        {
          title:"colgate",
          amount: 333,
          date: new Date(2022 , 5 ,11)
        }
      ]
  return (
    <Card className="expenses">
    
       <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}></ExpenseItem>
    </Card>
  )
}

export default Expenses;
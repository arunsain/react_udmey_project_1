
import './App.css';

import Expenses from './components/Expenses/Expenses';
function App() {
  const expenses = [
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
    <div className="App">
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

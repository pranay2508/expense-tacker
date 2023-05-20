
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props){
// the code looks like in html is basically speciall JSX code which is de eloper by react team
    //its still the js code 
    // const expenseDate= new Date(2023 , 5 , 13);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    // tolocalestring is used to show the date in human read formate
   


//(method) Date.toISOString(): string ==>>  Returns a date as a string value in ISO format.


// very important --> we are exporting the data from ExpenseDate to ExpenseItem to APP.js 
// that is rendering through props you can see we used Expenseitem in app.js and in Expenseitem we used ExpenseDate using props
    return (

        <Card className="expense-item">
        <ExpenseDate  date ={props.date}/>
         <div className='expense-item__description'>
            <h2> {props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
         </div>
        </Card>
   
    );
}

export default ExpenseItem;



// note you only have per root element which mean a single html line which has to be return
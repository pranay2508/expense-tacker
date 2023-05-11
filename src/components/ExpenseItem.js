import './ExpenseItem.css'

function ExpenseItem(){
// the code looks like in html is basically speciall JSX code which is de eloper by react team
    //its still the js code 
    const expenseDate= new Date(2023 , 5 , 13);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;







//(method) Date.toISOString(): string ==>>  Returns a date as a string value in ISO format.

    return (<div className="expense-item">
        <div>
        
         {expenseDate.toISOString()}
         <div className='expense-item__description'>
            <h2> {expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
         </div>
        </div>
    </div>
    );
}

export default ExpenseItem;



// note you only have per root element which mean a single html line which has to be return
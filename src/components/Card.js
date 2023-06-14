
import './Card.css';
function Card (props){
    // console.log("hello", props.children);
    const classes='card ' + props.className;
    return <div className={classes}>{props.children}
    
    </div>
}


export default Card 
// here children prop contained all the contains of the card item from opening tag to the closing tag 
// props children is a reserved name which is used to make the html content alive in the expenseitem.js 
// where we used card as the container and the content of html is alive 
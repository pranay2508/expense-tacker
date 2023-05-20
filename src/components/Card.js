
import './Card.css';
function Card (props){
    return <div className="card">
    {props.children}
    </div>
}

export default Card 

// props children is a reserved name which is used to make the html content alive in the expenseitem.js where we used card as the container and the content of html is alive 
import "./Card.css";

export default function Card(props){

    const modalHandler = () =>{
        props.onClickIngredients(props.ingredients)
    }

    return(
        <div className="card">
            <img 
                src={props.img}
                alt=""/>
            <span className="title">{props.label}</span>
            <span className="ingredients" onClick={modalHandler}>Ingredients</span>
            <a className="recipe" href={props.url} target="_blank">View Recipe</a>
        </div>
    )
}
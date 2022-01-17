import "./Modal.css"

export default function Modal(props){
    if(!props.show){
        return null;
    }
    return(
        <div className="modal">
            <div className="modal-content">
            <div className="modal-body">
                {props.ingredients.map(item => 
                    <ul className="ingredientsList">
                        <li>{item}</li>
                    </ul>
                )}
            </div>
            <div className="modal-footer">
                <button onClick={props.onClose} className="bttn">Close</button>
            </div>
            </div>
        </div>
    )
}
import Card from "../UI/card/Card"
import "./Home.css";
import Modal from "../UI/modal/Modal";
import React, {useState} from "react";

export default function Home({data}) {

    const [ingredients, setIngredients] = useState();

    const [showModal, setShowModal] = useState(false);

    const openModalHandler = (ingredientLine) => {
        setIngredients(ingredientLine);
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return(
        <div className="home">
            {data && data.map((item, index)=>
                <Card
                    key={index}
                    img={item.recipe.image}
                    label={item.recipe.label}
                    ingredients={item.recipe.ingredientLines}
                    url={item.recipe.url}
                    onClickIngredients={openModalHandler}
                ></Card>
            )}
        <Modal
            show={showModal}
            ingredients={ingredients}
            onClose={closeModalHandler}
        ></Modal>
        </div>
    )
}
import { useEffect, useState } from "react";
import Home from "../home/Home";

export default function FetchAPI({recipe}){
    const app_key = "7e7adc526baa916407ac6c4fe3cd92c3";
    const app_id= "f069d54d";
    const url = `https://api.edamam.com/search?q=${recipe}&app_id=${app_id}&app_key=${app_key}`;

    const [data, setData] = useState();

    useEffect(() =>{
        const fetchRecipes = async() => {
            const response = await fetch(url);
            const response_json = await response.json()
            setData(response_json.hits);
         }
         fetchRecipes().catch(console.error);

    }, [recipe])

    return(
        <div>
            <Home
                data = {data}
            ></Home>
        </div>
    )
}
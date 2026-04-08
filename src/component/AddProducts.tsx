import axios from "axios";
import {  useState } from "react"


interface State {
    title: string;
    price: number;
    id: number;
}
const AddProducts = () => {
    const [state, setstate] = useState<State[]>([]);
    const [title , settitle] = useState<string>('');
// Add products
const addProducts = () =>
        axios({
            method:'post' , 
            url :'https://dummyjson.com/products/add' ,
            data: {title: title}})
            .then((response) => {
                console.log(response);
                setstate([...state , response.data]);
                // settitle('');
            })
            .catch((error) => console.log(error));
   
    return (
        <>
            <div>
                Add Products
            </div>
           <input type="text" value={title} onChange={(e) => settitle(e.target.value)}/>
           <button onClick={addProducts}>Add</button>
        </>
    )
}

export default AddProducts

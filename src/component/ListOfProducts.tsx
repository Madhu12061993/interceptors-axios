import axios from "axios";
import { useEffect, useState } from "react"


interface State {
    title: string;
    price: number;
    id: number;
}
const ListOfProducts = () => {
    const [state, setstate] = useState<State[]>([]);
    // promise using then
    // useEffect(() => {
    //     axios.get('https://dummyjson.com/products')
    //         .then((response) => setstate(response.data.products))
    //         .catch((error) => console.log(error));
    // }, []);
    // promise using async await
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/products');
                if (res.status === 200) {
                    setstate(res.data.products);
                } else if (res.status === 404) {
                    console.log('products not found');
                }
        //   console.log(res);
            }
            catch (e) {
                console.log(e);
            }
        };        
        getProducts();
    }, []);
    return (
        <>
            <div>
                ListOfProducts
            </div>
            {state.map((product, index) => (
                <div key={index}>
                    <div>{product.title}</div>
                    <div>{product.price}</div>

                </div>
            ))}
        </>
    )
}

export default ListOfProducts

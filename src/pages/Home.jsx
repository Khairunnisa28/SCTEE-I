import Headling from '../image/head.jpg';
import Cart_img from '../image/cart.png';
import Ramen from "../image/ramen.jpeg";
import Gyoza from "../image/gyoza.jpg";
import './Home.css';
import { useState } from 'react';

function Home (){
    const initialProducts = [{id:1, name:'Ramen', price: 45000, quantity: 0, image: Ramen},
                            {id:2, name:'Gyoza', price: 25000, quantity: 0, image: Gyoza},
                            {id:3, name:'Ramen', price: 45000, quantity: 0, image: Ramen},
                            ]
    const [products, setProducts] = useState(initialProducts);

    return(
        <div className="Content">    
            <img src={Headling} alt="Headling"/>
            <h1>Mau makan apa hari ini?</h1>
            <button>
                <img src={Cart_img} alt="Keranjang Belanja"/>
            </button>
            <div className='cards-container'>
                {products.map((product) => (
                    <div className="card" key={product.id} style={{width: '18rem'}}>
                        <img src={product.image} className="card-img-top" alt="Ramen"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Rp. {product.price}</p>
                            <a href="#" className="btn btn-primary">Order</a>
                        </div>
                    </div>                    
                ))}

            </div>
        </div>
    )
}

export default Home;




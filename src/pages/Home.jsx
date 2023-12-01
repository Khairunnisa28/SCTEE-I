import Headling from '../image/head.jpg';
import Cart_img from '../image/cart.png';
import Ramen from "../image/ramen.jpeg";

function Home (){
    return(
        <div className="Content">    
            <img src={Headling} alt="Headling"/>
            <h1>Mau makan apa hari ini?</h1>
            <button>
                <img src={Cart_img} alt="Keranjang Belanja"/>
            </button>
            <div className='cards'>
                <div className="card" style={{width: '18rem'}}>
                    <img src={Ramen} className="card-img-top" alt="Ramen"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

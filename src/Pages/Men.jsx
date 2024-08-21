import { Link } from "react-router-dom";
import men1 from '../assets/men1.jpg';  // Ensure file extensions are included
import men2 from '../assets/men2.jpg';
import men3 from '../assets/men3.jpg';
import men4 from '../assets/men4.jpg';
import men5 from '../assets/men5.jpg';
import men6 from '../assets/men6.jpg';

import './Men.css';

function Men() {
    const arrayofproducts = [
        { id: 1, img: men1 },
        { id: 2, img: men2 },
        { id: 3, img: men3 },
        { id: 4, img: men4 },
        { id: 5, img: men5 },
        { id: 6, img: men6 },
    ];

    return (
        <div id="productswrapper">
            {arrayofproducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <div>
                        <img src={product.img} alt={`Product ${product.id}`} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Men;

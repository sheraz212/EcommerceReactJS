import im1 from "../images/1.png";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductCards(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="imgsize" src={im1} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h1>{product.name}</h1>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">
          <b>{product.price}</b>/RS
        </div>
      </div>
    </div>
  );
}

export default ProductCards;

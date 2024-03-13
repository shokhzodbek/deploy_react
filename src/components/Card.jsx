import "./Card.css";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Link to={"products"}>
      <div className="card">Card</div>
    </Link>
  );
}

export default Card;

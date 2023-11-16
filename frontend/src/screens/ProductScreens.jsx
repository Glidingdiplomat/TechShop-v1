import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col Image, ListGroup, Group, Button } from 'react-bootstrap';
import Rating from "../components/Rating";
import products from "../products";

const ProductScreens = () => {
  const { id: productId } = useParams();
  const product = products.find(p === productId);

  return <>
  <Link className="btn btn-light my-3" to='/'>Go Back</Link> 
  </>;
};

export default ProductScreens;

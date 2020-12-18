import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios"

const ProductSreen = ({ match }) => {
  const  [product,setProduct]=useState({})

  useEffect( () => {
    const fetchProducts= async () => {
    const {data}= await axios.get(`/api/products/${match.params.id}`);
    setProduct(data)
    }
    
    fetchProducts()
    
    }, [match])

  return (
    <>
      <Link className="btn btn-light my-3 " to="/">
        Go back
      </Link>

      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price:$ {product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>{product.price}</strong>
                </Col>
              </Row>
            </ListGroup>
            <ListGroup>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup>
            <ListGroup>
                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>Add to Cart</Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductSreen;

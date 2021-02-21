import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {
  Row,
  Col,
  Image,
  Form,
  Button, 
  ListGroup,
} from "react-bootstrap";
// import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
// import {
//   listProductDetails,
//   createProductReview,
// } from "../actions/productActions";
import {createProductReview} from "../actions/productActions";
// import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
import {Avatar} from '@material-ui/core'
import './ProductScreen.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import InfoIcon from '@material-ui/icons/Info';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {ProgressBar} from 'react-bootstrap'

const ProductScreen = ({ history, match }) => {

  // const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  // useEffect(() => {
  //   if (successProductReview) {
  //     setRating(0);
  //     setComment("");
  //   }
  //   if (!product._id || product._id !== match.params.id) {
  //     dispatch(listProductDetails(match.params.id));
  //     dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
  //   }
  // }, [dispatch, match, successProductReview]);
  useEffect(() => {
    if (successProductReview) {
      setRating(0)
      setComment('')
    }

  }, [dispatch, match, successProductReview])

  // const addToCartHandler = () => {
  //   history.push(`/cart/${match.params.id}?qty=${qty}`);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/home">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title="COVID 19 Dashboard" />
          <Row>
            <Col md={3}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                  <Avatar className="project__owner"/>
                  <div className="project__ownerName"><strong>Tianning Li</strong></div>
                  <div className="project__ownerDesc">Graduate Student @ USC</div>
                </ListGroup.Item>
                <ListGroup.Item className="project__ownerProject">
                  <div>
                    <MailOutlineIcon /> 
                    <div>tianning@usc.edu</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="project__ownerProject">
                  <div>
                    <LocationOnIcon /> 
                    <div>Los Angeles</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="project__ownerProject">
                  <div>
                    <FolderOpenIcon /> 
                    <div>finvizfinance</div>
                  </div>
                  <div>
                    <FolderOpenIcon /> 
                    <div>arktradetracker</div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <Image src={require('./covid_dash.png')} alt="covid19_dash" fluid />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3 className="projectItemCard__header">COVID 19 Dashboard</h3>
                  <div className="projectItemCard__hashtags">
                    <div className="projectItemCard__hashtag" style={{backgroundColor: 'green'}}><strong>enhancement</strong></div>
                    <div className="projectItemCard__hashtag" style={{backgroundColor: 'purple'}}><strong>document</strong></div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Issues</h4>
                  <p>- bug fixes</p>
                  <p>- Mobile integration feature</p>
                  <p>- Optimization problems</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item className="project__info">
                  <div className="project__infoBlock">
                    <div className="project__infoHeader">
                      <InfoIcon />
                      <div><strong>About</strong></div>
                    </div>
                    <div>
                      COVID-19 Dashboard: visualize the COVID-19 cases according to the state, county.
                    </div>
                  </div>
                  <div className="project__infoBlock">
                    <div className="project__infoHeader">
                      <LanguageIcon />
                      <div><strong>Language</strong></div>
                    </div>
                    <ProgressBar>
                      <ProgressBar variant="warning" now={100} key={2} animated={true}/>
                    </ProgressBar>
                    <div className="project__languageDetail">
                        <FiberManualRecordIcon style={{color: '#f89406'}}/>
                        <div>React.js <span className="project__languagePct">99.0%</span></div>
                    </div>
                  </div>
                  <div className="project__infoBlock">
                    <div className="project__infoHeader">
                        <a href="https://github.com/lit26/COVID19_Dashboard"
                          className="project__infoLink">
                          <GitHubIcon />
                          <div>
                            View Source
                          </div>
                        </a>
                    </div>
                  </div>
                  <a href='https://github.com/lit26/COVID19_Dashboard'>
             <Button  >
                    Contribute
                    
                  </Button>
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            {/* <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col> */}
            {/* <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col> */}
            {/* <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col> */}
          </Row>
          <Row>
            <Col md={6}>
              <h2>Q&A</h2>
              {product.reviews.length === 0 && <Message>No Question</Message>}
              <ListGroup variant="flush">
                {/* {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))} */}
                <ListGroup.Item>
                  <h2>Ask a question</h2>
                  {successProductReview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      {/* <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group> */}
                      <Form.Group controlId="comment">
                        {/* <Form.Label>Comment</Form.Label> */}
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type="submit"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>

                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;

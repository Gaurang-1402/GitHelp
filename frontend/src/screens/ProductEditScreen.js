import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
import { Container, Row, Col } from "react-bootstrap";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  // const [price, setPrice] = useState(0)
  const [image, setImage] = useState("");
  const [githublink, setGithubLink] = useState("");
  const [language, setLanguage] = useState("");
  const [hashtag, setHashtag] = useState("");
  // const [brand, setBrand] = useState('')
  // const [category, setCategory] = useState('')
  // const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState("");
  const [issue, setIssue] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        // setPrice(product.price)
        setGithubLink(product.githublink);
        setImage(product.image);
        setLanguage(product.language);
        // setBrand(product.brand)
        // setCategory(product.category)
        // setCountInStock(product.countInStock)
        setHashtag(product.hashtag);
        setDescription(product.description);
        setIssue(product.issue);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        githublink,
        language,
        image,
        hashtag,
        description,
        issue,
      })
    );
  };

  return (
    <>
      <Link to="/home" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Make a request for collaboration!</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group> */}

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Container>
                <Row>
                  <Col style={{padding: '0px'}}>
                    <Form.Control
                      type="text"
                      placeholder="Enter image url"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    ></Form.Control>
                  </Col>
                  <Col style={{padding: '0px'}}>
                  <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}</Col>
                </Row>
              </Container>
              <Form.Text className="text-muted">
                The image of the project.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="language">
              <Form.Label>Language</Form.Label>
              <select class="form-control" value={language}>
                <option value="python">Python</option>
                <option value="react">React</option>
                <option value="c++">C++</option>
              </select>
              <Form.Text className="text-muted">
                The major language of the project.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="hashtag">
              <Form.Label>Hashtag</Form.Label>
              <Form.Control
                type="hashtag"
                placeholder="Enter hashtag"
                value={hashtag}
                onChange={(e) => setHashtag(e.target.value)}
              ></Form.Control>
              <Form.Text className="text-muted">
                The topic of the project.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="githublink">
              <Form.Label>Github Link</Form.Label>
              <Form.Control
                type="githublink"
                placeholder="Enter github link"
                value={githublink}
                onChange={(e) => setGithubLink(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <textarea
                class="form-control"
                placeholder="Enter description"
                value={description}
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
                spellcheck="false"
              ></textarea>
            </Form.Group>
            <Form.Group controlId="Issues">
              <Form.Label>Issues</Form.Label>
              <textarea
                class="form-control"
                placeholder="Enter issue"
                value={issue}
                rows="3"
                onChange={(e) => setIssue(e.target.value)}
                spellcheck="false"
              ></textarea>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;

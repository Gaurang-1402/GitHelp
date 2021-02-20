import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Paginate from "../components/Paginate"
import ProductCarousel from "../components/ProductCarousel"
import Meta from "../components/Meta"
import { listProducts } from "../actions/productActions"
import { Card } from "react-bootstrap"

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Python projects</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col key='6030fcee26b9f63ad0b4dfa6' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa6`}>
                  <Card.Img src='/images/camera.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa6'`}>
                    <Card.Title as='div'>
                      <strong>Repo name1</strong>
                    </Card.Title>
                  </Link>

                  <Card.Text as='h3'>Some description of the repo</Card.Text>
                </Card.Body>
              </Card>
            </Col>


          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}

      <h1>React projects</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col key='6030fcee26b9f63ad0b4dfa6' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`6030fcee26b9f63ad0b4dfa7`}>
                  <Card.Img src='/images/playstation.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa7'`}>
                    <Card.Title as='h2'>
                      <strong>Electron Store: electronics eccomerce</strong>
                    </Card.Title>
                  </Link>

                  <Card.Text >This is repository needs help with bug fixes.</Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col key='' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/mouse.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Repo Name3</strong>
                    </Card.Title>
                  </Link>

                  <Card.Text>Some description of the repository</Card.Text>
                </Card.Body>
              </Card>
            </Col>


          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen

import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Dropdown, Button } from "react-bootstrap"
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
      <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    Filter by
    </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="">Programming language</Dropdown.Item>
    <Dropdown.Item href="">Interests</Dropdown.Item>
    <Dropdown.Item href="" >Frameworks</Dropdown.Item>
    <Dropdown.Item href="" >Field</Dropdown.Item>
    <Dropdown.Item href="" >Libraries</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
      <h1>Contribute to Python repositories</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
          <Col key='' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/caltox.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Cal Tox Tracker</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}} ><div style={{backgroundColor: "blue", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>feature</div>
                  <div style={{backgroundColor: "green", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>enhancement</div>
                  </Card.Text>
                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - GPS integration issues
                    </Card.Text>
                    <Card.Text>
                    - Emergency alert 
                    </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col key='' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/battleship.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Battleship</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "red", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>neccesary</div>
                  <div style={{backgroundColor: "green", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>enhancement</div>
                  </Card.Text>
                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - AI opponent glitches
                    </Card.Text>
                    <Card.Text>
                    - Leaderboard
                    </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col key='' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/chia.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Chia blockchain</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "blue", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>feature</div>
                  <div style={{backgroundColor: "purple", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>documentation</div>
                  </Card.Text>
                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - SHA256 improvement
                    </Card.Text>
                    <Card.Text>
                    - Cybersecurity 
                    </Card.Text>
                    

                </Card.Body>
              </Card>
            </Col>
            <Col key='' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/sanic.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Sanic Framework</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "red", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>neccesary</div>
                  </Card.Text>
                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - Routing is incorrect
                    </Card.Text>
                    <Card.Text>
                    - Middlewares ordering
                    </Card.Text>

                </Card.Body>
              </Card>
            </Col>



          </Row>
        </>
      )}

      <h1>Contribute to Javascript repositories</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3} className='align-items-stretch d-flex' key='6030fcee26b9f63ad0b4dfa6' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`6030fcee26b9f63ad0b4dfa7`}>
                  <Card.Img src='/images/electronstore.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa7'`}>
                    <Card.Title as='h2'>
                      <strong>Electron Store</strong>
                    </Card.Title>
                  </Link>

                  <Card.Text style={{display: 'flex'}}>
                    
                  <div style={{backgroundColor: "orange", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>nice to have</div>
                  <div style={{backgroundColor: "blue", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>feature</div>


                  </Card.Text>


                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - PayPal integration issues
                    </Card.Text>
                    <Card.Text>
                    - Cart functionality issues
                    </Card.Text>

                </Card.Body>
              </Card>
            </Col>


            <Col key='' sm={12} md={6} lg={4} xl={3}>
              <Card sm={12} md={6} lg={4} xl={3} className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/coviddashboard.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Covid Dashboard</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "green", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>enhancement</div>
                  <div style={{backgroundColor: "purple", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>document</div>
                  </Card.Text>
                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - Mobile integration feature
                    </Card.Text>
                    <Card.Text>
                    - Optimization problems
                    </Card.Text>

                </Card.Body>
              </Card>
            </Col>


            <Col key='' sm={12} md={6} lg={4} xl={3}>
              <Card sm={12} md={6} lg={4} xl={3} className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/sesame.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Sesame</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "blue", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>feature</div>

                  <div style={{backgroundColor: "orange", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>nice to have</div>
                  </Card.Text>
                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - Group video calling feature
                    </Card.Text>
                    <Card.Text>
                    - Youtube integration
                    </Card.Text>

                </Card.Body>
              </Card>
            </Col>


            <Col sm={12} md={6} lg={4} xl={3} key='' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/arkinvest.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Ark Investing</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "purple", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>documentation</div>
                  <div style={{backgroundColor: "red", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>neccesary</div>
                  </Card.Text>
                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - Yahoo Finance integration 
                    </Card.Text>
                    <Card.Text>
                    - Quant stat API issues
                    </Card.Text>

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

      <h1>Contribute to C++ repositories</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3} key='6030fcee26b9f63ad0b4dfa6' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`6030fcee26b9f63ad0b4dfa7`}>
                  <Card.Img src='/images/flappybird.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa7'`}>
                    <Card.Title as='h2'>
                      <strong>Flappy Bird</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "orange", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>nice to have</div>
                  <div style={{backgroundColor: "blue", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>feature</div>
                  </Card.Text>



                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - AI opponent feature
                    </Card.Text>
                    <Card.Text>
                    - Reward system fixes
                    </Card.Text>

                </Card.Body>
              </Card>
            </Col>


            <Col sm={12} md={6} lg={4} xl={3} key='' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/fprime.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Flight Software</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "red", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>neccesary</div>
                  <div style={{backgroundColor: "purple", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>documentation</div>
                  </Card.Text>

                  <Card.Text >
                    - Bug fixes

                    </Card.Text>
                    <Card.Text>
                    - Vector stability issues
                    </Card.Text>
                    <Card.Text>
                    - Cummulative integration
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={4} xl={3} key='' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/Pytorch.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Pytorch</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "green", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>enhancement</div>
                  <div style={{backgroundColor: "blue", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>feature</div>
                  </Card.Text>

                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - Release Tracker
                    </Card.Text>
                    <Card.Text>
                    - Cummulative integration
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col sm={12} md={6} lg={4} xl={3} key='' sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/6030fcee26b9f63ad0b4dfa8`}>
                  <Card.Img src='/images/electron.jpg' variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`/product/'6030fcee26b9f63ad0b4dfa8'`}>
                    <Card.Title as='h2'>
                      <strong>Electron</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text style={{display: 'flex'}}>
                  <div style={{backgroundColor: "orange", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>nice to have</div>
                  <div style={{backgroundColor: "red", color: 'white', borderRadius: '25px', display: 'inline-block', paddingLeft: '7px', paddingRight: '7px'}}>neccessary</div>
                  </Card.Text>

                  <Card.Text >
                    - Bug fixes
                    </Card.Text>
                    <Card.Text>
                    - Resource sharing
                    </Card.Text>
                    <Card.Text>
                    - Events by powerMonitor
                    </Card.Text>
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

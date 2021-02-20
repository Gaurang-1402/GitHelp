import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>

        <Carousel.Item key=''>
          <Link to={`/product`}>
            <Image src='/images/pytorch.jpg' alt='' fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                Pytorch 
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item key=''>
          <Link to={`/product`}>
            <Image src='/images/coviddashboard.jpg' alt='' fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                Covid-19 Dashboard 
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item key=''>
          <Link to={`/product`}>
            <Image src='/images/flappybird.jpg' alt='' fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                Flappy Bird
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item key=''>
          <Link to={`/product`}>
            <Image src='/images/caltox.jpg' alt='' fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                Caltox Tracker
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel

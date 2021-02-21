import React, { useState, useEffect } from 'react'
import { Card, ListGroup, Image, Modal, Container, Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  useEffect(() => {
    if (!userInfo) {
      history.push('/profile')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrders())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
    <Row className="justify-content-md-center">
      <Col>
      <Image src="../images/pup.jpg" roundedCircle />
      </Col>
      <Col>
      <ListGroup>
        <ListGroup.Item>Curtis Lee</ListGroup.Item>
        <ListGroup.Item>curtis_lee@berkeley.edu</ListGroup.Item>
        <ListGroup.Item action onClick={handleShow} variant='dark'>Update Profile</ListGroup.Item>
      </ListGroup>
      </Col>
      <Col xs={6}>
       <Card style={{width: '15rem'}}>
          <Card.Body>
           <Card.Title>Your Points: 75</Card.Title>
           <img class ='icon' src='../images/trophy.svg'></img>
           <Card.Text>
           </Card.Text>
          </Card.Body>
       </Card>
      </Col>
    </Row>
    <Row>
      <Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {message && <Message variant='danger'>{message}</Message>}
        {}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
 
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Profile Image" />
            </Form.Group>
          
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
        </Modal.Body>
      </Modal>

      </Col>


    </Row>
    <Row>
      <Col md={12}>
        <h2>Contribution Activity</h2>
        
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>CONTRIBUTION DATE</th>
                <th>ISSUE</th>
                <th>LINK</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody>
                  <td>Covid-19 Dashboard</td>
                  <td>February 20, 2021</td>
                  <td>fix header layout</td>
                  <td><a href='https://github.com/lit26/COVID19_Dashboard'>https://github.com/lit26/COVID19_Dashboard</a></td>
                  <td>50</td>
            </tbody>
            <tbody>
              <td>Cal ToxTrack</td>
              <td>January 15, 2021</td>
              <td>test out app</td>
              <td><a href='https://github.com/meganluisa/ca_pollution_application'>https://github.com/meganluisa/ca_pollution_application</a></td>
              <td>25</td>
            </tbody>
          </Table>
        
      </Col>
    </Row>
  </Container>
  )
}

export default ProfileScreen

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <>
      <Navbar />

      <Container className="my-5">
        <h2 className="text-center mb-4">Contact Us</h2>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary">Submit</Button>
        </Form>
      </Container>

      <Footer />
    </>
  )
}

export default Contact

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Card, Row, Col } from 'react-bootstrap'

function Projects() {
  return (
    <>
      <Navbar />

      <Container className="my-5">
        <h2 className="text-center mb-4">Our Projects</h2>

        <Row>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Learning Platform</Card.Title>
                <Card.Text>
                  A full-stack e-learning platform for students.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>AI Skill Tracker</Card.Title>
                <Card.Text>
                  Tracks learning progress using AI recommendations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Career Dashboard</Card.Title>
                <Card.Text>
                  Dashboard for monitoring skills and certifications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default Projects

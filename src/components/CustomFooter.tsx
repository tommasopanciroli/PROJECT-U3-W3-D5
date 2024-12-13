import { Container, Row, Col } from 'react-bootstrap'

const CustomFooter = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="mb-3">
          <Col xs={12} className="text-center">
            <p className="mb-2">Italia • English (UK)</p>
            <p className="mb-0">
              Copyright © 2024 Apple Inc. Tutti i diritti riservati.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={6}>
            <ul className="list-unstyled d-inline-flex gap-3">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Supporto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none"
                >
                  Condizioni dei servizi internet
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Apple Music e privacy
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} className="mt-3 mt-md-0">
            <ul className="list-unstyled d-inline-flex gap-3">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Avviso sui cookie
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Feedback
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <i className="bi bi-music-note-beamed fs-3"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default CustomFooter

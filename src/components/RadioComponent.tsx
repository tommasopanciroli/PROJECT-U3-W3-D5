import { Card, Col, Container, Row } from 'react-bootstrap'

const radioEpisodes = [
  {
    title: 'Pròlogo con Abuelo',
    cover: 'src/assets2/images/2a.png',
  },
  {
    title: 'Chill',
    cover: 'src/assets2/images/1a.png',
  },
  {
    title: 'Mùsica Uno',
    cover: 'src/assets2/images/1b.png',
  },
  {
    title: 'Club',
    cover: 'src/assets2/images/1c.png',
  },
  {
    title: 'Feel More Radio',
    cover: 'src/assets2/images/2b.png',
  },
  {
    title: 'Michael Bublè e Carly Pearce',
    cover: 'src/assets2/images/2c.png',
  },
  {
    title: 'Stephan Moccio',
    cover: 'src/assets2/images/2d.png',
  },
  {
    title: 'The Chart Show',
    cover: 'src/assets2/images/2e.png',
  },
]

const RadioComponent = () => {
  return (
    <Container>
      <h2 className="text-light my-4">Nuovi episodi radio</h2>
      <Row>
        {radioEpisodes.map((episode, i) => (
          <Col
            key={i}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4 d-flex justify-content-center"
          >
            <Card
              className="bg-dark text-light"
              style={{ width: '100%', maxWidth: '300px' }}
            >
              <Card.Img
                style={{ height: '280px' }}
                variant="top"
                src={episode.cover}
                alt={`Cover of ${episode.title}`}
              />
              <Card.Body>
                <Card.Title>{episode.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default RadioComponent

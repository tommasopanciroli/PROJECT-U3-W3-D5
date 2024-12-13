import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

interface Song {
  id: number
  title: string
  artist: {
    name: string
  }
  album: {
    cover: string
  }
}

const MainContent = () => {
  const [songs, setSongs] = useState<Song[]>([])
  const API_URL =
    'https://striveschool-api.herokuapp.com/api/deezer/search?q=cesarecremonini'

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        console.log(response)

        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore durante il recupero delle canzoni')
        }
      })
      .then((data) => {
        console.log('Canzoni ricevute', data)

        setSongs(data.data)
      })
      .catch((error) => {
        console.error('Errore nel recupero delle canzoni:', error)
      })
  }, [])

  return (
    <Container>
      <h2 className="text-light my-4">Nuove uscite</h2>
      <Row>
        {songs.map((song) => (
          <Col
            key={song.id}
            xs={12}
            sm={6}
            md={4}
            lg={2}
            className="mb-3 d-flex justify-content-center"
          >
            <Card className="bg-dark text-light" style={{ maxWidth: '200px' }}>
              <Card.Img
                variant="top"
                src={song.album.cover}
                alt={`Cover of ${song.title}`}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MainContent

import {Card, Container, Row, Col, Image} from "react-bootstrap"
import antmanImage from "../assets/images/film/antman.jpg"

const AnimeMovie = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">LIST ANIME</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="Dune Movies" className="images" id="anime"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ANT MAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 5 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default AnimeMovie
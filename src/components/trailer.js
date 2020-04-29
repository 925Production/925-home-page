import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './trailer.module.css'

class Trailer extends Component {
    render(){
        return (
            <div className={styles.background}>
                <Row className="justify-content-md-center">
                    <Col xs={3} md={4} className={styles.title}>
                        <h1>Trailer</h1>
                    </Col>
                    <Col md={8}>
                        <iframe className={styles.video}
                                src="https://youtu.be/fw3veHAGcrE"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                        </iframe>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Trailer

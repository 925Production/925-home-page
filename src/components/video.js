import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import video from '../video/test_videoplay.mp4'
import styles from './video.module.css'

class Video extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <div className={styles.intro}>
                    <p className={styles.title}>Eternity</p>
                    <h1 className={styles.character}>{props.intro}</h1>
                </div>
                <div className={styles.download}>
                <h1 className={styles.character}>{props.slogan}</h1>
                    <br/>
                    <Button href={"https://drive.google.com/open?id=1sIUhoZ8esnVJh5d2HX-LO260_jUDfued"} variant="dark" size="lg" target="_blank">{props.button}</Button>
                </div>
                <video className={styles.video}  autoPlay muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        )
    }
}

export default Video

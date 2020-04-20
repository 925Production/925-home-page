import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import video from '../video/test_videoplay.mp4'
import styles from './video.module.css'

class Video extends Component {
    render(){
        return (
            <div>
                <div className={styles.intro}>
                    <p className={styles.character}>Eternity</p>
                    <h1 className={styles.character}>Seek the truth in the temple and find back the future</h1>
                </div>
                <div className={styles.download}>
                    <h1 className={styles.character}>ARE YOU READY</h1>
                    <br/>
                    <Button variant="dark" size="lg">DOWNLOAD NOW</Button>
                </div>
                <video className={styles.video}  autoPlay muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        )
    }
}

export default Video
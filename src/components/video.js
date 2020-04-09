import React, { Component } from 'react'
import Layout from './layout'
import video from '../video/test_videoplay.mp4'
import styles from './video.module.css'

class Video extends Component {
    render(){
        return (
            <div>
                <video className={styles.video} src={video} autoPlay loop fluid></video>
            </div>
        )
    }
}

export default Video
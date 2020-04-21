import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styles from './article-blocks.module.css'

class ArticleBlock extends Component {
    
    render() {
        const props = this.props;
        return (
        <div className={styles.background}>
            <div className={styles.rows} >
                <div className={styles.title}>
                    <p>{props.title}</p>
                </div>
                <br />
                <div >
                    <p className={styles.article}>{props.article}</p>
                </div>
            </div>
            <Image className={styles.backgroundImage} src={props.background}></Image>
        </div>
        )
    }
}

export default ArticleBlock
import React, { Component } from 'react'

class ArticleFull extends Component {
    
    render() {
        console.log(this.props.article);
        const content = this.props.article.articleFull;
        return (
        <div>
            {/* <h1>{content}</h1> */}
        </div>
        )
    }
}

export default ArticleFull
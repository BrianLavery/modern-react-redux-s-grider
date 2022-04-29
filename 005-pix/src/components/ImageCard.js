import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { spans: 0 }

        // This is where we set up a Ref - using this to get image height (we don't use document.querySelector)
        this.imageRef = React.createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height / 10)

        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard
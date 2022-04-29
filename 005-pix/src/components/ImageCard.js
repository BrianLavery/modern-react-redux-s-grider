import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        // This is where we set up a Ref - using this to get image height (we don't use document.querySelector)
        this.imageRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.imageRef)
        console.log(this.imageRef.current.clientHeight)
    }

    render() {
        const { description, urls } = this.props.image

        return (
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard
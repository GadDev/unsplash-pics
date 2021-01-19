import React, { Component } from 'react';
import './ImageCard.css';
class ImageCard extends Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
		this.state = {
			span: 0,
		};
	}

	componentDidMount() {
		console.log(this.imageRef.current.clientHeight);
		this.imageRef.current.addEventListener('load', this.setSpans);
	}
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10 + 1);
		this.setState({ spans });
	};
	render() {
		const { description, urls, links } = this.props.image;
		console.log(this.props.image);
		return (
			<div
				className='image-card'
				style={{ gridRowEnd: `span ${this.state.spans}` }}
			>
				<img ref={this.imageRef} src={urls.regular} alt={description} />
				<a href={links.download} target='_blank' rel='noreferrer'>
					<i class='download icon'></i>
				</a>
			</div>
		);
	}
}

export default ImageCard;

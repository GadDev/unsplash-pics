import { Component } from 'react';

class SearchBar extends Component {
	state = {
		term: '',
	};
	onFormSubmit = (event) => {
		event.preventDefault();
		console.log(this.props);
		this.props.onSubmit(this.state.term);
	};
	render() {
		return (
			<div className='ui segment'>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label htmlFor='search-pic'>Image search</label>
						<input
							type='text'
							name='search-pic'
							value={this.state.term}
							onChange={(e) =>
								this.setState({ term: e.target.value })
							}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;

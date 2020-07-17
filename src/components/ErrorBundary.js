import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false,
		}
	}

	render() {
		if (this.state.hasError) {
			return <h1>Opps. That is not good.</h1>
		}
		else{
			return this.props.children;
		}
	}

	componentDidCatch(error, info) {
		// like try-catch block
		this.setState({ hasError: true });
	}
}

export default ErrorBoundary;
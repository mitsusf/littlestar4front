import React, { Component } from "react"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // New lifecycle method
    componentDidMount() {
        this.setState({ hasError: false});
    }
    render () {
        if (this.state.hasError){
            return <h1>Oops that's not good....</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    // You can log the error or send it to a logging service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render a fallback UI here
      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-red-100">
          <div className="bg-transparent p-8 rounded-lg shadow-md transform scale-100 hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl animate-bounce text-gray-800 font-bold mb-4">
              Oops! Something Went Wrong...
            </h1>
            <p className="text-gray-700">Please try again after some time.</p>

            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

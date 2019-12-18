import React from "react";
import PropTypes from 'prop-types';



class Icon extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
    };
  }

  componentDidMount() {
    // Subscribe to changes

  }

  componentWillUnmount() {
    // Clean up listener
  }

  handleChange() {
    // Update component state whenever the data source changes

  }

  render() {
    return (
    	<a target="_blank"s href="https://www.google.com" >
 <img src={this.props.path} width="25" height="25"/>
 </a>
    );
  }
}

export default Icon;
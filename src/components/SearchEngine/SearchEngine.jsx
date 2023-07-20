import React, { Component } from 'react';
import { useEffect, useState } from 'react';
class SearchEngine extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://cse.google.com/cse.js?cx=412a124be8d714cde';
        script.async = true;
        document.body.appendChild(script);
        const input = document.querySelector('.gsc-input');
        input.addEventListener('change', this.handleChange);
    }
    handleChange = (event) => {
        const value = event.target.value;
        console.log(value);
      }

    render() {
        return <div className="gcse-search" ></div>;
    }
}
export default SearchEngine;

import React, { Component } from 'react';
import { useEffect, useState } from 'react';
class SearchEngine extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://cse.google.com/cse.js?cx=412a124be8d714cde';
        script.async = true;
        document.body.appendChild(script);
        window.__gcse = {
            callback: () => {
                const input = google.search.cse.element.getElement('gsc-i-id1');
                input.onchange = () => {
                    const value = input.value;
                    console.log(value);
                };
            }
        };
    }
    render() {
        return <div className="gcse-search" ></div>;
    }
}
export default SearchEngine;

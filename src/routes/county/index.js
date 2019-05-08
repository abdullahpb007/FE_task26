import React, { Component } from 'react'
import FirstJson from './county_JSON.json';

class County extends Component {
    state = {}
    render() {
        return (
            <b>
                {console.log(FirstJson)}
            </b>

        );
    }
}

export default County;
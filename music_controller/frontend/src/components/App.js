import React, { Component } from "react";
import { react, render } from "react-dom";
import Homepage from './Homepage';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Homepage />
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv); 
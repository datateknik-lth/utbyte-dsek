import React from 'react';
import TableView from "./views/table-view/TableView";
import UniView from "./views/uni-view/UniView";
import './App.css';
import 'typeface-roboto';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unis: []
        };
    }

    render() {
        return (
            <Router>
                <Route path="/" exact component={TableView}/>
                <Route path="/:country/:uni" component={UniView}/>
            </Router>
        )
    }
}

export default App;

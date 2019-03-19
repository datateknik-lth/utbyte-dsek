import React from 'react';
import TableView from "./views/table-view/TableView";
import UniView from "./views/uni-view/UniView";
import './App.css';
import 'typeface-roboto';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";


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
                <div className="container">
                    <Route path="/" exact component={TableView}/>
                    <Route path="/:country/:uni" component={UniView}/>
                </div>
            </Router>
        )
    }
}

export default App;

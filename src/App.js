import React from 'react';
import TableView from "./views/table-view/TableView";
import UniView from "./views/uni-view/UniView";
import HomeView from "./views/home-view/HomeView";
import './App.css';
import 'typeface-roboto';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppBar from "./components/appbar/AppBar";
import PageNotFoundView from "./views/page-not-found-view/PageNotFoundView";
import CountryView from "./views/country-view/CountryView";


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
                <AppBar/>
                <div className="container">
                    <Route path="/" exact component={HomeView}/>
                    <Route path="/table" component={TableView}/>
                    <Route path="/uni/:country" component={CountryView}/>
                    <Route path="/uni/:country/:uni" component={UniView}/>
                    <Route path="*" exact component={PageNotFoundView}/>
                </div>
            </Router>
        )
    }
}

export default App;

import React from 'react';
import UniTable from "./components/uni-table/UniTable";
import './App.css';
import 'typeface-roboto';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Exchange studies at D-sek</h1>
                <UniTable></UniTable>
            </div>
        );
    }
}

export default App;

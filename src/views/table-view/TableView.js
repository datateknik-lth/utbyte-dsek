import React from "react";
import axios from "axios";
import UniTable from "./../../components/uni-table/UniTable";


class TableView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unis: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:4000/unis/")
            .then(res => {
                this.setState({unis: res.data});
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <UniTable unis={this.state.unis}/>
        )
    }
}

export default TableView;
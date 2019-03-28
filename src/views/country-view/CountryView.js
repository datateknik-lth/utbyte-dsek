import React from "react";
import axios from "axios";
import MyTable from "../../components/my-table/MyTable";
import UploadButton from "../../components/upload-button/UploadButton";
import {getUni} from "../../misc/HTTPRequester";


class CountryView extends React.Component {

    constructor(props) {
        super(props);
        const params = this.props.match.params;
        this.state = {
            country: ""
        };
    }

    render() {
        return (
            <div>
                <p>Every university that we have (or have had) an exchange program with in this country is listed here.</p>


            </div>
        )
    }
}

export default CountryView;
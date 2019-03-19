import React from "react";
import axios from "axios";
import MyTable from "../../components/my-table/MyTable";
import Button from "@material-ui/core/Button/Button";
import uuid from "uuid/v4";
import "./UploadButton.css";

class UploadButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input_id: uuid()
        };
    }

    render() {
        return(
            <div>
                <input
                    onChange={(e) => this.props.onSubmit(e.target.files)}
                    accept="application/pdf"
                    id={this.state.input_id}
                    type="file"
                />
                <label htmlFor={this.state.input_id}>
                    <Button variant="contained" component="span">Upload</Button>
                </label>
            </div>
        )
    }
}

export default UploadButton;
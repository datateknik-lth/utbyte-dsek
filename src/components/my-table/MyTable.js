import React from "react";
import "./MyTable.css";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon"
import uuid from "uuid/v4";

class MyTable extends React.Component {

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
    }

    getHeader(header) {
        const pos = this.props.headers.indexOf(header);
        const tooltip = this.props.header_tooltips ? this.props.header_tooltips[pos] : undefined;

        if (tooltip) {
            return <Tooltip title={tooltip}>
                <Icon>help_outline</Icon>
            </Tooltip>
        }
    }

    render() {
        const data = this.props.dataMatrix ? this.props.dataMatrix : [];
        return (
            <div>
                <table className="table table-striped table-sm">
                    <thead className="thead-dark">
                    <tr>
                        {this.props.headers.map(h => {
                            return <th key={h}>{h}{this.getHeader(h)}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(row => {
                        return <tr key={uuid()}>{row.map(elem => {
                            return <td key={uuid()}>{elem}</td>
                        })}</tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default MyTable;
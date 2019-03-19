import React from "react";
import "./MyTable.css";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon"
import {HelpOutline} from "@material-ui/icons";

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
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        {this.props.headers.map(h => {
                            return <th key={h}>{h}{this.getHeader(h)}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.rows}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default MyTable;
import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

class UniTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Hejsan</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </div>
        )
    }

}

export default UniTable;
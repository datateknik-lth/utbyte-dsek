import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import "./UniTable.css";

class UniTable extends React.Component {

    constructor(props) {
        super(props);
        this.getRows = this.getRows.bind(this);
    }

    arrangeByCountry(objToFill, obj) {
        const country = obj.country_norm;
        if (country in objToFill) {
            objToFill[country].push(obj);
        } else {
            objToFill[country] = [obj];
        }
    }

    getRows() {
        let unis = this.props.unis;
        let unisByCountry = {};

        if (unis.length) {
            unis.forEach(uni => this.arrangeByCountry(unisByCountry, uni));

            return Object.keys(unisByCountry).map(key => {
                const uniList = unisByCountry[key];
                const firstUni = uniList[0];
                return <tr key={firstUni.country_norm}>
                    <td>{firstUni.country}</td>
                    <td>
                        {uniList.map(uni => {
                            return <ul key={uni.name_norm}>
                                <li>
                                    <a href={"/" + uni.country_norm + "/" + uni.name_norm}>{uni.name}</a>
                                </li>
                            </ul>
                        })}
                    </td>
                </tr>
            })
        } else {
            return <TableRow></TableRow>;
        }
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>University</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRows()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default UniTable;
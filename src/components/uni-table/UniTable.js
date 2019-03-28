import React from "react";
import {TableRow} from "@material-ui/core";
import "./UniTable.css";
import MyTable from "../my-table/MyTable";


class UniTable extends React.Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        console.log(this.getData());
    }

    static arrangeByCountry(objToFill, obj) {
        const country = obj.country_norm;
        if (country in objToFill) {
            objToFill[country].push(obj);
        } else {
            objToFill[country] = [obj];
        }
    }

    static getHTMLList(uniList) {
        return uniList.map(uni => {
            return <ul key={uni.name_norm}>
                <li>
                    <a href={"/uni/" + uni.country_norm + "/" + uni.name_norm}>{uni.name}</a>
                </li>
            </ul>
        })
    }

    getData() {
        let unis = this.props.unis;
        let unisByCountry = {};
        let allData = [];

        if (unis.length) {
            unis.forEach(uni => UniTable.arrangeByCountry(unisByCountry, uni));

            Object.keys(unisByCountry).forEach(country_norm => { // For each country
                const uniList = unisByCountry[country_norm];
                const firstUni = uniList[0];
                allData.push([<a href={"/uni/" + firstUni.country_norm}>{firstUni.country}</a> , UniTable.getHTMLList(uniList)]);
            })
        }
        return allData;
    }

    render() {
        return (
            <div>
                <MyTable
                    headers={["Country", "University"]}
                    dataMatrix={this.getData()}/>
            </div>
        )
    }

}

export default UniTable;
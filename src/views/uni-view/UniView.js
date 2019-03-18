import React from "react";
import axios from "axios";

class UniView extends React.Component {

    constructor(props) {
        super(props);
        const params = this.props.match.params;
        this.state = {
            name: "",
            country: "",
            name_norm: params["uni"]
        };
    }

    componentDidMount() {
        axios.get("http://localhost:4000/unis/" + this.state.name_norm)
            .then(res => {console.log(res.data); this.setState({
                name: res.data.name,
                country: res.data.country
            })})
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default UniView;
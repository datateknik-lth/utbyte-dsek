import React from "react";
import axios from "axios";
import MyTable from "../../components/my-table/MyTable";
import UploadButton from "../../components/upload-button/UploadButton";
import {postStudyPlan} from "../../misc/HTTPRequester";
import FormData from "form-data";

class UniView extends React.Component {

    constructor(props) {
        super(props);
        const params = this.props.match.params;
        this.state = {
            name: "",
            country: "",
            name_norm: params["uni"]
        };
        this.onStudyPlanUpload = this.onStudyPlanUpload.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:4000/unis/" + this.state.name_norm)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    country: res.data.country
                })
            })
    }

    onStudyPlanUpload(files) {
        const file = files[0];
        let formData = new FormData();

        formData.append("pdf", "sdasd");
        formData.append("comments", "A really lit study plan!");
        formData.append("approved", true);
        formData.append("uploaded_by", "Sebastian Nerd");
        formData.append("date_uploaded", "2012-02-1");
        formData.append("university", "australian_national_university");

        let plan = {
            "pdf": file,
            "comments": "A really lit study plan!",
            "approved": true,
            "uploaded_by": "Sebastian Negardt",
            "date_uploaded": Date.now(),
            "university": "australian_national_university"
        }
        postStudyPlan(formData, formData.getHeaders())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.country}</h3>

                <UploadButton
                    onSubmit={this.onStudyPlanUpload}
                />
                <MyTable
                    headers={["Download", "Date", "Name", "Approved", "Comments"]}
                    header_tooltips={[null, "Date of exchange on the format [year-[S1/S2/S3]]. Usually the fall term equals S1 and spring equals S2. Some universities have trimesters, where the last semester is called s3.",
                        "Name of uploader", "Is this study plan approved by the program planner?"]}
                />
            </div>
        )
    }
}

export default UniView;
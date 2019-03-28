import React from "react";
import axios from "axios";
import MyTable from "../../components/my-table/MyTable";
import UploadButton from "../../components/upload-button/UploadButton";
import {postStudyPlan} from "../../misc/HTTPRequester";
import {getUni} from "../../misc/HTTPRequester";


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
        getUni(this.state.name_norm)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    country: res.data.country
                })
            })
            .catch(err => console.log(`Failed to fetch uni ${this.state.name_norm}. Error: ${err}`))
    }

    onStudyPlanUpload(files) {

        const file = files[0];
        let formData = new FormData();

        formData.append("pdf", file, file.name);
        formData.append("comments", "A really lit study plan!");
        formData.append("approved", true);
        formData.append("uploaded_by", "Melker's mamma");
        formData.append("date_uploaded", new Date());
        formData.append("university", "australian_national_university");

        postStudyPlan(formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (

            <div>
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Sidebar</h3>
                    </div>

                    <ul className="list-unstyled componenents">
                        <UploadButton onSubmit={this.onStudyPlanUpload}>Upload</UploadButton>

                    </ul>

                </nav>
                <h1>{this.state.name}</h1>
                <h3>{this.state.country}</h3>

                <h2>Study plans</h2>
                <p>Here you can (hopefully) find study plans from kind souls who have gone through the trouble of creating their own. Don't
                    forget to
                    upload <b>your</b> study plan when you have it approved. It is okay to upload study plans that are not approved, but of
                    course,
                    approved
                    ones are preferred.</p>
                <MyTable
                    headers={["Download", "Date", "Name", "Approved", "Comments"]}
                    header_tooltips={[null, "Date of exchange on the format [year-[S1/S2/S3]]. Usually the fall term equals S1 and spring equals S2. Some universities have trimesters, where the last semester is called s3.",
                        "Name of uploader", "Is this study plan approved by the program planner?"]}
                />

                <h2>Links</h2>
                <p>This is a collection of useful links to for example course catalogues or housing websites.</p>
                <MyTable
                    headers={["Link", "Title", "Description"]}
                />

                <h2>Scholarships</h2>
                <p>Specific links or information about scholarships.</p>

                <h2>Tips & Tricks</h2>
                <p>This can be anything that doesnt't fit into the other categories, like tips on what to do (or not do) in the country,
                    tricks how to save money etc.</p>

            </div>
        )
    }
}

export default UniView;
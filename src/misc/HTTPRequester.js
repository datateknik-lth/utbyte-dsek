import axios from "axios";

const HOST = "http://localhost"
const PORT = 4000;

export function postStudyPlan(plan, headers) {
    debugger;
    console.log(plan);
    return fetch(`${HOST}:${PORT}/study-plans/add`, {
            method: "POST",
            body: plan,
            headers: headers})
        .then(res => res.text())
    // return axios.post("http://localhost:4000/study-plans/add", plan, {
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     }
    // })
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err.data));
}


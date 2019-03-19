import axios from "axios";

export function postStudyPlan(plan, headers) {
    return fetch("http://localhost:4000/study-plans/add", {
        method: "POST",
        body: plan,
        headers: headers
    })
        .then(res => res.text())
    // return axios.post("http://localhost:4000/study-plans/add", plan, {
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     }
    // })
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err.data));
}


const HOST = "http://localhost";
const PORT = 4000;
import axios from "axios";
/**
 * POSTs a JSON study plan to the server. Returns the response in JSON format.
 * @param plan
 * @param headers
 * @returns {Promise<Response | never>}
 */
export async function postStudyPlan(plan, headers) {
    return axios.post(`${HOST}:${PORT}/study-plans/add`)
    return fetch(`${HOST}:${PORT}/study-plans/add`, {
        method: "POST",
        body: plan,
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data"
        }
    })
        .then(res => res.json())
}


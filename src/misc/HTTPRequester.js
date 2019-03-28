import axios from "axios";
const HOST = "http://localhost";
const PORT = 4000;

/**
 * POSTs a JSON study plan to the server. Returns the response in JSON format.
 * @param plan
 * @param headers
 * @returns {Promise<Response | never>}
 */
export async function postStudyPlan(plan) {
    return axios.post(`${HOST}:${PORT}/study-plans/add`);
}

export async function getUni(uni_norm) {
    return axios.get(`${HOST}:${PORT}/unis/by_uni/${uni_norm}`);
}

export async function getUnisByCountry(country_norm) {
    return axios.get(`${HOST}:${PORT}/unis/by_country/${country_norm}`);
}
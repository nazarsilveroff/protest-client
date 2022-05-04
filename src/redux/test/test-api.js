import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_BASE_URL

axios.defaults.baseURL = SERVER_URL;

const getQuestions = async (type) => {
        const {data: {questions}} = await axios.get(`qa-test/${type}`)
        return questions
}

const getResults = async (type,answers) => {
        const {data} = await axios.post(`qa-test/${type}`,answers)
        return data
}

const testApi = {
    getQuestions,
    getResults
};

export default testApi;

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

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

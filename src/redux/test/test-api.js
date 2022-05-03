import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const getQuestions = async (type) => {
    try {
        const {data: {questions}} = await axios.get(`qa-test/${type}`)
        return questions
    } catch (err) {
        console.log(err)
    }
}

const getResults = async (type,answers) => {
    try {
        const {data} = await axios.post(`qa-test/${type}`,answers)
        return data
    } catch (err) {
        console.log(err)
    }
}

const testApi = {
    getQuestions,
    getResults
};

export default testApi;

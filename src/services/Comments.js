import axios from "axios";
export default {
    getProblemsId(data) {
        
        return axios.get(`https://projectdb3-lb4-beta-test.herokuapp.com/comments/${data}`,{
            params: data
        })
    },
}
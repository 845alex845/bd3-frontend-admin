import axios from "axios";
export default {
    getProblems() {
        return axios.get(`https://projectdb3-lb4-beta-test.herokuapp.com/problems/lookup/users`
        )
    },
    createProblems(data){
        return axios.post('https://projectdb3-lb4-beta-test.herokuapp.com/problems',data)
    }
}
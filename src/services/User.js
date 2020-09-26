import axios from "axios";
// import Vue from "vue";

export default {
    login(data) {
        return axios.post(`https://projectdb3-services.herokuapp.com/login`, data
        )
    }
}
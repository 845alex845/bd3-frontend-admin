<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
const defaultForm={
    problemId:10,
    userId:10,
    category:'Internet',
    title:'',
    date:'2020-09-30T01:40:46.643Z',
    description:'',
    solved:false,
    score:0,
    isPrivate:false,
    image:'https://www.internetgratisandroid.com/wp-content/uploads/2016/10/modem-claro-2017.jpg',
    usersWhoLike:[],
    usersWhoDislike:[]
}
import ProblemService from '@/services/Problems'

export default {
name:'modalProblem',
data(){
    return{
        dialog:false,
        form:{...defaultForm}
    }
},
methods:{
    open(item){
        console.log(item)
        this.dialog=true;
    },
    async submit(){
        try {
            console.log(this.form)
            let res = await ProblemService.createProblems(this.form)
            console.log(res)
            this.dialog=false;
        } catch (error) {
            console.log(error)
        }
    }
}
}
</script>


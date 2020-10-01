<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
import ProblemService from '@/services/Problems'
import CommentService from '@/services/Comments'
import ProblemModal from '../modal/modalProblem/component'
export default {
name:'home-dashboard',
components:{
"problem-modal":ProblemModal
},
data(){
    return{
      problemList:[],
      
    }
},
methods:{
    formatDate(date){
      if(!date) return null
      const[year,month,day]=date.substr(0,10).split('-')
      return `${day} de ${this.formatMonth(month)} del ${year}`
    },
    createProblems(item){
      this.$refs.createProblemModal.open(item);
    },
    async getComment(id){
      let res
      try {
         res= await CommentService.getProblemsId(id)
        console.log(res)
        
      } catch (error) {
        console.log(error)
      }
      return res;
    },
    addLike(){

    },  
    minusLike(){

    },  
    formatMonth(month){
      switch (month){
        case '01':
          return 'enero';
        case '02':
          return 'febrero';
        case '03':
          return 'marzo';
        case '04':
          return 'abril';
        case '05':
          return 'mayo';
        case '06':
          return 'junio';
        case '07':
          return 'julio';
        case '08':
          return 'agosto';
        case '09':
          return 'septiembre';
        case '10':
          return 'octubre';
        case '11':
          return 'noviembre';
        case '12':
          return 'diciembre';
      }
    }
},
async created(){
  try {
    let res=await ProblemService.getProblems();
    this.problemList=res.data.reverse();
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
},


}
</script>


<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
import OptionModal from '../modal/modalOption/component'
export default {
name:'request-dashboard',
components:{
    "option-modal":OptionModal
},
data(){
    return{

    }
},
methods:{
    createProblemOption(option){
        this.$refs.createOptionProblem.open(option)
    }
}

}
</script>


<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
const defaultForm ={
    username:'',
    password:''
}
export default {
name:'login-form',
data(){
    return{
        form:{...defaultForm}
    }
},
methods:{
    signin(){
        // if(){

            return this.$router.push({ name: "home" });
        // }
        // else{
        //     alert("usuario no registrado")
        // }
    }
}

}
</script>


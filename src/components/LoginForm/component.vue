<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
import UserService from '@/services/User'
const defaultForm ={
    username:'JRC',
    password:'12345'
}
export default {
name:'login-form',
data(){
    return{
        form:{...defaultForm}
    }
},
methods:{
    async signin(){
        // if(){
            try {
                console.log(this.form)
                let response = await UserService.login(this.form);
                console.log("GAa")
                console.log(response)
            } catch (error) {
                console.log(error);
            }
            return this.$router.push({ name: "home" });
        // }
        // else{
        //     alert("usuario no registrado")
        // }
    }
}

}
</script>


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
            try {
                console.log(this.form)
                let response = await UserService.login(this.form);
                console.log(response.data)
                if(response.data.ok==true){    
                this.$localStorage.set("currentUser_claro", response.data.user); 
                return this.$router.push({ name: "home" });
                }

            } catch (error) {
                console.log(error);
            }
            
             
    }
}

}
</script>


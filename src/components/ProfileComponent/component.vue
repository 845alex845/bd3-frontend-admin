<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
export default {
name:'profile-dashboard',
data(){
    return{
        form:{}
    }
},
created(){
    this.form=this.$localStorage.get("currentUser_claro"); 
    console.log("profile",this.form)
    this.form.names=this.form.firstname+' '+this.form.lastname
    this.form.date=this.form.birthdate.slice(0,10)
    this.form.role=this.form.role!='worker'?'Trabajador':'Cliente'
    this.form.gender=this.form.gender=='M'?'Masculino':'Femenino'
}
}
</script>

<template>
<div class="login">
    <div class="login__content d-flex justify-content-center align-items-center">
        <div class="col-md-6 border">       
            <div class="logo d-flex justify-center align-center">
                <img src="@/assets/images/logo.png" alt="">
            </div>
        </div>
        <div class="col-md-6">
          <login-form></login-form>
        </div>    
    </div>
</div>
</template>
<script>
import LoginForm from "../components/LoginForm/component";
export default {
  name: "LoginPage",
  components: {
    LoginForm
  },
  data(){
    return{
      
    }
  },  
}
</script>

<style lang="scss" scoped>
.login{
  height: 100vh;
  background-color:#c7bbbb;
  &__content{
  height: 100vh;
    .logo{
      img{
        width: 60%;
      }
    }
  }
    // background: #F00000;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to right, #DC281E, #F00000);  /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(to right, #DC281E, #F00000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
<template>
  <dashboard-layout>
    <home-component></home-component>
  </dashboard-layout>
</template>

<script>
import HomeComponent from "../components/HomeComponent/component"
import dashboard from "../layouts/dashboard"
export default {
    name:'HomePage',
    components:{
    "dashboard-layout":dashboard,
    "home-component":HomeComponent
    }
}
</script>
<style >

</style>
<template>
  <dashboard-layout>
    <profile-component></profile-component>
  </dashboard-layout>
</template>

<script>
import ProfileComponent from "../components/ProfileComponent/component"
import dashboard from "../layouts/dashboard"
export default {
    name:'ProfilePage',
    components:{
    "dashboard-layout":dashboard,
    "profile-component":ProfileComponent
    }
}
</script>
<style >

</style>
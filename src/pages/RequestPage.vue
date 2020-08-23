<template>
  <dashboard-layout>
<request-component></request-component>
  </dashboard-layout>
</template>

<script>
import RequestComponent from "../components/RequestComponent/component"
import dashboard from "../layouts/dashboard"
export default {
    name:'RequestPage',
    components:{
    "dashboard-layout":dashboard,
    "request-component":RequestComponent
    }
}
</script>
<style >

</style>
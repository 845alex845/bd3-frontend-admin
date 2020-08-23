<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
      <!-- <v-snackbar top :timeout="3500" :color="color"  v-model="snackbar" class="text-center" width="100%">
        <p class="text-center my-auto" >
        {{ text }}
        </p>
      </v-snackbar> -->
  </v-app>
</template>
<script>
// import { mapState } from "vuex";
export default {
computed:{
      // ...mapState(["text", "snackbar", "color"]),
}
};
</script>

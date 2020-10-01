<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
import PostService from '@/services/Post'
export default {
name:'post-dashboard',
data(){
    return{
        postList:[],
        dialog:false,
        form:{}
    }
},
methods:{
    viewDetails(item){
        this.dialog=true;
        this.form=item

    }
},
created(){
    this.postList=PostService.getPostData();
}
}
</script>


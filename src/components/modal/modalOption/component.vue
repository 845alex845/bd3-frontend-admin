<template>
<v-dialog v-model='dialog' width="1080" style="min-height:280px;">
    <v-card style="min-height: 200px; border-radius: 10px;"  >
        <div class="px-3 d-flex">
            <div class="col-6">
                <img src="@/assets/images/help.gif" alt="">
            </div>
            <div class="col-6 pl-10">
                <p style="font-weight:600; font-size:1.5em">REGISTRE SU INCONVENIENTE</p>
                <v-text-field
                        label="Título"
                        required
                        v-model="form.title"
                        readonly
                ></v-text-field>
                <v-textarea
                        v-model="form.description"
                        color="#626262"
                        label="Agrege una descripción."
                        auto-grow
                        rows="1"
                        row-height="8"
                ></v-textarea>
                <v-text-field  
                      v-model="form.category"                  
                        label="Categoría"
                        required
                        readonly
                ></v-text-field>
                <v-file-input
                        hide-details
                        accept="image/*"
                        label="File input"
                ></v-file-input>
            <div class="d-flex justify-end mt-5 ">
                <v-btn small color="#D8D8D8" @click="submit" loading="loading"><p>REGISTRAR</p></v-btn>
            </div>   
            </div>       
        </div>
    </v-card>    
</v-dialog>
</template>

<script>
const defaultForm={
    problemId:11,
    userId:10,
    category:'',
    title:'',
    date:'2020-09-30T01:40:46.643Z',
    description:'',
    solved:false,
    score:0,
    isPrivate:true,
    image:'data:image/jpeg;base64,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',
    usersWhoLike:[],
    usersWhoDislike:[]
}
import ProblemService from '@/services/Problems'

export default {
    name:'options',
    data(){
        return{
            dialog:false,
            loading:false,
            form:{...defaultForm}
        }
    },
    methods:{
        open(option){
            this.dialog=true;
            this.form.category=option;
        },
       async submit(){
        try {
            console.log(this.form)
            this.loading=true;
            let res = await ProblemService.createProblems(this.form)
            this.loading=false;
            console.log(res)
            this.dialog=false
        } catch (error) {
            console.log(error)
        }
        }
    }
}
</script>

<style>

</style>
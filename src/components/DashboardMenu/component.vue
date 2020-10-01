<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
export default {
name:'dashboard',
data(){
    return{
    item: 1,
    items: [
        { text: 'HOME', icon: 'mdi-star',name:'home' },
        { text: 'MI CLARO', icon: 'mdi-star',name:'profile' },
        { text: 'RECLAMAR', icon: 'mdi-folder',name:'request' },
        { text: 'MIS SOLICITUDES', icon: 'mdi-folder',name:'post' },
        { text: 'SUGERENCIAS', icon: 'mdi-folder',name:'' },
        // { text: 'Contactos', icon: 'mdi-account-multiple' },
        // { text: '', icon: 'mdi-star' },
        // { text: 'Recent', icon: 'mdi-history' },
        // { text: 'Offline', icon: 'mdi-check-circle' },
        // { text: 'Uploads', icon: 'mdi-upload' },
        // { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    }
}
}
</script>


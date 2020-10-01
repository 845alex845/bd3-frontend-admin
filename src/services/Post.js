const data = [
{
    id: '00001',
    category: 'Producto',
    title: 'Modem antiguo',
    description: 'He tenido problemas con el modem ya que lo compré hace 4 años, creen que haya caducidad del servicio? El plan que me ofrecía es muy bueno',
    date: '2020-09-10',
    isPrivate:false,
    score:3,
    status:false,
    process:['Su solicitud fue enviada.','Su solicitud está siendo vista por los administradores.', 'Solicitud fue derivada a observación.','Su solicitud está en proceso.','Su solicitud está siendo atendida.']
},
{
    id: '00001',
    category: 'Producto',
    title: '¿Existe un plan superior a los 20 mbps de Internet Fijo Inalámbrico de Claro?',
    description: 'He notado que para videoconferencias este plan de 20 mbps se queda muy corto en velocidad y en mi distrito tengo por lo general de dos a tres rayas de intensidad de conexión que me imagino que influya en la calidad de conexión.',
    date: '2020-09-10',
    isPrivate:false,
    score:2,
    status:false,
    process:['Su solicitud fue enviada.','Su solicitud está siendo vista por los administradores.', 'Solicitud fue derivada a observación.','Su solicitud está en proceso.','Su solicitud está siendo atendida.','Solicitud finalizada.']
},
// {
//     id: '00001',
//     category: 'Internet',
//     title: 'Problemas con mi Wifi',
//     description: 720,
//     date: '2020-09-18',
//     isPrivate:true,
//     score:10,
//     status:false,
//     process:['Su solicitud fue enviada.','Su solicitud está siendo vista por los administradores.', 'Solicitud fue derivada a observación.','Su solicitud está en proceso.','Su solicitud está siendo atendida.','Solicitud finalizada.']
// },
// {
//     id: '00001',
//     category: 'Chip',
//     title: '',
//     description: 720,
//     date: '2020-09-19',
//     isPrivate:true,
//     score:3,
//     status:true,
//     process:['Su solicitud fue enviada.','Su solicitud está siendo vista por los administradores.', 'Solicitud fue derivada a observación.','Su solicitud está en proceso.','Su solicitud está siendo atendida.','Solicitud finalizada.']
// },
// {
//     id: '00001',
//     category: 'Internet',
//     title: '',
//     description: 720,
//     date: '2020-09-30',
//     isPrivate:true,
//     score:8,
//     status:true,
//     process:['Su solicitud fue enviada.','Su solicitud está siendo vista por los administradores.', 'Solicitud fue derivada a observación.','Su solicitud está en proceso.','Su solicitud está siendo atendida.','Solicitud finalizada.']
// },
// {
//     id: '00001',
//     category: 'Servicio',
//     title: '',
//     description: 720,
//     date: '2020-09-26',
//     isPrivate:true,
//     score:3,
//     status:true,
//     process:['Su solicitud fue enviada.','Su solicitud está siendo vista por los administradores.', 'Solicitud fue derivada a observación.','Su solicitud está en proceso.','Su solicitud está siendo atendida.','Solicitud finalizada.']
// },
// {
//     id: '00001',
//     category: 'Servicio',
//     title: '',
//     description: 720,
//     date: '2020-09-15',
//     isPrivate:true,
//     score:1,
//     status:true,
//     process:['Su solicitud fue enviada.','Su solicitud está siendo vista por los administradores.', 'Solicitud fue derivada a observación.','Su solicitud está en proceso.','Su solicitud está siendo atendida.','Solicitud finalizada.']
// },
// {
//     id: '00001',
//     category: 'Producto',
//     title: '',
//     description: 720,
//     date: '2020-01-24',
//     isPrivate:true,
//     score:3,
//     status:true,
//     process:['Su solicitud fue enviada.','Su solicitud está siendo vista por los administradores.', 'Solicitud fue derivada a observación.','Su solicitud está en proceso.','Su solicitud está siendo atendida.','Solicitud finalizada.']
// },
// {
//     id: '00001',
//     category: 'Producto',
//     title: '',
//     description: 720,
//     date: '2020-05-10',
//     isPrivate:true,
//     score:25,
//     status:true,
//     process:['Su solicitud fue enviada.','Su solicitud está siendo vista por los administradores.', 'Solicitud fue derivada a observación.','Su solicitud está en proceso.','Su solicitud está siendo atendida.','Solicitud finalizada.']
// },


]
export default {
getPostData() {
    return data;
}
}
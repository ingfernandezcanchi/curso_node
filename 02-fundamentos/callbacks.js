/*setTimeout(function (){
    console.log("Hola Mundo");
},1000);*/


const getUsuarioID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        callback(usuario);    
    }, 1500);

}


getUsuarioID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});

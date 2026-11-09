const boton = document.querySelector("#boton");
const respuestaUsuario = document.querySelector("#respuestaUsuario");


//EVENTOS 
boton.addEventListener("click", (ev) => {
    obtenerUsuario();
    //console.log(boton)
});
//La promesa debe resolver con un objeto de usuario ficticio (nombre, correo electrónico).

//FUNCIONES
//Crea una función que simule una llamada a una API y devuelva una promesa.

const consultaUsuario = async () => {
    const usuario = { id: 1, nombre: "Pepe", email: "nombre@nombre.com" };
    //console.log(usuario)
        if (usuario) {
            return usuario;
        }else {
            throw 'El usuario no existe';
        };
};
const pintarUsuario = async (usuario) => {
    const usuarioFinal = document.createElement('UL');
    const nombreUsuario = document.createElement('LI');
    nombreUsuario.textContent = usuario.nombre;
    const emailUsaurio = document.createElement('Li');
    emailUsaurio.textContent = usuario.email;
    usuarioFinal.append(nombreUsuario, emailUsaurio);
    respuestaUsuario.append(usuarioFinal);
};

//INVOCACIÓN
const obtenerUsuario = async () => {
    try {
        //espera a que la promesa se resuelva
        const resultado = await pintarUsuario();
        // solo si la promesa fue exitosa
        console.log(resultado);
    } catch (error) {
        // si la promesa es rechazada
        console.log(error);
    } 
};
obtenerUsuario();

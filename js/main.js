var firebaseConfig = {
    apiKey: "AIzaSyBfc6FqXYgJQh92qqM6SeFj0Mp_ynFgQFI",
    authDomain: "portafolio-88ce3.firebaseapp.com",
    databaseURL: "https://portafolio-88ce3.firebaseio.com",
    projectId: "portafolio-88ce3",
    storageBucket: "portafolio-88ce3.appspot.com",
    messagingSenderId: "1047604769765",
    appId: "1:1047604769765:web:ee8195413eeb0e79c3350c"
};
firebase.initializeApp(firebaseConfig);

const form = document.getElementById('formulario')

const firestore = firebase.firestore();

const docRef = firestore.collection("colaboraciones")
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    var nombreVar = document.getElementById('nombre').value;
    var telefonoVar = document.getElementById('telefono').value;
    var mensajeVar = document.getElementById('mensaje').value;
    docRef.doc(`${nombreVar}${telefonoVar}`).set({
        nombre: nombreVar,
        telefono: telefonoVar,
        mensaje: mensajeVar
    }).then(()=>{
        console.log('Enviada')
        location.reload();
    })
    .catch((e)=>{console.log(e)})
    console.log(nombre, telefono, mensaje)
})

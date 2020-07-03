import API from './api' // esto es para crear una instancia base
//el export es para poder usar la funcion fuera es decir como un public
export{
  login,
  getAllPosts //la pongo para usarla
};

function login(username, password) {
  return API.post('/users/signin', {//sino creo una instancia base tengo que poner toda la url
    username,
    password
  }).then(result => result.data)// lo que me lleva del servidor siempre todo esta en data
  .catch(function(error){
        //TODO When an error status is sent by server (also in the rest of calls!)
  });
}// el then lo que dice es voy hacer con el resultado tal cosa y casi siempre se pone una funcion

function getAllPosts() {
  return API.get('/posts').then(res => res.data);
}

import API from './api' // esto es para crear una instancia base
//el export es para poder usar la funcion fuera es decir como un public
export{
  login,
  getAllPosts,
  getMyPosts,
  deletePost,
  postNewPost,
  putExistingPost,
  postNewUser //la pongo para usarla
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

function getMyPosts(iduser) {
  return API.get('/posts/all/'+iduser).then(res => res.data);
}

function postNewUser(username, password, fullname, email, role) {
  return API.post('/users', {
    username,
    password,
    fullname,
    email,
    role }).then(result => result.data);
}

function deletePost(idpost) {
  return API.delete('/posts/'+idpost).then(result => result.data);
}
//creando un post segun el esquema
function postNewPost(iduser, title, description) {
  return API.post('/posts', {
    iduser,
    title,
    description}).then(result => result.data);
}// el servidor me devuelve un resultado que la guardo en result

function putExistingPost(idpost, title, description) {
  return API.put('/posts/'+idpost, {
    title,
    description}).then(result => result.data);
}

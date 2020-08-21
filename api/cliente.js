listarCliente = () => {
   return fetch ('http://localhost:4000/Clientes')
.then(resposta =>{
  return  resposta.json()
})
.then(json =>{
    
    return json
})
}
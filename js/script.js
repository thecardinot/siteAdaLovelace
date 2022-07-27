document.getElementById("botãoEnviar").addEventListener("click")


if  (document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
  alert("Prontinho! Você receberá as novidades por email.")
}else{
  alert("Por favor, preencha os campos nome e email!")
}

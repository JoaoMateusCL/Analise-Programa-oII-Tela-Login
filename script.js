login = document.getElementById("login")
senha = document.getElementById("senha")
btn = document.getElementById("btn")
mensagem = document.getElementById("mensagem")

btn.addEventListener("click", function(evento)
{
    evento.preventDefault()
    if(login.value === "admin" && senha.value === "admin")
    {
        mensagem.classList.remove("mensagem_erro")
        login.classList.remove("invalida")
        mensagem.classList.add("mensagem_sucesso")
        mensagem.innerHTML = "Logado com sucesso com sucesso"
    } 
    else
    {
        mensagem.classList.remove("mensagem_sucesso")
        login.classList.add("invalida")
        mensagem.classList.add("mensagem_erro")
        mensagem.innerHTML = "login ou senha incorretos"
    }
})
function voltar(){

    window.location="index.html";

  }

     function inicio(){

      window.location="Tela-inicio.html";

     }

 

  function cadastro(){

    window.location="TeladeCadastro.html";

  }

 
  function main() {
        var email= document.getElementById('Email').value;
        var senha= document.getElementById('Senha').value;
 
        if (email == "gustavo@paciente.com" && senha == "1234"){
          alert('Sucesso');
          window.location="consulta.html"
         
         else if (email == "cleber.machado@medico.com" && senha == "12345"){
            alert('Sucesso');
            window.location="consulta.html"
          }
 
            else if (email == "josue@admin.com" && senha == "123456"){
              alert('Sucesso');
              window.location="consulta.html"
            }  
       
              else{
        alert("Usuário ou senha incorretos");
       }
  }
 
 

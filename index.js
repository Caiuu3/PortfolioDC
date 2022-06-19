function Validar() {

    let nome = document.getElementById('nome');
    let sobrenome = document.getElementById('sobrenome');
    let email = document.getElementById('email');
    let token = document.getElementById('token');
    let cpf = document.getElementById('cpf');
    let nomedoevento = document.getElementById('evento');
    let data = document.getElementById('data');
    let hora = document.getElementById('hora');
    let descricao = document.getElementById ('descricao');


    if(nome.value.length == "" || nome.value.length <=10){
        alert('Digite um nome válido.');
    } else {
        if(sobrenome.value.length == "" || sobrenome.value.length <=15){
        alert('Digite seu sobrenome completo.');
        } else {
    if(email.value.length == "" || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
        alert('Digite um email válido.');
            } else {
    if(token.value.length == "" || token.value.length <=10){
        alert('Digite um token de até 9 caracteres.');
    }else{
        if(cpf.value.length == "" || cpf.value.length >=11 || cpf.value.length < 10){
        alert('Digite um cpf ou cnpj válido.');
                }else{
                    if(nomedoevento.value.length == "" || nomedoevento.value.length >=20){
                    alert('Digite o nome do evento.');
                    }else{
                        if(data.value.length == ""){
                            alert('Digite a data do seu evento.');
                        } else{
                            if(hora.value.length == ""){
                                alert('Digite o horário do seu evento.');
                            } else {
                                if(descricao.value.length == ""){
                                    alert('Digite a descrição do seu evento.');
                                }
                            }
                        }
                    }
    }
            }
        }
    }
}
}
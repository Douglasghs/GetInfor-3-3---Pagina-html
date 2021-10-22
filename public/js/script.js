function Pesquisar(IPV4, IPV6){

    if((IPV4 == "") && (IPV6 == "")){
        alert("Preencha um dos campos disponíveis para digitação (IPV4 ou IPV6)");
    }
    else if((IPV4 != "") || (IPV6 != "")){

    }

    var url = "https://dicasdejavascript.com.br/exemplo.txt";//Sua URL

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    
    console.log(xhttp.responseText);
}
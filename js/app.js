function comprar(){
    let tipo = document.getElementById('tipo-ingresso'); 
    let qtd = parseInt(document.getElementById('qtd').value); 
    //aqui estamos pegando  o tipo do ingresso e a sua quantidade que esão descritos no html

    // usando o parseint estamos convertendo o texto para inteiro 
   
    if (tipo.value == 'pista'){
        comprarPista(qtd);

    } else if (tipo.value == 'superior'){
        comprarSuperior(qtd);


    }else { 
        comprarinferior(qtd); 

    }


}

function comprarPista(qtd){
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        //aqui é usando textcontent pois esta pegando um texto diferente do código acima que esta pegando um campo de um formulário 

        if(qtd > qtdPista){
            alert('quantidade indisponivel da pista');


        }else{

            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            //forma para pegar o elemento o  da pagina novamente

            alert('compra realizada com sucesso!!');
        } 

}


function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    //aqui é usando textcontent pois esta pegando um texto diferente do código acima que esta pegando um campo de um formulário 

    if(qtd > qtdSuperior){
        alert('quantidade indisponivel da cadeira superior !! ');


    }else{

        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        //forma para pegar o elemento o  da pagina novamente

        alert('compra realizada com sucesso!!');
    } 

}


function comprarinferior(qtd){
    
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    
    if(qtd > qtdInferior){
        alert('Quantidade indisponivel na Cadeira inferior !!')

    }else{

        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;

        alert('Compra realizada com sucesso');

    }

}
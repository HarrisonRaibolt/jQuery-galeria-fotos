$(document).ready(function(){

    //metodo java
    //document.querySelector('header button').addEventListener('click',function(e){
//})

    // metodo jQuery evento de click botao do cabeçalho
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    //Evento de subimit formulario jQuery:
    $('form').on('submit', function(e){
        e.preventDefault();

        // toda vez que for clicado em enviar sera criada uma nova linha no HTML
        // 1- criar uma constante que recebe o valor que sera inserido pelo usuário usa-se .val e nao .value.
        // 2- criar uma constante em forma de HTML (<li></li>), nesse caso vai ser criada uma <li> 
        // 3- escrever o código HTML que vai dentro dessa <li>; obs para HTML/Java usa-se ${} e não $().
        // 4-  por fim a constante criada com o codigo HTML será inserida com appendTo na (Ul) que é o Elemento pai do (li)
        const endNovaImagem = $('#endereco-imagem-nova').val();


        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endNovaImagem}" />`).appendTo(novoItem);

        $(`
        <div class="overlay-imagem-link">
            <a href="${endNovaImagem}" target = "_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);

        //limpar formulario:
        $('#endereco-imagem-nova').val(" ");
    })
})
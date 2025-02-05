<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>


$(function(){
    $('#salvar').on('click', function(){
        nome = $("#nome").val();
        localStorage['nome'] = nome;
        localStorage['sobrenome'] = $("#sobrenome").val();
        localStorage['email'] = $("#email").val();
    });

    $('#carregar').on('click', function(){
        nome = localStorage.getItem('nome');
        $("#nome").val(nome);

        $("#sobrenome").val(localStorage.getItem('sobrenome'));
        $("#email").val(localStorage.getItem('email'));

    });

    $('#cancelar').on('click', function(){
        localStorage.removeItem('nome');
        localStorage.removeItem('sobrenome');
        localStorage.removeItem('email');
    });

    $('#salvarString').on('click', function(){
        nome = $("#nome").val();
        sobrenome = $("#sobrenome").val();
        email = $("#email").val();

        objeto = {"nome": nome, "sobrenome": sobrenome, "email": email};
        localStorage.setItem('stringJson', JSON.stringify(objeto))
    });

    $('#carregarString').on('click', function(){
        stringJson = localStorage.getItem('stringJSON');
        objeto = JSON.parse(stringJson);
        $("#nome").val(objeto.nome);
        $("#sobrenome").val(objeto.sobrenome);
        $("#email").val(objeto.email);
    });

    $('#cancelarString').on('click', function(){
        localStorage.removeItem('stringJSON ')
    })

    $('#cancelarTudo').on('click', function(){
        localStorage.clear();
    })

    $('#limpar').on('click', function(){
        $('input').val('');
    });
});
var cartaRafa = {
    nome: "Rafaella Ballerini",
    imagem: "https://yt3.ggpht.com/84ALFuw4UCyfL1TyoMU77D-I6xngPjn2X0kbx2bMAyoFzWwR-utcrbDn_MuNJcroPcmU9NdGGQ=s88-c-k-c0x00ffffff-no-rj",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaPaulo = {
    nome: "Paulo Silveira",
    imagem: "https://media-exp1.licdn.com/dms/image/C4D03AQHNUGchMAa-Yw/profile-displayphoto-shrink_200_200/0/1556583729599?e=1652918400&v=beta&t=wzyKPuXvmMrR5nHGU6PpmGsvCslHh4W4qv3jaasyZI8",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaDevsoutinho = {
    nome: "Mario Souto",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLS-CKuhUh_SbSYPf5TCugjWE-6ok7chbNm-daC4=s88-c-k-c0x00ffffff-no-rj",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaAtila = {
    nome: "Atila Iamarino",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLS_h0p3VcxsxIIyCMP7XEL8ImQ3GauYC3KaDBXQ3A=s88-c-k-c0x00ffffff-no-rj",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaJovemnerd = {
    nome: "Jovem Nerd",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLSQN3SUsEVV7XrEnTJxkRPLVY4hajsObHpczJXu=s88-c-k-c0x00ffffff-no-rj",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaCodigofonte = {
    nome: "Código Fonte TV",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLTxp_yA1EqeS8rPJDe4m5qExsd3-OKqmlB3M6Oq5A=s88-c-k-c0x00ffffff-no-rj",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaMarcobruno = {
    nome: "Marco Bruno",
    imagem: "https://www.alura.com.br/assets/img/aluraverso/MarcoBruno.jpg",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartas = [cartaRafa, cartaPaulo, cartaDevsoutinho, cartaAtila, cartaJovemnerd, cartaCodigofonte, cartaMarcobruno];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 7);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 7);
    while(numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 7);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    console.log(cartaMaquina);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
        if(radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Derrotado</p>"
    }else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar".disabled = true);
    document.getElementById("btnSortear".disabled = false);
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.display = "block";

    var imagemJogador = "<img class='carta-jogador' src='" + cartaJogador.imagem + "'>";

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' checked='true' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = nome + imagemJogador + tagHTML + opcoesTexto + "</div>";
}


function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.display = "block";

    var imagemMaquina = "<img class='carta-maquina' src='" + cartaMaquina.imagem + "'>";

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +="<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = nome + imagemMaquina + tagHTML + opcoesTexto + "</div>";
}

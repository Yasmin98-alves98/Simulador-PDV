/*---------- Modo claro/escuro ------------*/
function alterarModo() {
    const icone = document.getElementById('icone-modo');

    if (icone.classList.contains('fa-moon'))
        icone.classList.replace('fa-moon','fa-sun');
    else
        icone.classList.replace('fa-sun','fa-moon')

    document.body.classList.toggle('dark-mode'); //toggle fica trocando
}


/*---------- Recolher/Ampliar menu lateral------------*/
function processarSideBar() {
    //ocultar os nomes (textos) do menu
    const textos = document.getElementsByClassName('texto-menu');
    for (let i=0; i < textos.length; i++)
    textos[i].classList.toggle('texto-collapse');

//Centralizar os ícones que sobraram na barra

    const menu = document.querySelectorAll('.sidebar nav');
    for (let i=0; i < menu.length; i++)
    menu[i].classList.toggle('icone-centralizado');

//Reduzir o comprimento da barra lateral do menu
    const barra = document.getElementById('sidebar');
    barra.classList.toggle('collapsed');
}
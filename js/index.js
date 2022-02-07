function ativa_menu(){
    const obj = document.querySelector('#lista_menu');
    const classes = obj.classList;

    //Adiciona a classe que faz aparecer a ul 
    classes.toggle('menu_lista-ativa');
    //Armazena o número de links filhos
    const filhos = obj.children.length;

    //Percorre os links e adiciona a classe com a animação
    for(i=1; i <= filhos; i++){

        let id_nome = 'menu_link' + i;
        const obj_link = document.querySelector('#' + id_nome);
        const classes_link = obj_link.classList;
        classes_link.toggle('anima_link');

    }

   

//    alert(filhos);
    
   

}

//menu_lista_link4
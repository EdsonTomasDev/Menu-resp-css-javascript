function ativa_menu(){
    const obj = document.querySelector('#lista_menu');
    const classes = obj.classList;

    //Adiciona a classe que faz aparecer a ul 
    classes.toggle('menu_lista-ativa');
    //Armazena o número de links filhos
    const filhos = obj.children.length;

    //Percorre os links e adiciona a classe com a animação
    for(i=1; i <= filhos; i++){

        //Variável que armazena o nome do id, ex. menu_link1, menu_link2 etc...
        let id_nome = 'menu_link' + i;
        const obj_link = document.querySelector('#' + id_nome);
        const classes_link = obj_link.classList;
        classes_link.toggle('anima_link');
        
        if (classes_link.contains('anima_link')){
            
            // alert('contém');
            obj_link.style.animation  = "item_lista 4.5s ease-in-out";

        }else{
            // alert('não contém');
            obj_link.style.animation  = "unset";
        }

       

    }
    //executar();
//    alert(filhos);

   
    
    

}


//Seleciona o atributo da div que contém as barras
const botao = document.querySelector('[ativar-menu]');
//Adiciona o evento click para chamar a função ativa_menu
botao.addEventListener('click', ativa_menu);

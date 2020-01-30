window.addEventListener('load', function(){
    const cajatexto = document.querySelector(".cajatexto");
    var lista = document.querySelector(".lista");
    var num = document.querySelector(".numeroTotal");
    var btnTodos = document.querySelector(".todos");
    var btnActivos = document.querySelector(".activos");
    var btnCompletos = document.querySelector(".completos");
    var btnEliminar = document.querySelector(".eliminar");

    //AddeventListener
            // elemento que dispara el evento       INPUT
            // tipo de evento                       Keypress
            // accion                               If
    cajatexto.addEventListener('keypress', function AddList(event){
        const value = cajatexto.value;
        //verifica que hay algo en el place
        if(event.keyCode == 13 && value){
           addNewLi(this.value);
            cajatexto.value = '';
            num.innerHTML++;
        }
    });

    function addNewLi (word){
     
    // Crear un elemento de la lista
    const newLi = document.createElement('div');
    //agrega el texto a la memoria
    //Crea un elemento de la lista- Un input que haga el check un p para que sea el texto editable y el boton de eliminar
    newLi.innerHTML = `<li class = "elemento"><input class="elemento__completado" type= "checkbox"><p  class="elemento__contenido" contenteditable> ${word} </p><button class="elemento__eliminar"> X </button></li> `
    newLi.setAttribute( 'class' , 'elemento');
    lista.appendChild(newLi);
    
}
  
});
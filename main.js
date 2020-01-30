window.addEventListener('load', function(){
    const ul = document.querySelector('ul');
    const input = document.querySelector('input');
    
    const list =[
        'uno',
        'dos',
        'tres',
    ];

    list.forEach((elem)=>{
        addNewLi(elem);
    });

    //AddeventListener
            // elemento que dispara el evento       INPUT
            // tipo de evento                       Keypress
            // accion                               If
    input.addEventListener('keypress', function(event){
        const value = input.value;
        //verifica que hay algo en el place
        if(event.keyCode === 13 && value){
           addNewLi(value);
            input.value = '';
        }
    });
function addNewLi (word){
    const newLi = document.createElement('li');
    //agrega el texto a la memoria
    newLi.innerText = word;
    // Lo agrega a la lista de manera visual
    ul.appendChild(newLi);
    
    newLi.addEventListener('click', () =>{
        if(newLi.style.textDecoration){
            newLi.style.textDecoration='';
            newLi.contentEditable="true";
        }else{
        newLi.style.textDecoration ='line-through';
        }
    });
}
  
});
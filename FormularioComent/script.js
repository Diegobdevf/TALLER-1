// Esta funcion agrega nuevo comentario a la lista comentario
let add = () => {
  // Get the input elements for the name and comment
  let name = document.querySelector('.container #name'); 
  let comment = document.querySelector('.container #comment'); 

  // Obtener los elementos de entrada para el nombre y el comentario.
  if (name.value !== "" && comment.value != "") { 
    // Get the comment list element
    let list = document.querySelector('.list'); 

    // Obtener hora y formatear
    let time = new Date();
    let h = time.getHours(); 
    let m = time.getMinutes(); 
    let s = time.getSeconds(); 
    let now = h + " : " + m + " : " + s;

    // Crear nuevo elemento de lista y ajustar html
    let list_item = document.createElement ("li"); 
    list_item.innerHTML = `
      <span>
        <p>${name.value} ${now}</p> 
      </span>
      <p>${comment.value}</p>
    `;
    // Agregar el nuevo elemento de la lista a la lista de comentarios
    list.append(list_item); 
  }
  
  // Si el campo de nombre o comentario esta vacio
  if (name.value == "" || comment.value == "") {
    // Obtener el elemento de la lista de comentarios
    let list = document.querySelector('.list'); 

    // Crear nuevo elemento de lista y alerta
    let list_item = document.createElement ("li"); 
    var warn = 'Por Favor Ingrese Un Comentario!';  
    list_item.innerHTML = `
      <span>
        <p>${warn}</p> 
      </span>
    `;
    // Agregar el nuevo elemento de la lista de comentarios
    list.append(list_item); 
  }

  // Limpiar datos
  name.value = comment.value = "";
  
}
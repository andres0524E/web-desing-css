document.addEventListener('DOMContentLoaded', function() {
  
  // la lógica del menú de compartir se eliminó de aquí porque ahora funciona 100% con css (:hover)

  // lógica de la barra de navegación (con mouseenter)
  const list = document.querySelectorAll('.list');

  function activelink(evento) {
    evento.preventDefault(); 
    
    list.forEach(function(item) {
      item.classList.remove('active');
    });
    
    this.classList.add('active');
  }

  if (list.length > 0) {
    list.forEach(function(item) {
      // cambiamos 'click' por 'mouseenter' para que se active al pasar el cursor
      item.addEventListener('mouseenter', activelink);
    });
  }

});

 
 
  

  function setFechaHoraActual() {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const año = hoy.getFullYear();
    const horas = String(hoy.getHours()).padStart(2, '0');
    const minutos = String(hoy.getMinutes()).padStart(2, '0');
    const segundos = String(hoy.getSeconds()).padStart(2, '0');
  
    const fechaHoraActual = `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
    document.getElementById('fecha').value = fechaHoraActual;
  }
  
  // Actualizar la fecha y hora cada segundo
  function iniciarReloj() {
    setInterval(setFechaHoraActual, 1000); // Llama a la función cada 1000 ms (1 segundo)
  }
  
  // Establecer la fecha y hora actual al cargar la página
  window.onload = function () {
    setFechaHoraActual(); // Establece la fecha y hora inmediatamente
    iniciarReloj(); // Comienza el reloj en tiempo real
  };








     




 
 



document.getElementById('BTN').addEventListener('click', function(e) {
    e.preventDefault();
    var formData = new FormData(document.getElementById('form'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycby_SrYIDf8lLuKAQYhGACVcgzJ5hAJrZW-k-f8SaX8gBLbM1Or0WPC-zsw_r-q9w2B5iA/exec');
    xhr.reload = function() {
      document.getElementById('form').reload(); 
     
    };
    xhr.send(formData);
    alert('¡Registro exitoso!');
     form.reset();
  });



  function verificarClave() {
    var password = document.getElementById("password").value;
    if (password === "Minsal") {
        document.getElementById("form").style.display = "block";
        document.getElementById("acceso").style.display = "none";
    } else {
        alert("Contraseña incorrecta");
    }
}






//cambiar el formato de fecha a dd//mm/aaa//

const inputFechaIc = document.getElementById('fechaIc');

inputFechaIc.addEventListener('input', (e) => {
  const inputValue = inputFechaIc.value; // Ejemplo: "2025-07-01"
  const [año, mes, dia] = inputValue.split('-'); // Extrae año, mes, día

  // Eliminar input oculto previo para evitar duplicados
  const existingHiddenInputIc = document.querySelector('input[name="fechaIcFormatted"]');
  if (existingHiddenInputIc) {
    existingHiddenInputIc.remove();
  }

  const inputFechaOculta = document.createElement('input');
  inputFechaOculta.type = 'text'; // Cambia el tipo a text
  inputFechaOculta.name = 'fechaIcFormatted';
  inputFechaOculta.value = `${dia}/${mes}/${año}`; // Formato dd/mm/yyyy
  inputFechaOculta.classList.add('oculto'); // Agrega la clase oculto
  inputFechaIc.parentNode.appendChild(inputFechaOculta);
});

const inputFechaAgenda = document.getElementById('fechaAgenda');

inputFechaAgenda.addEventListener('input', (e) => {
  const inputValue = inputFechaAgenda.value; // Ejemplo: "2025-07-01"
  const [año, mes, dia] = inputValue.split('-'); // Extrae año, mes, día

  // Eliminar input oculto previo para evitar duplicados
  const existingHiddenInputAgenda = document.querySelector('input[name="fechaAgendaFormatted"]');
  if (existingHiddenInputAgenda) {
    existingHiddenInputAgenda.remove();
  }

  const inputFechaOculta = document.createElement('input');
  inputFechaOculta.type = 'text'; // Cambia el tipo a text
  inputFechaOculta.name = 'fechaAgendaFormatted';
  inputFechaOculta.value = `${dia}/${mes}/${año}`; // Formato dd/mm/yyyy
  inputFechaOculta.classList.add('oculto'); // Agrega la clase oculto
  inputFechaAgenda.parentNode.appendChild(inputFechaOculta);
});

const wsp = 'https://wa.me/54'

const gererarChat = () => {
  const numero = document.getElementById('numero').value;
  const mensaje = document.querySelector('.mensaje');

   if (numero.length == 10) {
    window.open(wsp+numero,'_blank')
  } else {
    mensaje.innerHTML = `
   <p class="alert alert-danger m-0" role="alert">
      El numero ingresado debe tener 10 digitos y no debe tener guiones.
    </p> `
  }
}

const gererarLink = () => {
  const numero = document.getElementById('numero').value;
  const mensaje = document.querySelector('.mensaje');
  
  if (numero.length == 10) {
    mensaje.innerHTML = `
    <p class="alert alert-success m-0" role="alert">
      El link es <b>${wsp}${numero}</b>
    </p> 
    `
  } else {
    mensaje.innerHTML = `
    <p class="alert alert-danger m-0" role="alert">
      El numero ingresado debe tener 10 digitos y no debe tener guiones.
    </p> `
  }     
}

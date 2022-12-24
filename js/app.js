const wsp = 'https://wa.me/54'

const gererarChat = () => {
  // console.log('funca chat')
  const numero = document.getElementById('numero').value;
  const mensaje = document.querySelector('.mensaje');

   if (numero.length == 10) {
    window.open(wsp+numero,'_blank')
  } else {
    mensaje.innerHTML = `
    <div class="alert alert-danger" role="alert">
      El numero debe tener 10 digitos
    </div> `
  }
}

const gererarLink = () => {
  // console.log('funca link')
  const numero = document.getElementById('numero').value;
  const mensaje = document.querySelector('.mensaje');
  
  if (numero.length == 10) {
    mensaje.innerHTML = `
    <div class="alert alert-success" role="alert">
      El link es <b>${wsp}${numero}</b>
    </div> `
  } else {
    mensaje.innerHTML = `
    <div class="alert alert-danger" role="alert">
      El numero debe tener 10 digitos
    </div> `
  }     
}


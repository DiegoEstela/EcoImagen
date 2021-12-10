function isMobile() {
  if (sessionStorage.desktop) return false;
  else if (localStorage.mobile) return true;
  var mobile = [
    "iphone",
    "ipad",
    "android",
    "blackberry",
    "nokia",
    "opera mini",
    "windows mobile",
    "windows phone",
    "iemobile",
  ];
  for (var i in mobile)
    if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
      return true;
  return false;
}

const formulario = document.querySelector(".Formulario");
const buttonSubmit = document.querySelector("#botonEnviar");
const urlDesktop = "https://web.whatsapp.com/";
const urlMobile = "whatsapp://";
const telefono = "54946296162";

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  buttonSubmit.innerHTML =
    '<p>Redirigiendo...</p><i class="fas fa-circle-notch fa-spin"></i>';
  buttonSubmit.disabled = true;
  setTimeout(() => {
    let nombre = document.querySelector("#name1").value;
    let email = document.querySelector("#mail1").value;
    let interesadoEn = document.querySelector("#interesadoEn").value;
    let msje = document.querySelector("#txt1").value;
    let mensaje =
      "send?phone=" +
      telefono +
      "&text=*GRAFICA GUERRA*%0A Hola! Mi nombre es " +
      nombre +
      "." +
      "%0A Me interesa el servicio de: %0A" +
      interesadoEn +
      "." +
      "%0A Mi consulta es la siguiente: %0A" +
      msje +
      "%0A Mi email es: " +
      email +
      "";
    if (isMobile()) {
      window.open(urlMobile + mensaje, "_blank");
    } else {
      window.open(urlDesktop + mensaje, "_blank");
    }
    buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp';
    buttonSubmit.disabled = false;
  }, 3000);
});

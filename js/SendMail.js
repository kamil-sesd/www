

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
    
  };
/* alert("CO DO LICHA") */
  const serviceID = "service_ysj1dnn";
  const templateID = "template_xscftrq";



  if (
    document.getElementById("name").value === "" |
    document.getElementById("email").value === "" |
    document.getElementById("message").value=== ""

  ) {

    

    document.getElementById('MODAL_NO_SEND').style.display='block'
    
    /* Shiny.onInputChange('S_NAME', "aaaaaaaaaaaaaaaaa"); */
    /* document.getElementById("name").value="nowy"
    alert(document.getElementById("name").value)
    document.getElementById("name").dispatchEvent(new Event('change')); */
    



  } else {
    
    document.getElementById('MODAL_YES_SEND').style.display='block'

    emailjs.send(serviceID, templateID, params)

    document.getElementById("name").value = "" ;
    document.getElementById("email").value = "" ;
    document.getElementById("message").value="";
    

  }



}
alert ("Welcome to Aryan's Website")

//   ----------------------------about me---------------


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}





// ---------------------------------menu--------------------------------


var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}


// -------------------------contact form-----------------------------------



  const scriptURL = 'https://script.google.com/macros/s/AKfycbx3kNgoxqs_muwTYaM4NAPIh48DPithtOabvNtntS-JGBCi9GrFR7obODXpIvCedjveQg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        alert ("Message Sent Successfully")
        msg.innerHTML = "Message sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

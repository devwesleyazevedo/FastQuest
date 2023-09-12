
// MENU DE PROGRESSO
var current_fs, next_fs, previous_fs; // fieldsets
var animating; // flag to prevent quick multi-click glitches

$(".next").click(function(){
    if (animating) return false;
    animating = true;
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    // activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    // hide the current fieldset with fade
    current_fs.fadeOut(400, function(){
        next_fs.fadeIn(400);
        animating = false;
    });
});

$(".previous").click(function(){
    if (animating) return false;
    animating = true;
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    // de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    // hide the current fieldset with fade
    current_fs.fadeOut(400, function(){
        previous_fs.fadeIn(400);
        animating = false;
    });
});

$(".submit").click(function(){
    return false;
});






// RADIO CASO ESCOLHA OUTRO MOSTRA OUTRO CAMPO PARA INSERIR O TEXTO
document.addEventListener("DOMContentLoaded", function () {
   const estadoRadio4 = document.getElementById("estadoRadio4");
   const outrosEspecifique = document.getElementById("outroestado");

   estadoRadio4.addEventListener("change", function () {
     if (estadoRadio4.checked) {
       outrosEspecifique.style.display = "block";
     } else {
       outrosEspecifique.style.display = "none";
     }
   });
 });


// RADIO CASO ESCOLHA OUTRO MOSTRA OUTRO CAMPO PARA INSERIR O TEXTO
 document.addEventListener("DOMContentLoaded", function () {
  const bancoRadio6 = document.getElementById("bancoRadio6");
  const outrosEspecifiqueBanco = document.getElementById("outrosbanco");

  bancoRadio6.addEventListener("change", function () {
    if (bancoRadio6.checked) {
      outrosEspecifiqueBanco.style.display = "block";
    } else {
      outrosEspecifiqueBanco.style.display = "none";
    }
  });
});







// MODAL DO FORM COM IMAGEM
  // Get the modal
  var modal = document.getElementById("modal-myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("modal-myImg");
  var modalImg = document.getElementById("modal-img01");
  var captionText = document.getElementById("modal-caption");
  img.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal-close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Close the modal when the user clicks anywhere outside the modal content
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }










// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
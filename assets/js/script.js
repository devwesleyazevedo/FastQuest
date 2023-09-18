
// MENU DE PROGRESSO
document.addEventListener("DOMContentLoaded", function() {
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
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("modal-myModal");
  var img = document.getElementById("modal-myImg");
  var modalImg = document.getElementById("modal-img01");
  var captionText = document.getElementById("modal-caption");
  img.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("modal-close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});










// CHECKBOX RANKING
document.addEventListener("DOMContentLoaded", function() {
const checkboxes = document.querySelectorAll('.cervejaCheckbox');
const ordemEscolhaDiv = document.getElementById('ordemEscolha');
let ordemEscolha = [];

checkboxes.forEach(function (checkbox, index) {
    const ordemSpan = checkbox.parentElement.querySelector('.ordem');
    ordemSpan.style.display = 'none'; // Defina inicialmente como "display: none".

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            ordemEscolha.push(checkbox.value);
            ordemSpan.textContent = ordemEscolha.length; // Define o número de ordem no <span>.
            ordemSpan.style.display = 'flex'; // Altera o estilo para "display: flex" quando marcado.
            atualizarOrdemEscolha();
        } else {
            const index = ordemEscolha.indexOf(checkbox.value);
            if (index !== -1) {
                ordemEscolha.splice(index, 1);
                atualizarOrdemEscolha();
            }
            ordemSpan.style.display = 'none'; // Volta ao estilo "display: none" quando desmarcado.
        }
        ordenarOpcoes(); // Ordena as opções com base na preferência.
    });
});

function atualizarOrdemEscolha() {
    ordemEscolhaDiv.innerHTML = "Ordem de Escolha: " + ordemEscolha.join(", ");
}

function ordenarOpcoes() {
    checkboxes.forEach(function (checkbox) {
        const ordemSpan = checkbox.parentElement.querySelector('.ordem');
        const checkboxValue = checkbox.value;
        const index = ordemEscolha.indexOf(checkboxValue);
        if (index !== -1) {
            ordemSpan.textContent = index + 1; // Define o número de ordem com base na preferência atual.
        }
    });
}
});
  








// SOMATÓRIA PORCENTAGEM %
function calcularSomaPorcentagem() {
  const padaria = parseFloat(document.getElementById('padariaPorcentagem').value) || 0;
  const mercado = parseFloat(document.getElementById('mercadoPorcentagem').value) || 0;
  const posto = parseFloat(document.getElementById('postoPorcentagem').value) || 0;
  const farmacia = parseFloat(document.getElementById('farmaciaPorcentagem').value) || 0;
  const outros = parseFloat(document.getElementById('outrosPorcentagem').value) || 0;

  const soma = padaria + mercado + posto + farmacia + outros;
  document.getElementById('somaPorcentagem').value = soma + '%';
}

// SOMATÓRIA MOEDA R$
function calcularSomaMoeda() {
  const padaria = parseFloat(document.getElementById('padariaMoeda').value) || 0;
  const mercado = parseFloat(document.getElementById('mercadoMoeda').value) || 0;
  const posto = parseFloat(document.getElementById('postoMoeda').value) || 0;
  const farmacia = parseFloat(document.getElementById('farmaciaMoeda').value) || 0;
  const outros = parseFloat(document.getElementById('outrosMoeda').value) || 0;
  const soma = padaria + mercado + posto + farmacia + outros;
  document.getElementById('somaMoeda').value = 'R$ ' + soma.toFixed(2);
}










// RANGE FUNÇÃO
const slider = new Vue ({
  el: '#mainrange',
  data: () => ({
  val: 70
  }),
  mounted() {
  this.val = Math.floor(Math.random() * 101)
  },
  computed: {
  getPlacement() {
  return ((this.val * 14.5)) + `%`;
  },
  greaterThanFifty() {
  return this.val > 50 ? `var(--roundness)` : `0`;
  },
  getHappinessColor() {
  return `rgba(255, ${106 + (103 / 100 * this.val)}, ${(Math.floor(this.val * -1 / 7.692)) + 13}`;
  },
  getSliderBackground() {
  return `linear-gradient(to right, var(--orange), ${(this.val * -1) + 125}%, var(--yellow))`
  },
  getHappiness() {
  let moods = ["😡","😠","😦","☹️","🙁","😐","🙂","😊","😄","😃","😍"]
  if (this.val === 0) {
  return "🤬";
  } 
  return moods[(Math.floor(this.val / 10))];
  },
  getHappinessDescription() {
  if (this.val <= 20) {
  return "Totalmente Insatisfeito";
  } else if (this.val <= 40) {
  return "Insatisfeito";
  } else if (this.val <= 60) {
  return "Neutro";
  } else if (this.val <= 80) {
  return "Satisfeito";
  } else {
  return "Totalmente Satisfeito";
  }
  }
  }
  });
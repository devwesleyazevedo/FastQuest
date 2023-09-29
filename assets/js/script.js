
// MENU DE PROGRESSO
document.addEventListener("DOMContentLoaded", function() {
  var current_fs, next_fs, previous_fs; // fieldsets
  var animating; // flag to prevent quick multi-click glitches
  var step = 0; // passo atual
  var totalSteps = $("fieldset").length;

  $(".next").click(function() {
      if (animating || step >= totalSteps - 1) return false;
      animating = true;

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      // Atualize a barra de progresso com a porcentagem
      step++;
      var percent = ((step / totalSteps) * 100).toFixed(2); // Limita a 2 casas decimais
      $(".progress-bar").css("width", percent + "%");
      $(".progress-text").text(percent + "%");

      current_fs.fadeOut(400, function() {
          next_fs.fadeIn(400);
          animating = false;
      });
  });

  $(".previous").click(function() {
      if (animating || step <= 0) return false;
      animating = true;

      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      // Atualize a barra de progresso com a porcentagem
      step--;
      var percent = ((step / totalSteps) * 100).toFixed(2); // Limita a 2 casas decimais
      $(".progress-bar").css("width", percent + "%");
      $(".progress-text").text(percent + "%");

      current_fs.fadeOut(400, function() {
          previous_fs.fadeIn(400);
          animating = false;
      });
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




// Script das estrelas
const stars = document.querySelectorAll('.rating label');
         
         stars.forEach((star, index) => {
           star.addEventListener('click', () => {
             // Adiciona a classe 'selected' para a estrela clicada
             stars[index].classList.add('selected');
         
             // Adiciona a classe 'selected' para todas as estrelas à esquerda da estrela clicada
             for (let i = 0; i < index; i++) {
               stars[i].classList.add('selected');
             }
           });
         });




// RANGE FUNÇÃO
const slider = new Vue({
  el: '#mainrange',
  data: () => ({
    val: 70,
    isMobile: false // Adicione esta variável para verificar se o dispositivo é móvel
  }),
  mounted() {
    this.val = Math.floor(Math.random() * 101);
    // Verifique a largura da janela ao carregar a página
    this.checkIfMobile();

    // Adicione um ouvinte de redimensionamento para verificar se a largura da janela muda
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeDestroy() {
    // Remova o ouvinte de redimensionamento ao destruir o componente
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    checkIfMobile() {
      // Verifique se a largura da janela é menor ou igual a 700px
      this.isMobile = window.innerWidth <= 700;
    }
  },
  computed: {
    getPlacement() {
      // Use a lógica para definir o valor com base no dispositivo móvel ou não
      return this.isMobile ? ((this.val * 7)) + `%` : ((this.val * 14.5)) + `%`;
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








// VIDEO JS
document.addEventListener("DOMContentLoaded", function() {
  var player = videojs('videoskinjs');
});








// Script do select form
(function()
{
   var _class = "FormSelect"; 
   
   // check env 
   if( !window || window[ _class ] ) return; 

   // class 
   window[ _class ] = function( parent, options ) 
   {
      this._parent    = parent; 
      this._options   = options; 
      this._list      = document.createElement( "ul" );
      this._input     = null; 
      this._select    = null; 
      this._index     = 0; 
      this._onClick   = this._onClick.bind( this ); 
      this._onDone    = this._onDone.bind( this ); 
      this._setActive = this._setActive.bind( this ); 
      this._init(); 
   }; 
   
   // prototype
   window[ _class ].prototype = {
      constructor: window[ _class ],
       
      // init class on a container 
      _init: function()
      {
         if( typeof this._parent === "object" )
         {
            this._input  = this._parent.querySelector( "input" );
            this._select = this._parent.querySelector( "select" );
            this._index  = this._select.selectedIndex || 0;

            if( this._input && this._select )
            {
               for( var i=0; i < this._select.options.length; ++i )
               {
                  var li = document.createElement( "li" );
                  li.setAttribute( "data-index", i );
                  li.addEventListener( "click", this._onClick );
                  li.innerHTML = this._select.options[ i ].innerHTML || "...";
                  li.className = ( this._index === i ) ? "active" : "";
                  this._list.appendChild( li );
               }
               this._parent.appendChild( this._list );
               this._setActive(); 
            }
         }
      }, 
      
      // on list item click 
      _onClick: function( e )
      {
         this._index = e.target.getAttribute( "data-index" ) || 0;
         this._setActive( this._index );
         setTimeout( this._onDone, 60 ); 
      }, 
      
      // close select menu 
      _onDone: function()
      {
         this._parent.blur(); 
         this._input.blur(); 
      }, 
      
      // set new active menu item by index
      _setActive: function( index )
      {
         index = ( index || index === 0 ) ? index : this._select.selectedIndex;

         var active = this._list.querySelector( ".active" );
         if( active ) active.className = "";

         this._select.selectedIndex = index;
         this._input.value = this._select.options[ index ].innerHTML || "";
         this._list.children[ index ].className = "active";
      },
   }; 
   
})();

/**
 * Usage 
 */
var items = document.querySelectorAll( "form .select" ); 

for( var i = 0; i < items.length; i++ ) 
{
   new FormSelect( items[ i ] ); 
}

// $(function(){ ... }) espera a página carregar
$(function() {

  // Etapa 3: altera o texto do parágrafo
  $("#botao-alterar").click(function() {
    $("#mensagem").text("O texto foi alterado com jQuery!");
  });

  // Etapa 4: mostra o texto secreto
  $("#mostrar").click(function() {
    $("#mensagem-secreta").show();
  });

  // Etapa 4: esconde o texto secreto
  $("#esconder").click(function() {
    $("#mensagem-secreta").hide();
  });

});

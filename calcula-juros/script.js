function calcularJuros() {
    var nome = document.getElementById('nome').value;
    var capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
    var valorAcrescimo = parseFloat(document.getElementById('acrescimo').value);
    var res = document.getElementById('res');

    if (!nome || isNaN(capitalInicial) || isNaN(valorAcrescimo)) { alert('Por favor, preencha todos os campos corretamente.'); return;
    }

    var juros = (valorAcrescimo / capitalInicial) * 100; res.innerHTML = `Cliente: ${nome} <br> Taxa de Juros: ${juros.toFixed(2)}%`;
}
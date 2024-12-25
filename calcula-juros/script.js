function calcularJuros() {
    var nome = document.getElementById('nome').value;
    var capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
    var capitalDevolvido = parseFloat(document.getElementById('capitalDevolvido').value);
    var res = document.getElementById('res');

    if (!nome || isNaN(capitalInicial) || isNaN(capitalDevolvido)) { alert('Por favor, preencha todos os campos corretamente.'); return;
    }

    var juros = ((capitalDevolvido - capitalInicial) / capitalInicial) * 100; res.innerHTML = `Cliente: ${nome} <br> Taxa de Juros: ${juros.toFixed(2)}%`;
}
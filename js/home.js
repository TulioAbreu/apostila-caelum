var maisVendidosMostrar = false;
var novidadesMostrar = false;

$('.painel button').click(function() {
    $(this).parent().toggleClass('painel-aberto');
    if ($(this).parent().attr('class').includes("mais-vendidos")) {
        maisVendidosMostrar = !maisVendidosMostrar;
        if (maisVendidosMostrar) {
            document.getElementById("mais-vendidos-btn").textContent = "Mostrar menos";
        }
        else {
            document.getElementById("mais-vendidos-btn").textContent = "Mostrar mais";
        }
    }
    else if ($(this).parent().attr('class').includes("novidades")) {
        novidadesMostrar = !novidadesMostrar;
        if (novidadesMostrar) {
            document.getElementById("novidades-btn").textContent = "Mostrar menos";
        }
        else {
            document.getElementById("novidades-btn").textContent = "Mostrar mais";
        }
    }
});

$(function () {

    $("button").click(function () {
        alert("mensaje enviado, nos pondremos en contacto lo antes posible");
        $("contacto").style.display = "none";
    });

    //    Al hacer clic en una imagen, invitar a que nos contacte...
    $("img").click(function () {
        alert("Le gustaria viajar? llene el formulario de contacto");
    })

});
function validaForm(){
    if($("#nombre").val() == ""){
        alert("El campo Nombre no puede estar vacío.");
        $("#nombre").focus();       
        return false;
    }
    if($("#apellidos").val() == ""){
        alert("El campo Apellidos no puede estar vacío.");
        $("#apellidos").focus();
        return false;
    }
    if($("#direccion").val() == ""){
        alert("El campo Dirección no puede estar vacío.");
        $("#direccion").focus();
        return false;
    }

    if(!$("#mayor").is(":checked")){
        alert("Debe confirmar que es mayor de 18 años.");
        return false;
    }

    return true; 
}

$(document).ready( function() {   
    $("#botonenviar").click( function() {     
        if(validaForm()){
            e.preventDefault();
            var nombre = $("#nombre").val(); 
            var apellidos = $("#apellidos").val();
            var direccion = $("#direccion").val();
            var genero = $("#genero").val();
            var dataString = 'nombre='+nombre+'apellidos='+apellidos+'direccion='+direccion+'genero='+genero;                              
            $.ajax({
                type:'POST',
                data:dataString,
                url: "http://127.0.0.1:5501/",
                success: function( data ) {
                    alert(data);
                    JSON.parse(data).list.forEach(element => {
                        $("body").append('<h1>' + element.name + '</h1>');
                    });
                }
            });
            $.post("http://127.0.0.1:5501/",$("#formdata").serialize(),function(res){
                $("#formulario").fadeOut("slow");   
                if(res == 1){
                    $("#exito").delay(500).fadeIn("slow");      
                } else {
                    $("#fracaso").delay(500).fadeIn("slow");    
                }
            });
        }
      
    });    
});


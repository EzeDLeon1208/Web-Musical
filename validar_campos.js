'use strict'

window.addEventListener('load', function(){
    console.log("DOM cargado");
    
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");
          
        var nombre = document.querySelector("#nombre").value;
        var email = document.querySelector("#email").value;
        var comentario = document.querySelector("#comentario").value;

            if(nombre.trim() == null || nombre.trim().length == 0){
                document.querySelector("#error_nombre").innerHTML = "El nombre no debe estar vacio";
                }else{
                    document.querySelector("#error_nombre").style.display = "none";
                    box_dashed.style.display = "block";
                }

            if(email.trim() == null || email.trim().length == 0){
                document.querySelector("#error_mail").innerHTML = "la direccion no debe estar vacia";
                }else{
                    document.querySelector("#error_mail").style.display = "none";
                    box_dashed.style.display = "block";
                }
                
        var p_nombre = document.querySelector("#p_nombre span");
        var p_email = document.querySelector("#p_email span");
        var p_comentario = document.querySelector("#p_comentario span");

        p_nombre.innerHTML = nombre;
        p_email.innerHTML = email;
        p_comentario.innerHTML = comentario;

        /*
        var datos_usuario = [nombre, email, comentario];
        var indice 
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
        */
    })
})
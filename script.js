const formulario = document.querySelector("form")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const datos = new FormData(formulario)
    fetch("guardar.php",{
        method: "POST",
        body: datos
    }).then(
        cabecera => {
            console.log("ver que tiene: ", cabecera);
        }
    ).then(
        datos => {
            console.log(datos);
            if (datos.respuesta == "ok") {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                  });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No se guardo nada!"
                  });
            }
        }
    )
})
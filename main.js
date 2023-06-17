const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;//terminando el if para que lo prox no se ejecute
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent.length === "ERROR") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1)//slice corta la últ posición en este caso a partir de 0 y -1
                //(que sería el último núero digitado)

            }
            return;

        }

        if (boton.id === "igual") {
            try {
            pantalla.textContent = eval(pantalla.textContent);//la función eval evalúa las operaciones en pantalla.
            } catch {
                pantalla.textContent = "ERROR";
            }
            return;
        } 


        if (pantalla.textContent === "0" ||  pantalla.textContent.length === "ERROR") {

            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})


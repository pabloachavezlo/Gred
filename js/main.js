function cargar_block() {
    // Crear un componente

    let main = document.querySelector(".main")

    for(let i = 0; i<=14;i++){
        let div = document.createElement("div");
        div.innerHTML = '<div class="bloque"></div>';
        main.appendChild(div)
    }

}

cargar_block();

function agrgar_evento() {
    let all_blocks = document.querySelectorAll(".bloque")

    function saludar() {
        this.classList.add("activo")
        console.log("...");
    }

    all_blocks.forEach(function(elemento){
        elemento.addEventListener("click", saludar)
    })
}


agrgar_evento();

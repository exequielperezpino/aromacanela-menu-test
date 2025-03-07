    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const btnCafe = document.getElementById("btnCafe");
    const btnbeb = document.getElementById("btnbeb");
    const contenedorMain = document.getElementById("contenedorMain");



        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("w-25");
            sidebar.classList.toggle("w-40");
            menuBtn.classList.toggle("rotate-180");


            // Alterna la visibilidad del texto
            const spans = sidebar.querySelectorAll("span");
            spans.forEach(span => {
                span.classList.toggle("hidden");
                span.classList.toggle("opacity-0");
                
            });
        });

        btnCafe.addEventListener("click", async () => {
            try {
                const response = await fetch("cafeteria.html");
                if (!response.ok) {
                    throw new Error("Error al cargar la página");
                }
                const contenido = await response.text();
                contenedorMain.innerHTML = contenido;
            } catch (error) {
                console.error(error);
                contenedorMain.innerHTML = "<p>Error al cargar el contenido.</p>";
            }
        });

        btnbeb.addEventListener("click", async () => {
            try {
                const response = await fetch("bebidas.html");
                if (!response.ok) {
                    throw new Error("Error al cargar la página");
                }
                const contenido = await response.text();
                contenedorMain.innerHTML = contenido;
            } catch (error) {
                console.error(error);
                contenedorMain.innerHTML = "<p>Error al cargar el contenido.</p>";
            }
        });
const refranes = [
            "A buen hambre no hay mal pan.",
            "Camarón que se duerme, se lo lleva la corriente.",
            "El que mucho abarca, poco aprieta.",
            "Más vale tarde que nunca.",
            "No hay mal que por bien no venga."
        ];

        function mostrarRefran() {
            const fecha = new Date();
            const semanaDelAño = Math.floor((fecha.getTime() / 1000 / 60 / 60 / 24 + 4) / 7);
            const refranIndex = semanaDelAño % refranes.length;
            document.getElementById("refran").innerText = refranes[refranIndex];
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí puedes agregar código para procesar el registro, como enviar los datos a un servidor o almacenarlos localmente.

        // Por ahora, simplemente mostraremos un mensaje en la consola.
        console.log(`Usuario: ${username}, Contraseña: ${password}`);

        // Si deseas realizar alguna acción adicional después del registro, puedes hacerlo aquí.
    });
});


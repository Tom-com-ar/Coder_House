// Lista de clientes
let clientes = [];

// Lista de pagos
let pagos = [];

// Función para agregar un cliente
function agregarCliente() {
    let nombre = prompt("Ingresa el nombre del cliente:");
    let ubicacion = prompt("Ingresa la ubicación del cliente:");
    let telefono = prompt("Ingresa el teléfono del cliente:");
    let servicio = prompt("Ingresa el servicio que se realizará (poda, riego, fertilización):");
    let precio = prompt("¿Cuánto se cobrará por el servicio?");
    
    // Asignar un número de cliente único
    let numeroCliente = clientes.length + 1;

    // Agregar el cliente a la lista
    clientes.push({
        numeroCliente: numeroCliente,
        nombre: nombre,
        ubicacion: ubicacion,
        telefono: telefono,
        servicio: servicio,
        precio: Number(precio),
        pagosRealizados: 0 // Inicializar los pagos realizados
    });

    alert(`Cliente agregado: ${nombre} - Número de cliente: ${numeroCliente}`);
}

// Función para asignar un recordatorio a un cliente
function asignarRecordatorio() {
    const numeroCliente = prompt("Ingresa el número de cliente al que deseas asignar el recordatorio:");

    // Buscar el cliente por número usando un ciclo for
    let clienteEncontrado = false;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].numeroCliente == numeroCliente) {
            const tarea = prompt("¿Qué tarea deseas recordar? (poda, riego, fertilización)");
            const fecha = prompt("¿Para qué fecha quieres el recordatorio? (Ejemplo: 25/12/2024)");
            if (tarea && fecha) {
                alert(`Recordatorio asignado a ${clientes[i].nombre}:\nTarea: ${tarea}\nFecha: ${fecha}`);
            } else {
                alert("No se pudo asignar el recordatorio. Verifica los datos ingresados.");
            }
            clienteEncontrado = true;
            break;
        }
    }
    if (!clienteEncontrado) {
        alert("Cliente no encontrado.");
    }
}

// Función para registrar un pago
function registrarPago() {
    const numeroCliente = prompt("Ingresa el número de cliente para registrar el pago:");
    
    // Buscar el cliente por número usando un ciclo for
    let clienteEncontrado = false;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].numeroCliente == numeroCliente) {
            const pago = prompt(`¿Cuánto ha pagado ${clientes[i].nombre}?`);
            if (pago && Number(pago) > 0) {
                // Sumar el pago al total de pagos realizados
                clientes[i].pagosRealizados += Number(pago);

                // Verificar si el cliente ha pagado todo el servicio
                let estado = (clientes[i].pagosRealizados >= clientes[i].precio) ? "Pagado" : "Pendiente";

                // Registrar el pago
                pagos.push({
                    cliente: clientes[i].nombre,
                    monto: Number(pago),
                    estado: estado
                });

                // Mostrar mensaje de estado
                if (estado === "Pagado") {
                    alert(`El cliente ${clientes[i].nombre} ha pagado todo el servicio. Total pagado: $${clientes[i].pagosRealizados}`);
                } else {
                    alert(`${clientes[i].nombre} debe dinero. Pago parcial registrado. Total acumulado: $${clientes[i].pagosRealizados}`);
                }
            } else {
                alert("Monto inválido. Intenta nuevamente.");
            }
            clienteEncontrado = true;
            break;
        }
    }
    if (!clienteEncontrado) {
        alert("Cliente no encontrado.");
    }
}

// Función para listar los pagos
function listarPagos() {
    if (pagos.length === 0) {
        alert("No hay pagos registrados.");
        return;
    }

    let listado = "Pagos registrados:\n";
    for (let i = 0; i < pagos.length; i++) {
        listado += `Cliente: ${pagos[i].cliente}, Monto: $${pagos[i].monto}, Estado: ${pagos[i].estado}\n`;
    }
    alert(listado);
}

// Función para listar todos los clientes con sus datos y pagos asociados
function listarClientes() {
    if (clientes.length === 0) {
        alert("No hay clientes registrados.");
        return;
    }

    let listado = "Clientes registrados:\n";
    for (let i = 0; i < clientes.length; i++) {
        listado += `Número de Cliente: ${clientes[i].numeroCliente}\n`;
        listado += `Nombre: ${clientes[i].nombre}\n`;
        listado += `Ubicación: ${clientes[i].ubicacion}\n`;
        listado += `Teléfono: ${clientes[i].telefono}\n`;
        listado += `Servicio: ${clientes[i].servicio}\n`;
        listado += `Precio: $${clientes[i].precio}\n`;

        // Mostrar pagos asociados a cada cliente
        let pagosCliente = pagos.filter(pago => pago.cliente === clientes[i].nombre);
        if (pagosCliente.length > 0) {
            listado += "Pagos: \n";
            pagosCliente.forEach(pago => {
                listado += `  Monto: $${pago.monto}, Estado: ${pago.estado}\n`;
            });
        } else {
            listado += "No hay pagos registrados.\n";
        }

        listado += "\n-------------------\n";
    }

    alert(listado);
}

// Función principal del simulador
function iniciarSimulador() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt(
            "Selecciona una opción:\n" +
            "1. Agregar cliente\n" +
            "2. Asignar un recordatorio\n" +
            "3. Registrar un pago\n" +
            "4. Listar pagos\n" +
            "5. Listar todos los clientes y sus pagos\n" +
            "6. Salir"
        );

        if (opcion === "1") {
            agregarCliente();
        } else if (opcion === "2") {
            asignarRecordatorio();
        } else if (opcion === "3") {
            registrarPago();
        } else if (opcion === "4") {
            listarPagos();
        } else if (opcion === "5") {
            listarClientes();
        } else if (opcion === "6") {
            alert("Gracias por usar el Simulador de Jardinería. ¡Hasta pronto!");
            continuar = false;
        } else {
            alert("Opción no válida. Intenta nuevamente.");
        }
    }
}

// Llamada a la función principal
iniciarSimulador();

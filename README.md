# Proyecto de Lista de Tareas - To do list


Este proyecto es una aplicación de lista de tareas interactiva que permite a los usuarios agregar, eliminar y reorganizar tareas. 
Además, las tareas se guardan en el navegador utilizando localStorage, lo que asegura que se mantengan incluso si la página se recarga.
También incluye mejoras de accesibilidad para que personas con discapacidades visuales puedan interactuar mejor con la interfaz.

## Características
- Agregar tareas: Los usuarios pueden agregar nuevas tareas tanto al hacer clic en el botón "Agregar" como al presionar la tecla Enter.
- Eliminar tareas: Cada tarea tiene un botón para eliminarla, lo que también elimina la tarea del almacenamiento local.
- Reordenar tareas: Las tareas pueden ser arrastradas y reorganizadas manualmente.
- Almacenamiento persistente: Las tareas se guardan en localStorage, por lo que no se pierden tras actualizar la página.
- Accesibilidad: Se ha implementado el atributo aria-label en los botones de eliminación y se integró una funcionalidad de texto a voz para el encabezado principal (h1), permitiendo a los usuarios con discapacidades visuales escuchar el contenido de la página.
- Tecnologías Utilizadas
**HTML**: Estructura de la página web.
**CSS**: Diseño y estilo, con un fondo personalizado y elementos interactivos.
**JavaScript**: Lógica del proyecto, manejo del DOM y almacenamiento de datos en localStorage.
localStorage: Para persistir las tareas del usuario.



# Página Interactiva con Doom

Este proyecto es una página web interactiva que responde a distintas teclas del teclado para mostrar imágenes, generar tablas y ejecutar scripts.

## Descripción del Proyecto
- **Interacción con Teclas**: La página responde a diferentes teclas del teclado para mostrar imágenes, crear tablas, enviar correos electrónicos, ejecutar scripts, entre otras funciones.
- **Teclas Destacadas**:
  - `→`: Abrir una imagen.
  - `Esc`: Cerrar la imagen.
  - `↑`: Crear una tabla 3x3 con una "X" azul en el centro.
  - `A`: Mostrar el título de la página.
  - `Barra espaciadora`: Enviar un correo electrónico.
  - `Q`: Ejecutar un script.

## Configuración del Entorno
Si deseas ejecutar el script con la tecla Q, necesitarás configurar un servidor. Puedes usar Node.js para este propósito o cualquier servidor web que soporte la ejecución de scripts.

---

### Instalación de Node.js (Opcional)

```markdown
#### Instalación de Node.js (Opcional)

Si no tienes Node.js instalado, sigue estos pasos:

1. **Linux (Debian/Ubuntu)**:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
```

---

### 5. Configuración del Servidor

```markdown
#### Configuración del Servidor

1. Dentro del repositorio, crea un archivo `server.js` con el siguiente contenido:

   ```javascript
   const express = require('express');
   const app = express();

   app.get('/execute-script', (req, res) => {
       res.send('Script ejecutado correctamente');
   });

   app.listen(3000, () => {
       console.log('Servidor corriendo en el puerto 3000');
   });


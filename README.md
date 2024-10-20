# Página Interactiva con Doom

Este proyecto es una página web interactiva que responde a distintas teclas del teclado para mostrar imágenes, generar tablas y ejecutar scripts.

## Descripción del Proyecto
- **Interacción con Teclas**: La página responde a diferentes teclas del teclado para mostrar imágenes, crear tablas, enviar correos electrónicos, ejecutar scripts, entre otras funciones.

## Instalación
### Configuración del entorno
Si deseas ejecutar el script con la tecla Q, necesitarás configurar un servidor. Puedes usar Node.js para este propósito o cualquier servidor web que soporte la ejecución de scripts.

### Instalación de Node.js

Si no tienes Node.js instalado, sigue estos pasos:

1. **Linux (Debian/Ubuntu)**:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
    ```
2. **Windows**:
- Descarga Node.js desde nodejs.org e instala el ejecutable.

###Configuración del Servidor

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
   ```
   
2. Instala las dependencias de Node.js
   ```bash
    npm install express
    ```
3. Ejecutar el servidor:
 ```bash
    node server.js
 ```
4. Cuando se presione la tecla Q, el script responderá al servidor en el puerto 3000

### Uso del Proyecto
## 1. Abrir el archivo HTML

Después de clonar el repositorio, abre el archivo `index.html` o el archivo HTML incluido en tu navegador:

1. Navega al directorio donde clonaste el repositorio.
2. Haz doble clic en el archivo `index.html` para abrirlo en tu navegador.

### 2. Instrucciones de Uso

Una vez que la página esté abierta, puedes interactuar con ella usando las siguientes teclas:

- `→` (Flecha derecha): Abre una imagen.
- `Esc`: Cierra la imagen.
- `↑` (Flecha arriba): Crea una tabla 3x3 con una "X" azul en el centro.
- `A`: Muestra el título de la página web en un cuadro de alerta.
- `Barra espaciadora`: Abre el cliente de correo para enviar un email predefinido.
- `Q`: Ejecuta un script si tienes un servidor configurado.
  
### Repositorio Relacionado

Este proyecto utiliza recursos de un repositorio existente para la ejecución de algunos scripts. Puedes encontrar más información y código adicional en el siguiente repositorio: [nombre_repositorio](URL_REPOSITORIO).

## Ejecución en un Servidor Web (Opcional)

Si deseas alojar la página en un servidor web, puedes seguir los siguientes pasos:

1. Sube los archivos HTML, CSS y JavaScript a tu servidor web.
2. Configura el servidor para que permita la ejecución de scripts si deseas utilizar la tecla `Q`.
3. Accede a la página desde tu navegador.

## Tecnologías Utilizadas

- **HTML**: Estructura de la página.
- **CSS**: Estilos básicos y disposición de la página.
- **JavaScript**: Lógica de interacción con las teclas del teclado.
- **Node.js**: (Opcional) Servidor para la ejecución de scripts.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.


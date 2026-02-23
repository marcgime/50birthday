# Guía de Despliegue: Tu Invitación en GitHub Pages

Esta guía te explicará cómo subir tu página web a GitHub de forma gratuita para que todos tus invitados puedan verla.

## Paso 1: Crear una cuenta en GitHub
Si no tienes una, regístrate en [github.com](https://github.com). Es gratuito.

## Paso 2: Crear un nuevo Repositorio
1. Haz clic en el botón **"+"** en la esquina superior derecha y selecciona **"New repository"**.
2. Ponle un nombre (ejemplo: `invitacion-50`).
3. Asegúrate de que sea **Public**.
4. No hace falta añadir archivos iniciales (README, etc.).
5. Haz clic en **"Create repository"**.

## Paso 3: Subir tus archivos
Hay varias formas, pero la más sencilla desde la web de GitHub es:
1. En la página de tu nuevo repositorio, busca el enlace que dice **"uploading an existing file"**.
2. Arrastra y suelta los archivos que hemos creado:
   - `index.html`
   - `styles.css`
   - `script.js`
   - La carpeta `img` (con tus fotos reales).
3. Haz clic en **"Commit changes"**.

## Paso 4: Activar GitHub Pages
1. Ve a la pestaña **"Settings"** (Ajustes) de tu repositorio.
2. En el menú de la izquierda, busca la sección **"Pages"**.
3. En el apartado "Build and deployment", asegúrate de que esté seleccionado "Deploy from a branch".
4. Bajo "Branch", selecciona **main** (o root) y haz clic en **Save**.
5. ¡Listo! En unos minutos te dará un enlace (ej: `https://tu-usuario.github.io/invitacion-50/`).

## Notas importantes para tu web:
- **Fotos**: He creado una carpeta `img`. Debes guardar ahí las fotos que quieras mostrar en el carrusel con los nombres `photo1.webp`, `photo2.webp`, etc., o cambiar los nombres en el código `index.html`.
- **Encuesta**: En el archivo `index.html`, busca la línea `https://forms.gle/su-link-aqui` y cámbiala por el enlace a tu formulario de Google Forms (es la mejor opción gratuita para gestionar respuestas).
- **Nombre**: Cambia "[Nombre]" en el `index.html` por el nombre de tu pareja.

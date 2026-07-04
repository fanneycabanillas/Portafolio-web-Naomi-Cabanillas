# Portafolio — base de código

Base lista para tu portafolio de diseño gráfico. Minimalista, responsiva y sin dependencias de build (solo HTML, CSS y JS puro), así que puedes editarla con cualquier editor de texto.

## Estructura

```
portafolio/
├── index.html      → contenido y estructura de todas las secciones
├── css/style.css    → todo el diseño visual (colores, tipografía, layout)
├── js/script.js      → menú móvil y año automático del footer
└── assets/            → aquí van tus imágenes reales
```

## Cómo personalizarlo

### 1. Tu nombre y textos
Busca y reemplaza en `index.html`:
- "Ana Ruiz" → tu nombre
- Los textos del hero, "Sobre mí", servicios y contacto
- `hola@anaruiz.design` → tu correo real
- Los links de Instagram / Behance / LinkedIn (actualmente `href="#"`)

### 2. Tus proyectos reales
Cada proyecto en la sección "Galería" (`<article class="project-card">`) tiene un `<svg>` de marcador de posición. Para poner tu imagen real:

1. Guarda tu imagen en `assets/` (ej. `assets/proyecto-01.jpg`)
2. Reemplaza el bloque `<svg class="project-card__art">...</svg>` por:
   ```html
   <img class="project-card__art" src="assets/proyecto-01.jpg" alt="Descripción del proyecto">
   ```
3. Actualiza el título, categoría y número del proyecto en `.project-card__info`

Lo mismo aplica a la foto de "Sobre mí" (`.about__art`).

### 3. Colores
Todos los colores están centralizados como variables al inicio de `css/style.css`:
```css
--color-paper: #F7F6F3;    /* fondo */
--color-ink: #17171B;       /* texto principal */
--color-graphite: #6E6E68;  /* texto secundario */
--color-line: #DEDCD5;      /* líneas divisorias */
--color-cyan / magenta / yellow  /* acentos tipo marca de imprenta */
```
Cambia estos valores y se actualiza todo el sitio.

### 4. Tipografía
Se usan tres fuentes de Google Fonts (ya cargadas en el `<head>` de `index.html`):
- **Space Grotesk** — títulos
- **Inter** — texto de cuerpo
- **IBM Plex Mono** — etiquetas, specs y detalles

Para cambiarlas, actualiza el link de Google Fonts en `index.html` y las variables `--font-display`, `--font-body`, `--font-mono` en `style.css`.

### 5. Agregar o quitar proyectos
Copia un bloque completo `<article class="project-card">...</article>` dentro de `.project-grid` y edita su contenido. El grid se acomoda solo.

## Cómo verlo localmente

Solo abre `index.html` en tu navegador (doble clic funciona), o usa un servidor local simple:
```
python3 -m http.server 8000
```
y visita `http://localhost:8000`.

## Publicarlo gratis

Puedes subir esta carpeta tal cual a:
- **Netlify** (arrastrar y soltar la carpeta)
- **Vercel**
- **GitHub Pages**

No necesita build ni instalación de nada.

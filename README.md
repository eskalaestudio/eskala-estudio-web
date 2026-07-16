# Markethigh — Sitio web

Sitio one-page estático construido con **Astro 4 + Tailwind CSS 4**.
El output en `/dist` es HTML/CSS puro — listo para subir a cPanel.

---

## Arrancar en desarrollo

```bash
npm install        # solo la primera vez
npm run dev        # abre en http://localhost:4321
```

---

## Compilar para producción

```bash
npm run build      # genera /dist
```

El contenido de `/dist` es lo que subes al hosting.

---

## Cómo editar textos

Cada sección vive en su propio archivo en `src/components/`.
Abre el archivo, edita el array de datos al inicio del frontmatter (`---`) y guarda.
No necesitas tocar HTML para cambiar textos.

| Sección         | Archivo                           |
|-----------------|-----------------------------------|
| Hero            | `src/components/Hero.astro`       |
| Servicios       | `src/components/Services.astro`   |
| Proceso         | `src/components/HowWeWork.astro`  |
| Casos de éxito  | `src/components/Results.astro`    |
| Nosotros        | `src/components/About.astro`      |
| Contacto        | `src/components/Contact.astro`    |

---

## Cómo cambiar el número de WhatsApp

Busca `[WHATSAPP]` en estos tres archivos y reemplázalo con el número
en formato internacional **sin guiones ni espacios** (ej. `525512345678`):

- `src/components/Hero.astro` — línea 2
- `src/components/Contact.astro` — línea 2
- `src/components/WhatsAppFAB.astro` — línea 2

---

## Cómo cambiar la paleta de colores

Abre `src/styles/global.css` y edita los valores dentro del bloque `@theme { }`:

```css
@theme {
  --color-accent:       #4F46E5;  /* color principal (botones, highlights) */
  --color-accent-dark:  #3730A3;  /* hover del color principal */
  --color-accent-light: #EEF2FF;  /* fondos suaves */
  --color-cta:          #EA580C;  /* WhatsApp / CTA naranja */
  --color-cta-dark:     #C2410C;  /* hover del CTA */
  --color-dark:         #0F0E17;  /* texto principal */
  --color-surface:      #F8F7FF;  /* fondos alternos */
}
```

Cambia los hex y el sitio completo se actualiza automáticamente.

---

## Cómo cambiar las tipografías

1. En `src/styles/global.css`, edita la línea `@import url(...)` con la fuente que quieras de Google Fonts.
2. Actualiza los valores `--font-display` y `--font-body` en el bloque `@theme`.

---

## Cómo agregar los casos de éxito reales

1. Abre `src/components/Results.astro`.
2. Edita el array `cases` al inicio del archivo — cada objeto tiene:
   - `giro` → tipo de negocio (etiqueta)
   - `name` → nombre del negocio
   - `challenge` → el problema que tenían
   - `solution` → qué hicieron
   - `metrics` → array de `{ label, before, after }`
   - `image` → ruta de imagen en `/public/images/cases/`
   - `quote` + `quoteAuthor` → testimonio
3. Pon las imágenes en `public/images/cases/` en formato `.webp` (recomendado 800×400 px).

---

## Cómo reemplazar las fotos de los socios

1. Coloca las fotos en `public/images/` como `socio1.webp` y `socio2.webp` (cuadradas, mínimo 200×200 px).
2. Abre `src/components/About.astro` y actualiza los campos `photo`, `placeholder`, `role` y `bio`.

---

## Cómo actualizar el Schema.org (SEO local)

Abre `src/layouts/BaseLayout.astro` y busca el bloque `<script type="application/ld+json">`.
Rellena los campos: `telephone`, `email`, `sameAs` (Instagram, LinkedIn).

---

## Desplegar en cPanel (hosting compartido)

1. Corre `npm run build` — se genera la carpeta `/dist`.
2. Entra a cPanel → **Administrador de archivos**.
3. Navega a `public_html` (o la carpeta de tu dominio).
4. **Sube** todo el contenido de `/dist` (no la carpeta en sí, su contenido).
5. Listo. No necesitas Node en el servidor.

> Tip: si tu dominio todavía no apunta al hosting, puedes previsualizar
> subiendo los archivos a una subcarpeta como `public_html/preview/`.

---

## Agregar Google Analytics / Meta Pixel

Abre `src/layouts/BaseLayout.astro` y pega el snippet de tu herramienta
justo antes del cierre de `</head>`.

---

## TODO — Pendientes para completar el sitio

> Busca estas cadenas en el código para reemplazar cada placeholder.

### Datos de contacto
- [ ] `[WHATSAPP]` → número con código de país, sin guiones (ej. `525512345678`)
- [ ] `[EMAIL]` → correo de contacto del estudio
- [ ] `[TELEFONO]` → teléfono para Schema.org

### Redes sociales
- [ ] `[URL_INSTAGRAM]` → URL del perfil de Instagram
- [ ] `[URL_LINKEDIN]` → URL de la página de empresa en LinkedIn
- [ ] `[URL_TIKTOK]` → URL del perfil de TikTok

### Socios
- [ ] `[SOCIO_1]` → nombre real del Socio 1
- [ ] `[SOCIO_2]` → nombre real del Socio 2
- [ ] `[ROL_SOCIO_1]` → rol / especialidad del Socio 1
- [ ] `[ROL_SOCIO_2]` → rol / especialidad del Socio 2
- [ ] Bio del Socio 1 (en `About.astro`)
- [ ] Bio del Socio 2 (en `About.astro`)
- [ ] `[URL_LINKEDIN_SOCIO_1]` → LinkedIn personal del Socio 1
- [ ] `[URL_LINKEDIN_SOCIO_2]` → LinkedIn personal del Socio 2
- [ ] Fotos reales → `public/images/socio1.webp` y `socio2.webp`

### Casos de éxito (en `Results.astro`)
- [ ] Caso 1 (restaurante): nombre, reto, solución, métricas reales, testimonio, imagen
- [ ] Caso 2 (comercio local): ídem
- [ ] Caso 3 (clínica): ídem
- [ ] Imágenes → `public/images/cases/restaurante.webp`, `comercio.webp`, `clinica.webp`

### Hero — social proof
- [ ] Verificar / actualizar el número "+50 negocios atendidos"
- [ ] Verificar / actualizar "3× retorno promedio"

### Imágenes y SEO
- [ ] Crear imagen OG real (1200×630 px) → `public/images/og-image.jpg`
- [ ] Dominio definitivo → agregar `site: "https://markethigh.mx"` en `astro.config.mjs`
- [ ] Revisar y afinar meta descripción en `BaseLayout.astro`

### Branding
- [ ] Logo definitivo (reemplaza el favicon SVG actual con el logo real)
- [ ] Confirmar / ajustar paleta de colores en `src/styles/global.css`
- [ ] Confirmar / ajustar tipografías

### Antes de publicar
- [ ] Conectar dominio al hosting de cPanel
- [ ] Activar certificado SSL (Let's Encrypt, disponible en cPanel)
- [ ] Agregar Google Analytics 4 o Meta Pixel en `BaseLayout.astro`
- [ ] Correr Lighthouse en producción y afinar si algo baja de 90

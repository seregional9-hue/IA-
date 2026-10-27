# Requisitos del Proyecto: WebTrivia DAW

## Especificaciones Generales
- **Nombre del juego**: WebTrivia DAW (Juego de preguntas de cultura web).
- **Número de preguntas**: 6 preguntas de opción múltiple (cuatro opciones cada una) enfocadas en tecnologías web y desarrollo.
- **Sistema de puntuación**: 1 punto por cada respuesta acertada. Puntuación máxima: 6 puntos.
- **Condición de finalización**: Al responder la última pregunta, se oculta el juego y se muestra una pantalla de resumen con la puntuación final y un botón para reiniciar.
- **Diseño y accesibilidad**: Diseño responsive adaptado a pantallas de ordenador/móvil y navegación completa mediante teclado (uso de foco visible y teclas de interacción).
- **Tecnologías empleadas**: 
  - `index.html` (Estructura semántica)
  - `styles.css` (Estilos y diseño responsive)
  - `app.js` (Lógica del juego y gestión de eventos)
- **Restricciones técnicas**: Prohibición absoluta de librerías externas (como Bootstrap, React o jQuery), recursos remotos (imágenes o fuentes externas por CDN) y almacenamiento de datos personales.

---

## Decisiones de Diseño y Defectos Revisados

1. **Defecto de accesibilidad en el teclado**: 
   * *Problema inicial*: Los elementos interactivos no mostraban un indicador de enfoque (`outline`) claro al navegar con la tecla Tabulador.
   * *Solución*: Se implementó un estilo CSS explícito con `outline: 3px solid` de alto contraste en los estados `:focus` de todos los botones de opción y de control.
2. **Control de selección múltiple**: 
   * *Problema inicial*: El usuario podía hacer clic en varias opciones de una misma pregunta antes de validar.
   * *Solución*: En `app.js`, tras seleccionar una respuesta, se deshabilitan instantáneamente todos los botones de opción de la pregunta actual y se resalta visualmente la respuesta correcta e incorrecta.
3. **Autonomía total sin conexión ni red externa**: 
   * *Problema inicial*: Se planteó el uso de Google Fonts para mejorar la tipografía.
   * *Solución*: Se descartó para cumplir estrictamente con la prohibición de recursos remotos, utilizando tipografías nativas del sistema (`sans-serif`).
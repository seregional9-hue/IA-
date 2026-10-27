# IA-
Asignatura IA
# WebTrivia DAW - Actividad 1

## 1. Revisión del Prompt (Paso 3)

1. **¿Se puede saber cuándo el juego está terminado?**
   * *Respuesta*: Sí. El juego finaliza de forma clara cuando el usuario responde la última pregunta (la sexta). En ese momento, el contenedor de preguntas se oculta y aparece una pantalla de resultados con la puntuación total obtenida y un botón para reiniciar la partida.

2. **¿Se especifica dónde debe vivir cada parte del código?**
   * *Respuesta*: Sí. Se indica explícitamente que el código debe estar estrictamente separado en tres archivos independientes en la raíz del proyecto: `index.html` para la estructura, `styles.css` para el diseño y `app.js` para la lógica y gestión de eventos.

3. **¿Qué salida será posible comprobar en el navegador?**
   * *Respuesta*: Una interfaz web limpia y adaptable que muestra el título, el contador de puntuación en tiempo real, las preguntas de cultura web con cuatro opciones interactivas, la retroalimentación visual instantánea de acierto o fallo, y la pantalla final de resumen con la opción de reinicio.

4. **¿Qué requisito impediría que el resultado dependiera de un servicio externo?**
   * *Respuesta*: La prohibición explícita de usar librerías externas, CDNs, fuentes o imágenes remotas, asegurando que toda la aplicación funcione de manera local y autónoma con solo abrir el archivo `index.html`.

---

## 2. Instrucciones para probarlo localmente
1. Clona o descarga esta carpeta `actividad-1-juego` en tu equipo local.
2. Comprueba que los tres archivos de código (`index.html`, `styles.css`, `app.js`) están en el mismo directorio.
3. Haz doble clic en `index.html` para abrirlo directamente en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari), sin necesidad de servidores web ni conexión a internet.

---

## 3. Pruebas Manuales Realizadas

1. **Prueba de respuesta correcta**: 
   * *Acción*: Hacer clic en la opción acertada de una pregunta.
   * *Resultado esperado*: El botón cambia a color verde, la puntuación aumenta en el marcador superior en tiempo real y la aplicación pasa automáticamente a la siguiente pregunta tras una breve pausa.

2. **Prueba de respuesta incorrecta**: 
   * *Acción*: Seleccionar una opción errónea.
   * *Resultado esperado*: El botón seleccionado se marca en rojo, la aplicación revela de forma automática cuál era la respuesta correcta en verde, y no se suman puntos en el marcador.

3. **Prueba de accesibilidad por teclado y reinicio**: 
   * *Acción*: Navegar por las opciones utilizando únicamente la tecla `Tabulador` (comprobando el indicador de foco visible) y pulsando `Enter` para responder. Al llegar al final, pulsar el botón "Reiniciar Juego".
   * *Resultado esperado*: El flujo de teclado es completamente funcional y accesible, el juego muestra la pantalla de resultados final y el botón de reinicio restablece los contadores y las preguntas al estado inicial.

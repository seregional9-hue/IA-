Rol: Actúa como desarrollador/a frontend que crea recursos accesibles para alumnado de 2.º DAW.

Tarea: Construye un juego web de preguntas llamado WebTrivia DAW.

Contexto: Se ejecutará localmente al abrir index.html sin necesidad de servidor ni dependencias. El público es alumnado de ciclos formativos de informática y entusiastas del desarrollo web. 
Las preguntas son 6 sobre cultura web:
1. ¿Qué etiqueta HTML5 se utiliza semánticamente para la cabecera principal de un sitio web? (Opciones: <section>, <header>, <top>, <head> -> Correcta: <header>)
2. ¿Qué propiedad de CSS se utiliza para crear diseños flexibles en una sola dirección? (Opciones: display: block, display: flex, display: grid, display: float -> Correcta: display: flex)
3. ¿Qué método HTTP se utiliza habitualmente para enviar datos nuevos a un servidor? (Opciones: GET, POST, FETCH, PULL -> Correcta: POST)
4. ¿Qué significan las siglas DOM en el contexto del desarrollo web? (Opciones: Document Object Model, Digital Oriented Method, Data Object Management, Direct Output Mechanism -> Correcta: Document Object Model)
5. ¿Qué sistema de control de versiones distribuido se utiliza ampliamente para gestionar código fuente? (Opciones: SVN, Git, CVS, Mercurial -> Correcta: Git)
6. ¿Qué puerto por defecto utiliza el protocolo seguro HTTPS para la transferencia web? (Opciones: 80, 8080, 443, 21 -> Correcta: 443)

Requisitos funcionales:
- Muestra una pregunta cada vez con cuatro respuestas en botones interactivos.
- Indica visualmente si la respuesta es correcta o incorrecta y actualiza la puntuación en tiempo real.
- Al terminar la última pregunta, muestra la puntuación total y un botón visible para reiniciar el juego desde cero.

Requisitos de accesibilidad y calidad:
- Usa elementos HTML semánticos (<header>, <main>, <section>, <button>), etiquetas visibles y un indicador de foco de teclado claro.
- No uses dependencias externas, imágenes remotas ni recopiles datos personales.
- Separa estrictamente el código en tres archivos: index.html, styles.css y app.js.

Formato de salida:
1. Muestra primero el árbol de archivos.
2. Devuelve el contenido completo de index.html, styles.css y app.js en bloques de código separados.
3. Explica cómo probarlo localmente y enumera tres pruebas manuales.

Restricciones:
- No inventes características fuera de esta lista.
- No uses alert() para la interacción con el usuario.

* Nota: Con el prompt-v1.md ya mejoro lo que necesito, no añado prompt-v2 porque ya no mejora más al realizado primeramente.
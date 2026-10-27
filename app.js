const questions = [
    {
        question: "¿Qué etiqueta HTML5 se utiliza semánticamente para la cabecera principal de un sitio web?",
        options: ["<section>", "<header>", "<top>", "<head>"],
        correct: 1
    },
    {
        question: "¿Qué propiedad de CSS se utiliza para crear diseños flexibles en una sola dirección?",
        options: ["display: block", "display: flex", "display: grid", "display: float"],
        correct: 1
    },
    {
        question: "¿Qué método HTTP se utiliza habitualmente para enviar datos nuevos a un servidor?",
        options: ["GET", "POST", "FETCH", "PULL"],
        correct: 1
    },
    {
        question: "¿Qué significan las siglas DOM en el contexto del desarrollo web?",
        options: ["Document Object Model", "Digital Oriented Method", "Data Object Management", "Direct Output Mechanism"],
        correct: 0
    },
    {
        question: "¿Qué sistema de control de versiones distribuido se utiliza ampliamente para gestionar código fuente?",
        options: ["SVN", "Git", "CVS", "Mercurial"],
        correct: 1
    },
    {
        question: "¿Qué puerto por defecto utiliza el protocolo seguro HTTPS para la transferencia web?",
        options: ["80", "8080", "443", "21"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionSection = document.getElementById("question-section");
const resultSection = document.getElementById("result-section");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score");
const currentQDisplay = document.getElementById("current-q");
const finalScoreDisplay = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
    const currentQ = questions[currentQuestionIndex];
    currentQDisplay.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQ.question;
    optionsContainer.innerHTML = "";

    currentQ.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option-btn");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex, selectedButton) {
    const currentQ = questions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll(".option-btn");

    // Deshabilitar todos los botones tras la selección
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQ.correct) {
        selectedButton.classList.add("correct");
        score++;
        scoreDisplay.textContent = score;
    } else {
        selectedButton.classList.add("incorrect");
        allButtons[currentQ.correct].classList.add("correct");
    }

    // Pasar a la siguiente pregunta tras 1.2 segundos
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1200);
}

function showResults() {
    questionSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    finalScoreDisplay.textContent = score;
}

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    resultSection.classList.add("hidden");
    questionSection.classList.remove("hidden");
    loadQuestion();
});

// Inicializar el juego al cargar la página
loadQuestion();
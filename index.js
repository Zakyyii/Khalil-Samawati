const words = [ 
    "M. Najwan Zaki", 
    "Sekretaris MPK 60",
    "Sekretaris Sambadha Victory 2025",
    "@najwanza_",
];
const typedText = document.getElementById("typedText");
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const speed = 100;
const delayBetweenWords = 1500; // Perbaiki kesalahan penamaan

function type() {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
        currentCharIndex--;
    } else {
        currentCharIndex++;
    }

    typedText.textContent = currentWord.substring(0, currentCharIndex);

    let timeout = speed;

    if (!isDeleting && currentCharIndex === currentWord.length) {
        timeout = delayBetweenWords;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        timeout = speed; // Atur timeout ke speed saat beralih ke kata berikutnya
    }

    setTimeout(type, timeout);
}

type();

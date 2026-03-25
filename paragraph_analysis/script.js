const textarea = document.getElementById('userText');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultDiv = document.getElementById('resultArea');
 
function analyzeText() {
    const text = textarea.value;
    const charCount = text.length;
    const wordCount = text.split(" ").length;
    const reversedText = text.split("").reverse().join("");
    resultDiv.innerHTML = `
<strong>Analysis Results</strong><br>
        Total characters: ${charCount}<br>
        Total words: ${wordCount}<br>
        Reversed text:<br>
        ${reversedText}
    `;
}
 
analyzeBtn.addEventListener('click', analyzeText);
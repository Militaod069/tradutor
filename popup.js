document.getElementById('translateBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const outputDiv = document.getElementById('outputText');
    
    if (inputText.trim() === "") {
        outputDiv.textContent = "Por favor, insira algum texto.";
        return;
    }

    outputDiv.textContent = "Traduzindo...";
    
    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=en|pt`);
        
        if (!response.ok) {
            throw new Error('Erro na resposta da API: ' + response.statusText);
        }

        const data = await response.json();
        outputDiv.textContent = data.responseData.translatedText;
    } catch (error) {
        outputDiv.textContent = "Erro na tradução: " + error.message;
    }
});

document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('inputText').value = "";
    document.getElementById('outputText').textContent = "";
});

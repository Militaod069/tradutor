chrome.action.onClicked.addListener(() => {
    chrome.windows.create({
        url: 'popup.html',
        type: 'popup',
        width: 800,  // Largura da nova janela
        height: 600, // Altura da nova janela
        top: 100,    // Posição vertical
        left: 100    // Posição horizontal
    });
});

function gerarAudio() {
    const texto = document.getElementById('texto').value;
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(texto)}&tl=pt-BR&client=tw-ob`;

    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = 'audio.mp3'; // Você pode alterar a extensão do arquivo, se desejar
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
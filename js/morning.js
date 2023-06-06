function countWords() {
    var text = document.getElementById('textarea').value;
    var wordCount = 0;
    
    if (text.trim() !== '') {
        wordCount = text.trim().split(/\s+/).length;
    }
    
    document.getElementById('wordCount').textContent = 'Word Count: ' + wordCount;
    
    if (wordCount >= 500) {
        document.getElementById('balloonContainer').style.display = 'block';
    } else {
        document.getElementById('balloonContainer').style.display = 'none';
    }
}
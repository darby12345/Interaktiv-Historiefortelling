document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColorBtn'); 
    let isRed = false; 

    button.addEventListener('click', function() {
        if (isRed) {
            const paragraphs = document.querySelectorAll('.container p');
            paragraphs.forEach(function(paragraph) {
                paragraph.style.color = 'white';
            });
        } else {
            const paragraphs = document.querySelectorAll('.container p');
            paragraphs.forEach(function(paragraph) {
                paragraph.style.color = 'red';
            });
        }

        isRed = !isRed;
    });
});

bgMusic.play()
;
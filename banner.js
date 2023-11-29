document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 10; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.style.animationDelay = `${i * 0.05}s`;
        document.querySelector('.banner').appendChild(div);
    }

});


  

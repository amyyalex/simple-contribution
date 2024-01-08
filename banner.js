const boxContainer = document.getElementById('boxContainer');

        // Create 2 sets of 'infi' elements
        for (let set = 0; set < 2; set++) {
            const infiDiv = document.createElement('div');
            infiDiv.classList.add('infi');

            for (let i = 0; i <= 20; i++) {
                const span = document.createElement('span');
                span.style.setProperty('--i', i);
                infiDiv.appendChild(span);
            }

            boxContainer.appendChild(infiDiv);
        }
  

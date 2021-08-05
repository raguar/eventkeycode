const content = document.getElementById('content');

window.addEventListener('keydown', (e) =>{

    content.innerHTML = `
        <div class="key">
            ${e.key === ' '? 'Space' : e.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>
        <div class="key">
            ${e.which}
            <small>event.which</small>
        </div>
    
    `

})
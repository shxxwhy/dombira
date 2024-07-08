function kuyla(val) {
    document.querySelector(`.${val}`).classList.add('pressed');
    setTimeout(function() {
        document.querySelector(`.${val}`).classList.remove('pressed');
    }, 100);

    switch (val) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        default:
            return
    }
}

function playSound(keyKey, source, key) {
    document.addEventListener('keydown', function(e) {
        if (e.code == `${keyKey}`) {
            let tom1 = new Audio(`sounds/${source}.mp3`);
            tom1.play();
            
            document.querySelector(`.${key}`).classList.add('pressed');
            setTimeout(function() {
                document.querySelector(`.${key}`).classList.remove('pressed');
            }, 100);
        }
    })
}

playSound('KeyW', 'tom-1', 'w');
playSound('KeyA', 'tom-2', 'a');
playSound('KeyS', 'tom-3', 's');
playSound('KeyD', 'tom-4', 'd');
playSound('KeyJ', 'snare', 'j');
playSound('KeyK', 'crash', 'k');
playSound('KeyL', 'kick-bass', 'l');


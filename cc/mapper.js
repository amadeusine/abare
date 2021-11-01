// import map from 'default_bindings.json';
const map = {};
let history = [];

window.addEventListener('keydown', (window, event) => {
    history.push({
        event: 'keydown',
        code: event.keyCode,
        key: map[event.keyCode] || event.keyCode,
    });
});

window.addEventListener('keyup', (window, event) => {
    history.push({
        event: 'keyup',
        code: event.keyCode,
        key: map[event.keyCode] || event.keyCode,
    });
});
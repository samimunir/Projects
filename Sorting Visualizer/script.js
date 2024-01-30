const n = 10;
const array = [];

init();

function init() {
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    showBars();
}

function play() {
    const copy = [...array];
    const moves = bubbleSort(copy);
    animate(moves);
}

function animate(moves) {
    if (moves.length == 0) {
        showBars();
        return;
    }
    const move = moves.shift();
    const [i, j] = move.indices;
    if (move.type === 'swap') {
        [array[i], array[j]] = [array[j], array[i]];
    }
    showBars(move);
    setTimeout(function() {
        animate(moves);
    }, 800);
}

function bubbleSort(array) {
    const moves = [];
    do {
        var swapped = false;
        for (let i = 1; i < array.length; i++) {
            moves.push({indices: [i - 1, i], type: 'comp'});
            if (array[i - 1] > array[i]) {
                swapped = true;
                moves.push({indices: [i - 1, i], type: 'swap'});
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
            }
        }
    } while (swapped);
    return moves;
}

function showBars(move) {
    document.getElementById('container').innerHTML = '';
    for (let i = 0; i < n; i++) {
        const bar = document.createElement('div');
        bar.style.height = array[i] * 100 + '%';
        bar.classList.add('bar');
        if (move && move.indices.includes(i)) {
            bar.style.backgroundColor = move.type === 'swap' ? 'red' : 'blue';
        }
        document.getElementById('container').appendChild(bar);
    }
}
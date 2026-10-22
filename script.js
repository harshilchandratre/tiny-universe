function createRandom(seed) {
    let state = seed;

    return function () {
        state = (state * 1664525 + 1013904223) % 4294967296;
        return state / 4294967296;
    };
}

function generateUniverse() {
    const canvas = document.getElementById("universe");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // seed generator
    const seedInput = document.getElementById("seedInput");

    const seed = Math.floor(Math.random() * 4294967296);

    seedInput.value = seed;
    const random = createRandom(seed);

    for (let i = 0; i < 10; i++) {
        const circle = new Path2D();

        // x and y coordinates
        const x = random() * canvas.width;
        const y = random() * canvas.height;

        circle.arc(x, y, 1.5, 0, Math.PI * 2);

        ctx.fillStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.fill(circle);
    }
}

window.onload = generateUniverse;


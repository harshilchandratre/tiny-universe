const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");

document.getElementById("generate").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 100; i++) {
        const circle = new Path2D();

        // x and y coordinates
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        circle.arc(x, y, 3, 0, Math.PI * 2);

        ctx.fillStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.fill(circle);
    }
});
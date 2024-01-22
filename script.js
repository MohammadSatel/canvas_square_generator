document.getElementById('squareForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const size = parseInt(document.getElementById('size').value);
    const color = document.getElementById('color').value;
    const time = parseInt(document.getElementById('time').value) * 1000; // Convert to milliseconds

    // Get canvas and context
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = size;
    canvas.height = size;

    // Draw the square
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, size, size);

    // Animate the filling of the square
    let startTime = null;

    function fillSquare(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;

        const fillAmount = Math.min(elapsedTime / time, 1);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, size * fillAmount, size);

        if (elapsedTime < time) {
            requestAnimationFrame(fillSquare);
        }
    }

    requestAnimationFrame(fillSquare);
});

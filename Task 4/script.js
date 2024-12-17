
function calculateCircle() {
    const r = document.getElementById('radius').value;
    document.getElementById('circleResult').innerText = `Area: ${(Math.PI * r * r).toFixed(2)}`;
}
function calculateTriangle() {
    const b = document.getElementById('base').value;
    const h = document.getElementById('height').value;
    document.getElementById('triangleResult').innerText = `Area: ${(0.5 * b * h).toFixed(2)}`;
}
function calculateRectangle() {
    const l = document.getElementById('length').value;
    const w = document.getElementById('width').value;
    document.getElementById('rectangleResult').innerText = `Area: ${(l * w).toFixed(2)}`;
}
function calculateSquare() {
    const s = document.getElementById('side').value;
    document.getElementById('squareResult').innerText = `Area: ${(s * s).toFixed(2)}`;
}
function calculateSphere() {
    const r = document.getElementById('sphereRadius').value;
    document.getElementById('sphereResult').innerText = `Volume: ${((4/3) * Math.PI * Math.pow(r, 3)).toFixed(2)}`;
}
function calculateCube() {
    const s = document.getElementById('cubeSide').value;
    document.getElementById('cubeResult').innerText = `Volume: ${(s * s * s).toFixed(2)}`;
}
function calculateCirclePerimeter() {
    const r = document.getElementById('circlePerimeterRadius').value;
    document.getElementById('circlePerimeterResult').innerText = `Perimeter: ${(2 * Math.PI * r).toFixed(2)}`;
}
function calculateRectanglePerimeter() {
    const l = document.getElementById('perimeterLength').value;
    const w = document.getElementById('perimeterWidth').value;
    document.getElementById('rectanglePerimeterResult').innerText = `Perimeter: ${(2 * (parseFloat(l) + parseFloat(w))).toFixed(2)}`;
}
function calculateSquarePerimeter() {
    const s = document.getElementById('squarePerimeterSide').value;
    document.getElementById('squarePerimeterResult').innerText = `Perimeter: ${(4 * s).toFixed(2)}`;
}

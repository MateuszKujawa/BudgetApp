// SELECT CHART ELEMENT
const chart = document.querySelector(".chart");

// CREATE CANVAS ELEMMENT
const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

chart.appendChild(canvas);

// GET CONTEXT OF CANVAS
const ctx = canvas.getContext("2d");
// CHANGE THE LINE WIDTH
ctx.lineWidth = 8;
// CIRCLE RADIUS
const R = 20;

// FUNCTIONS
function drawCircle(color, ratio, anticlockwise){

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart( income, outcome){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income+outcome);

    drawCircle("#FFFFFF", - ratio, true);
    drawCircle("#F70D1A", 1 - ratio, false);
}
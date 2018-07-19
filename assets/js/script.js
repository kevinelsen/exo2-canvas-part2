var alien = document.getElementById('ovni');
var ctx = alien.getContext('2d');

ctx.beginPath();
ctx.moveTo(0,0)
ctx.lineTo(500,0)
ctx.lineTo(500,500)
ctx.lineTo(0,500)
ctx.closePath();
ctx.fillStyle = 'blue'
ctx.fill();
//Partie haute du vaisseau.
ctx.beginPath();
ctx.lineWidth = '2';
ctx.fillStyle = 'white';
ctx.moveTo(100,200);
ctx.quadraticCurveTo(250,80,400,200);
ctx.fill();
ctx.closePath();

//Partie basse du vaisseau.
ctx.beginPath();
ctx.lineWidth = '2';
ctx.fillStyle = 'white';
ctx.moveTo(100,200);
ctx.bezierCurveTo(250,330,400,200,400,200);
ctx.fill();
ctx.closePath();

//Coque du vaisseau.
ctx.beginPath();
ctx.lineWidth = '2';
ctx.fillStyle = 'white';
ctx.moveTo(200,160);
ctx.quadraticCurveTo(255,20,310,160);
ctx.fill();
ctx.closePath();

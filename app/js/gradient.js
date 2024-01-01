// class GradientAnimation {
//     constructor() {
//         this.cnv        = document.querySelector(`canvas`);
//         this.ctx        = this.cnv.getContext(`2d`);
//
//         this.circlesNum = 15;
//         this.minRadius  = 350;
//         this.maxRadius  = 400;
//         this.speed      = .015;
//
//         (window.onresize = () => {
//             this.setCanvasSize();
//             this.createCircles();
//         })();
//         this.drawAnimation();
//
//     }
//     setCanvasSize() {
//         this.w = this.cnv.width  = innerWidth * devicePixelRatio;
//         this.h = this.cnv.height = innerHeight * devicePixelRatio;
//         this.ctx.scale(devicePixelRatio, devicePixelRatio)
//     }
//     createCircles() {
//         this.circles = [];
//         for (let i = 0 ; i < this.circlesNum ; ++i) {
//             this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));
//         }
//     }
//     drawCircles() {
//         this.circles.forEach(circle => circle.draw(this.ctx, this.speed));
//     }
//     clearCanvas() {
//         this.ctx.clearRect(0, 0, this.w, this.h);
//     }
//     drawAnimation() {
//         this.clearCanvas();
//         this.drawCircles();
//         window.requestAnimationFrame(() => this.drawAnimation());
//     }
// }
//
// class Circle {
//     constructor(w, h, minR, maxR) {
//         this.x = Math.random() * w;
//         this.y = Math.random() * h;
//         this.angle  = Math.random() * Math.PI * 32;
//         this.radius = Math.random() * (maxR - minR) + minR;
//
//         this.firstColor = 'hsla(231, 100%, 50%, 1)';  // #040404
//         this.secondColor = 'hsl(273,88%,50%, 0)'; // #8C0FEF
//         this.thirdColor = 'hsl(0,0%,2%, 0)';
//
//     }
//     draw(ctx, speed) {
//         this.angle += speed;
//         const x = this.x + Math.cos(this.angle) * 200;
//         const y = this.y + Math.sin(this.angle) * 200;
//         const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
//         gradient.addColorStop(0, this.firstColor);
//         gradient.addColorStop(1, this.secondColor);
//         gradient.addColorStop(1, this.thirdColor);
//
//         ctx.globalCompositeOperation = `overlay`;
//         ctx.fillStyle = gradient;
//         ctx.beginPath();
//         ctx.arc(x, y, this.radius, 0, Math.PI * 2);
//         ctx.fill();
//     }
// }
//
// window.onload = () => {
//     new GradientAnimation();
// }

const canvas = document.getElementById('parallaxCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update() {
        this.size += 0.05;
        if (this.size > 2) {
            this.size = 0;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }
        this.draw();
    }
}

function createStars() {
    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => star.update());
    requestAnimationFrame(animateStars);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);

function handleMouseMove(e) {
    const { clientX, clientY } = e;
    const xOffset = clientX / canvas.width - 0.5;
    const yOffset = clientY / canvas.height - 0.5;

    stars.forEach(star => {
        star.x += xOffset * 10;
        star.y += yOffset * 10;
    });
}

createStars();
animateStars();
window.addEventListener('mousemove', handleMouseMove);
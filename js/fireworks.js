// 烟花效果脚本
let fireworksActive = false;
let animationId = null;
let canvas, ctx;

// 初始化画布
function initCanvas() {
    canvas = document.getElementById('fireworksCanvas');
    if (!canvas){
        canvas = document.createElement('canvas');
        canvas.id = 'fireworksCanvas';
        // 设置画布样式
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.insertBefore(canvas, document.body.firstChild);
    }
    ctx = canvas.getContext('2d');
    
    // 设置画布大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 确保画布初始隐藏
    canvas.style.display = 'none';
    return true;
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCanvas);
} else {
    initCanvas();
}

// 粒子类
class Particle {
    constructor(x, y, color, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.015;
        this.gravity = 0.05;
    }
    
    update() {
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// 烟花类
class Firework {
    constructor(x, y, targetY) {
        this.x = x;
        this.y = y;
        this.targetY = targetY;
        this.velocity = {
            x: (Math.random() - 0.5) * 4,
            y: -Math.random() * 3 - 3
        };
        this.particles = [];
        this.exploded = false;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    }
    
    update() {
        if (!this.exploded) {
            this.velocity.y += 0.02;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            
            // 到达目标高度时爆炸
            if (this.y <= this.targetY) {
                this.explode();
            }
        } else {
            // 更新粒子
            for (let i = this.particles.length - 1; i >= 0; i--) {
                this.particles[i].update();
                if (this.particles[i].alpha <= 0) {
                    this.particles.splice(i, 1);
                }
            }
        }
    }
    
    explode() {
        this.exploded = true;
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount;
            const speed = Math.random() * 5 + 2;
            this.particles.push(new Particle(
                this.x,
                this.y,
                this.color,
                {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed
                }
            ));
        }
        
        // 添加一些额外随机粒子增加效果
        for (let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 8 + 3;
            this.particles.push(new Particle(
                this.x,
                this.y,
                `hsl(${Math.random() * 360}, 100%, 60%)`,
                {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed
                }
            ));
        }
    }
    
    draw() {
        if (!this.exploded) {
            // 绘制上升的烟花
            ctx.save();
            ctx.globalAlpha = 1;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fill();
            
            // 添加尾迹效果
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.velocity.x * 3, this.y - this.velocity.y * 3);
            ctx.stroke();
            ctx.restore();
        } else {
            // 绘制所有粒子
            this.particles.forEach(particle => particle.draw());
        }
    }
}

let fireworks = [];

function animate() {
    if (!fireworksActive || !canvas || !ctx) {
        stopFireworks();
        return;
    }
    
    // 清除画布（使用透明背景）
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 随机添加新烟花（在动画期间）
    if (Math.random() < 0.05 && fireworks.length < 5) {
        const x = Math.random() * canvas.width;
        const targetY = Math.random() * canvas.height * 0.5 + canvas.height * 0.2;
        fireworks.push(new Firework(x, canvas.height, targetY));
    }
    
    // 更新和绘制所有烟花
    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();
        
        // 移除已完成的烟花
        if (fireworks[i].exploded && fireworks[i].particles.length === 0) {
            fireworks.splice(i, 1);
        }
    }
    
    animationId = requestAnimationFrame(animate);
    
    // 如果没有烟花了，停止动画
    if (fireworks.length === 0 && fireworksActive) {
        // 缩短等待时间，快速恢复
        setTimeout(() => {
            if (fireworks.length === 0 && fireworksActive) {
                stopFireworks();
            }
        }, 200);
    }
}

function startFireworks() {
    if (!canvas || !ctx) {
        initCanvas();
        if (!canvas || !ctx) return;
    }
    
    if (fireworksActive) return;
    
    fireworksActive = true;
    canvas.style.display = 'block';
    canvas.style.backgroundColor = 'black';
    fireworks = [];
    
    // 立即创建几个烟花
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const x = Math.random() * canvas.width;
            const targetY = Math.random() * canvas.height * 0.5 + canvas.height * 0.2;
            fireworks.push(new Firework(x, canvas.height, targetY));
        }, i * 300);
    }
    
    // 开始动画
    animate();
    
    // 15秒后自动停止
    setTimeout(() => {
        stopFireworks();
    }, 15000);
}

function stopFireworks() {
    fireworksActive = false;
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    
    // 清除所有烟花
    fireworks = [];
    
    // 立即清除画布并隐藏，不等待
    if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = 'none';
    }
}



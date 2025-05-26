export default class Tool{
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const context = canvas.getContext('2d');
        if (!context) throw new Error("2D context not available");
        this.ctx = context;
        this.destroyEvents();
    }

    set fillColor(color){
        this.ctx.fillStyle = color;
    }

    set strokeColor(color){
        this.ctx.strokeStyle = color;
    }

    destroyEvents() {
        this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
    }
}
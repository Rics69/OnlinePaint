export default class Tool{
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    socket: WebSocket;
    id: string;

    constructor(canvas: HTMLCanvasElement, socket: WebSocket, id: string) {
        this.canvas = canvas;
        this.socket = socket;
        this.id = id;
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

    set lineWidth(width){
        this.ctx.lineWidth = width;
    }

    destroyEvents() {
        this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
    }
}
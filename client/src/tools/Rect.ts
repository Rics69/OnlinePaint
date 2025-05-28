import Tool from "./Tool.ts";

export default class Rect extends Tool {
    mouseDown: boolean = false;
    startX: number = 0;
    startY: number = 0;
    saved: string;
    width: number;
    height: number;

    constructor(canvas: HTMLCanvasElement, socket: WebSocket, id: string) {
        super(canvas, socket, id);
        this.listen();
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }

    mouseUpHandler(e) {
        this.mouseDown = false;
        const target = e.target as HTMLCanvasElement;
        this.socket.send(JSON.stringify({
            method: "draw",
            id: this.id,
            figure: {
                type: "rect",
                x: this.startX,
                y: this.startY,
                width: this.width,
                height: this.height
            }
        }))
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true;
        this.ctx.beginPath()
        const target = e.target as HTMLCanvasElement;
        this.startX = e.pageX - target.offsetLeft;
        this.startY = e.pageY - target.offsetTop;
        this.saved = this.canvas.toDataURL();
    }

    mouseMoveHandler(e: MouseEvent) {
        if(this.mouseDown){
            const target = e.target as HTMLCanvasElement;
            let currentX = e.pageX - target.offsetLeft;
            let currentY = e.pageY - target.offsetTop;
            this.width = currentX - this.startX;
            this.height = currentY - this.startY;
            this.draw(this.startX, this.startY, this.width, this.height);
        }
    }

    draw(x: number, y: number, w: number, h: number ){
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.rect(x, y, w, h);
            this.ctx.fill();
            this.ctx.stroke();
        }
    }
}
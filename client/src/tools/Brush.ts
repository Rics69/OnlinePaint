import Tool from "./Tool.ts";

export default class Brush extends Tool {
    mouseDown: boolean = false;

    constructor(canvas: HTMLCanvasElement, socket:WebSocket, id: string) {
        super(canvas, socket, id);
        this.listen();
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }

    mouseUpHandler() {
        this.mouseDown = false;
        this.socket.send(JSON.stringify({
            method: "draw",
            id: this.id,
            figure: {
                type: "finish",
            }
        }))
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true;
        this.ctx.beginPath()
        const target = e.target as HTMLCanvasElement;
        this.ctx.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
    }

    mouseMoveHandler(e: MouseEvent) {
        if(this.mouseDown){
            const target = e.target as HTMLCanvasElement;
            // this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
            this.socket.send(JSON.stringify({
                method: "draw",
                id: this.id,
                figure: {
                    type: "brush",
                    x: e.pageX - target.offsetLeft,
                    y: e.pageY - target.offsetTop
                }
            }))
        }
    }

    static draw(ctx:CanvasRenderingContext2D, x: number, y: number){
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
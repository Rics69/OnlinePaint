import Tool from "./Tool.ts";

export default class Brush extends Tool {
    mouseDown: boolean = false;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.listen();
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }

    mouseUpHandler() {
        this.mouseDown = false;
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
            this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
        }
    }

    draw(x: number, y: number){
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }
}
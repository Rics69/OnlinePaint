import Tool from "./Tool.ts";

export default class Brush extends Tool {
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.listen();
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }

    mouseUpHandler(e) {

    }

    mouseDownHandler(e) {

    }

    mouseMoveHandler(e) {

    }
}
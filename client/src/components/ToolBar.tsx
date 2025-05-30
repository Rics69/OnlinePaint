import '../styles/toolbar.scss';
import toolState from "../store/toolState.ts";
import Brush from "../tools/Brush.ts";
import Rect from "../tools/Rect.ts";
import canvasState from "../store/canvasState.ts";
import Eraser from "../tools/Eraser.ts";

const ToolBar = () => {

    const changeColor = (e) => {
        toolState.setStrokeColor(e.target.value);
        toolState.setFillColor(e.target.value);
    }

    const download = () => {
        const dataUrl = canvasState.canvas.toDataURL();
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = canvasState.sessionId + ".jpg";
        document.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionId))} />
            <button className="toolbar__btn rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionId))} />
            <button className="toolbar__btn circle" />
            <button className="toolbar__btn eraser" onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}/>
            <button className="toolbar__btn line" />
            <input onChange={e => changeColor(e)} style={{marginLeft: 10}} type="color"/>
            <button className="toolbar__btn undo" onClick={() => canvasState.undo()}/>
            <button className="toolbar__btn redo" onClick={() => canvasState.redo()}/>
            <button className="toolbar__btn save" onClick={() => download()}/>
        </div>
    );
};

export default ToolBar;
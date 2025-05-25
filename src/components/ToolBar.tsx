import '../styles/toolbar.scss';
import toolState from "../store/toolState.ts";
import Brush from "../tools/Brush.ts";
import canvasState from "../store/canvasState.ts";

const ToolBar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas ))} />
            <button className="toolbar__btn rect" />
            <button className="toolbar__btn circle" />
            <button className="toolbar__btn eraser" />
            <button className="toolbar__btn line" />
            <input style={{marginLeft: 10}} type="color"/>
            <button className="toolbar__btn undo" />
            <button className="toolbar__btn redo" />
            <button className="toolbar__btn save" />
        </div>
    );
};

export default ToolBar;
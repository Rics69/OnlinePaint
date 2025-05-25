import './styles/app.scss';
import ToolBar from "./components/ToolBar.tsx";
import SettingBar from "./components/SettingBar.tsx";
import Canvas from "./components/Canvas.tsx";

function App() {
    return (
        <div className="app">
            <ToolBar />
            <SettingBar />
            <Canvas />
        </div>
    )
}

export default App

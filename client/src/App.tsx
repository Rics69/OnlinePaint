import './styles/app.scss';
import ToolBar from "./components/ToolBar.tsx";
import SettingBar from "./components/SettingBar.tsx";
import Canvas from "./components/Canvas.tsx";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function DrawingPage() {
    return (
        <>
            <ToolBar/>
            <SettingBar/>
            <Canvas/>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/:id" element={<DrawingPage />} />
                    <Route path="*" element={<Navigate to={`/${(+new Date()).toString(16)}`} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App

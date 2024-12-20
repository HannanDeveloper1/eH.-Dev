// Imports
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

// Exported default function
export default function App() {
    return (
        <>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
        </Routes>
        </>
    )
}

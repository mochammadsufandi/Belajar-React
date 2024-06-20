import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Components/navbar";
import { About } from "../Components/about";

function SecondPage() {
    return (
        <Router>
            <Routes>
                <Route path="/secondPage" element={<Navbar/>}/>
                <Route path="/secondPage/about" element={<About/>}/>
            </Routes>
        </Router>
    )
}

export default SecondPage;
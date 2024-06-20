import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Components/navbar";
import { About } from "../Components/about";

function Page() {
    return (
        <Router>
            <Routes>
                <Route path="/firstPage" element={<Navbar/>}/>
                <Route path="/firstPage/about" element={<About/>}/>
            </Routes>
        </Router>
    )
}

export default Page
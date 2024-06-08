import { BrowserRouter , Route , Routes } from "react-router-dom"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Porject from "./pages/Porject"

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    {/* i need to make the home page  */}
    {/* <Route path="/" element={<Home/>}> */}
    <Route path="/about" element={<About/>}></Route>
    <Route path="/Signin" element={<SignIn/>}></Route>
    <Route path="/SignUp" element={<SignUp/>}></Route>
    <Route path="/Dashboard" element={<Dashboard/>}></Route>
    <Route path="/Project" element={<Porject/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

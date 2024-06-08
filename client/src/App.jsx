import { BrowserRouter , Route , Routes } from "react-router-dom"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Porject from "./pages/Porject"
import Header from "./components/Header"
import Home from "./pages/Home"

export default function App() {
  return (
   <BrowserRouter>
   <Header/>  
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/project" element={<Porject/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

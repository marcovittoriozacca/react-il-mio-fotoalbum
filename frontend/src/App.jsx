import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        {/* home page at path "/" */}
        <Route index element={<Home/>}/>


        {/* not found route */}
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

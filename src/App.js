import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";


function App() {
  return (
    <div className="App">      
      {/*Each individual Route is wrapped inside of the <Routes> Component */}
      <Routes> {/* Opening tag*/}
        <Route path="/" element={<Home/>} >
        <Route path= "About" element={<About/>} />
        <Route path= "Book" element={<BookList/>} />
        <Route path= "book/:Id" element={<BookDetails/>} />        
        </Route>
      </Routes>        
      
    </div>
  )
}
export default App;
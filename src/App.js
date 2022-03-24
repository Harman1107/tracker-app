import { Suspense } from "react"; 
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import NavBar from "./components/navbar.js"
import ExerciseList from "./components/exercise-list"
import EditExercise from "./components/edit-exercise.js"
import CreateExercise from "./components/create-exercise.js"
import CreateUser from "./components/create-user.js"


function App() {
 
  return ( 
  <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/"  element={<Suspense fallback={<div></div>}><ExerciseList/></Suspense>} />
          <Route path="/edit/:id"  element={<Suspense fallback={<div></div>}><EditExercise/></Suspense>} />
          <Route path="/create"  element={<Suspense fallback={<div></div>}><CreateExercise/></Suspense>} />
          <Route path="/user" element={<Suspense fallback={<div></div>}><CreateUser/></Suspense>} />
        </Routes>
  </BrowserRouter>
 
  
);
    
  
}

export default App;

import './App.css';
import Navbar from "./Navbar";
import "./Navstyle.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
    <Navbar />
   
    <Button> <h2>Add order</h2> </Button>
    &nbsp;
    &nbsp;
    <Button style ={{backgroundColor: "Green", color: "white", position: "center", display: "inline-flex", gap: "2rem"}}> <h2>Edit order</h2></Button>
    &nbsp;
    &nbsp;
    <Button style = {{backgroundColor: "Blue" , color: "white", position: "center", display: "inline-flex" , gap: "2rem"}}> <h2>Delete order</h2> </Button>
 
    </div>
    )
}

export default App;

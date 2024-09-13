import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container my-4">
        <h2 className="my-4">News Express - Top Headlines</h2>
        <News></News>
      </div>
    </>
  );
}

export default App;

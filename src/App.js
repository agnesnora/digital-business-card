import Header from "..//src/components/header.js";
import Main from "..//src/components/main.js";
import Footer from "..//src/components/footer.js";
import "./App.css";

function App() {
  return (
    <div className="bodyContainer">
      <div className="appContainer">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

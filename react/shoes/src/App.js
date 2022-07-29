import tlmLogo from "./images/tlm.jpg";
import "./style.css";

function MyComponent(props) {
  return <span>Hi I'm Nate</span>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={tlmLogo} width="100%" alt="TLM Logo" className="tlm-logo" />
        </div>
        <p>Edit App.js and save to reload.</p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;

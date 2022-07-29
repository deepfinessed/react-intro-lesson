import tlmLogo from "./images/tlm.jpg";
import "./style.css";
import kyrie from "./images/kyrie.jpg";
import dame from "./images/dame.jpg";
import giannis from "./images/giannis.jpg";
import jordan from "./images/jordan.jpg";
import kd from "./images/kd.jpg";
import spacejam from "./images/spacejam.jpg";
import steph from "./images/steph.jpg";
import tacojordan from "./images/tacojordan.jpg";
import { ShoeGrid } from "./ShoeGrid";

var shoes = [
  {
    name: "Kyrie Irving Infinity",
    price: 79.95,
    image: kyrie,
  },
  {
    name: "Giannis Nike Shoes",
    price: 89.95,
    image: giannis,
  },
  {
    name: "LeBron Space Jam",
    price: 239.95,
    image: spacejam,
  },
  {
    name: "Light Blue Jordans",
    price: 129.95,
    image: jordan,
  },
  {
    name: "Steph Curry 9",
    price: 99.95,
    image: steph,
  },
  {
    name: "Damian Lillard 8",
    price: 79.95,
    image: dame,
  },
  {
    name: "KD Trey 15",
    price: 199.95,
    image: kd,
  },
  {
    name: "Taco Jay Jordans",
    price: 205.95,
    image: tacojordan,
  },
];

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1 className="header">Basketball Shoes</h1>
      </div>
      <div className="grid-container">
        <ShoeGrid shoes={shoes} />
      </div>
    </div>
  );
}

export default App;

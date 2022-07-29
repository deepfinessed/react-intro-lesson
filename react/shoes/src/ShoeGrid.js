import { ShoeCard } from "./ShoeCard";
import "./style.css";

export function ShoeGrid(props) {
  return (
    <div className="card-grid">
      {props.shoes.map((shoe) => (
        <ShoeCard
          name={shoe.name}
          price={shoe.price}
          image={shoe.image}
          key={shoe.name}
        />
      ))}
    </div>
  );
}

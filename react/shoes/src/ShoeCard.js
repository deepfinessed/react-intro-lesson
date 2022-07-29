import "./style.css";

export function ShoeCard(props) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={props.image} className="card-image" />
      </div>
      <div className="card-footer">
        <div className="item-title">{props.name}</div>
        <div className="item-price">${props.price}</div>

        <div className="button-container">
          <button
            className="purchase-button"
            type="button"
            onClick={function () {
              alert("The item has been added to your cart");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

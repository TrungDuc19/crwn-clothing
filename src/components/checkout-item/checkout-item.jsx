import "./checkout-item.scss";

const CheckoutItem = ({ name, imageUrl, price, quantity }) => (
    <div className="checkout-item checkout-row">
        <div className="image-container checkout-col">
            <img src={imageUrl} alt="item" />
        </div>
        <div className="name checkout-col">{name}</div>
        <div className="quantity checkout-col">
            {quantity}
        </div>
        <div className="price checkout-col">{price}</div>
        <div className="remove-btn checkout-col">&#10006;</div>
    </div>
)

export default CheckoutItem;
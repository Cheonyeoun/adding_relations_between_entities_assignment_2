import RatingWidget from "./RatingWidget";
import PropTypes from "prop-types";

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <img src={product.image} alt={product.name} width={150} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>⭐ Avg Rating: {product.avgRating.toFixed(1)} ({product.totalRatings})</p>
      <RatingWidget
        productId={product.id}
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;

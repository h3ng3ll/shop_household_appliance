import { SellingProduct } from "models/SellingProduct";

export default function ProductBar(product: SellingProduct) {
  return (
    <div>
      <img src={product.image} alt="" />
      <h2> {product.name}</h2>
      <p> {product.raiting}</p>
      <h2> {product.raiting}</h2>
    </div>
  );
}

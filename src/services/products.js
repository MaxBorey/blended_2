import productCollection from "../db/models/product.js";

export const getAllProducts = async () => {
  const products = await productCollection.find();
  return products;
};

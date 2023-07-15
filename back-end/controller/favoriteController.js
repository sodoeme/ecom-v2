const Favorite = require("../models/favorite");
const Product = require("../models/product");

exports.getAllFavorites = async (req, res) => {
  let favs = Favorite.find({ user: "64aebdaef4a8aee36a7587e6" });
  favs = await favs.populate("product");

  if (!favs.length) {
    return res.status(400).json({ message: "No products found" });
  }

  return res.json(favs);
};

exports.addFavorite = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(400).json({ message: "product does not exist" });
  }
  const user = "6481083f8de76baf3cd15115";
  const result = Favorite.create({ user: id, product: product.id });

  if (!result) {
    return res.status(400).json({ message: "failed to add to favs" });
  }
  res.status(201).json({ message: `Succesfully added to favs` });
};

exports.removeFavorite = async (req, res) => {
  const { id } = req.params;
  const fav = await Favorite.findById(id);
  if (!fav) {
    return res.status(400).json({ message: "not in favs" });
  }
  const result = await fav.deleteOne();

  if (!result) {
    return res.status(400).json({ message: "failed to remove from favs" });
  }

  res.status(201).json({ message: `Succesfully removed from favs` });
};

import jwt from "jsonwebtoken";
import User from "../models/auth.js";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "secret");
    let user = await User.findOne({ where: { id: decoded.id } });
    if (!user) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }
    req.user = user;
    next();
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Token topilmadi" });
    }
};

export default verifyToken;
import jwt from "jsonwebtoken";
import User from "../models/auth.js";

const selfPolice = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "secret");
        let user = await User.findOne({ where: { id: decoded.id } });
        if (!user) {
            return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
        }
        req.user = user;
        if (user.type === "admin" || user.type === "teacher") {
            next();
        } else {
            res.status(403).json({ message: "Sizda bunday ruxsat yo'q!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xatosi" });
    }

};


export default selfPolice;  

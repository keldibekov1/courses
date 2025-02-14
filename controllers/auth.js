import User from "../models/auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { totp } from "otplib";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "keldibekovotkir767@gmail.com",
    pass: "qudv ebny bvns tipt", 
  },
});

const register = async (req, res) => {
  try {
    let { surname, password, year, type, course, experience, status, email, img } = req.body;

    let existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Bu email allaqachon royxatdan otgan" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    let user = await User.create({
      surname,
      password: hashedPassword,
      year,
      type,
      course,
      experience,
      status: "pending", 
      email,
      img,
    });

    const token = jwt.sign({ email, surname, type }, "secret", { expiresIn: "1h" });

    const otp = totp.generate("secret" + email);

    await transporter.sendMail({
      to: email,
      subject: "Account activation",
      text: `http://localhost:4000/auth/activate/${token}`,
    });

    res.status(201).json({ message: "Royxatdan otildi. Emailingizni tekshiring.", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }

    if (user.status !== "active") {
      return res.status(403).json({ message: "Akkount aktiv emas! Emailingizni tekshiring." });
    }

    let compare = bcrypt.compareSync(password, user.password);
    if (!compare) {
      return res.status(401).json({ message: "Parol notogri" });
    }

    let token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const activate = async (req, res) => {
    try {
      let { token } = req.params;
      console.log("Kelayotgan token:", token);
  
      let decoded = jwt.verify(token, "secret");
      console.log("Token ochildi:", decoded);
  
      let user = await User.findOne({ where: { email: decoded.email.toLowerCase() } });
      console.log("Bazadan topilgan foydalanuvchi:", user);
  
      if (!user) {
        return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
      }
  
      let updated = await User.update({ status: "active" }, { where: { email: decoded.email } });
      console.log("Yangilash natijasi:", updated);
  
      res.status(200).json({ message: "Akkount aktiv qilindi!" });
    } catch (error) {
      console.error("Xato:", error);
      res.status(500).json({ message: "Server xatosi" });
    }
  };
  
  
  
  

export { register, login, activate };

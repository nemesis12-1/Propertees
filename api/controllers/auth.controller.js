import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";


export const register = async (req, res , next) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        let user = await User.findOne({ email, username });
        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ name, username, email, password: hashedPassword });

        // res.json(user);
        return res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        
        next(error);
   
    }
};
// controllers/userController.js
const User = require('../models/user_models');
const jwtMiddleware = require('../middleware/jwtMiddleware');


const createUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        const userExists = await User.findOne({ email });
        console.log(userExists);
        if (userExists) {
            return res.status(400).json({ message: "User with the provided email already exists" });
        }

        const newUser = new User({ name, password, email });
        await newUser.save();
        const token = jwtMiddleware.generateToken({ name });
        console.log(token)

        res.status(201).json({ message: "User created successfully", user: newUser ,token:token});
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name, password }).exec();
        console.log(user);
        if (user) {
            const token = jwtMiddleware.generateToken({ user });
            console.log(token)

            res.status(200).json({ message: "Login successful", user ,token:token});
        } else {
            res.status(404).json({ message: "User not found or incorrect password" });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal Server Error" });

    }
};

module.exports = { createUser, login };

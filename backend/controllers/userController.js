const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req,res) => {
    const { name , email , password } = req.body;
    
    const userExists = await User.findOne({ email });
    if(userExists) return res.status(400).json({ message : "User already exists" });

    const hashedPassword = await bcrypt.hash(password,8);
    const user = await User.create({ name , email , password : hashedPassword});

    res.status(201).json({ message : "User registered successfully"});
};

const loginUser = async (req,res) => {
    const { email , password } = req.body;

    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message : "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({ message : "Invalid credentials" });

    const token = jwt.sign( { id : user._id , email : user.email },process.env.JWT_SECRET , { expiresIn : "1h"});
    res.json({token});
};

module.exports = { loginUser , registerUser };
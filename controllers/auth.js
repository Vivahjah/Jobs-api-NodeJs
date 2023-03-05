const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");


const register = async(req, res) => {
    const user = await User.create({...req.body });

    const token = user.getJWT()
    res.status(StatusCodes.CREATED).json({ username: user.getName(), token });
};

const login = (req, res) => {
    res.send("Login User");
};

module.exports = { register, login };
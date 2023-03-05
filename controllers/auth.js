const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");


const register = async(req, res) => {
    const user = await User.create({...req.body });

    const token = user.getJWT()
    res.status(StatusCodes.CREATED).json({ username: user.getName(), token });
};

const login = async(req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('please provide email and password')
    }
    const user = await User.findOne({ email })
    if (!user) {
        throw new UnauthenticatedError('Invalid credentials')
    }
    const doPasswordMatch = await user.comparePassword(password)
    if (!doPasswordMatch) {
        throw new UnauthenticatedError('Incorrect password')
    }
    const token = user.getJWT()
    res.status(StatusCodes.OK).json({ username: user.getName(), token });
};

module.exports = { register, login };
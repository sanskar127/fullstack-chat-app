import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (uId, res) => {
    const token = jwt.sign({ uId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })

    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true,
        sameSite: "strict"
    })
}

export default generateTokenAndSetCookie

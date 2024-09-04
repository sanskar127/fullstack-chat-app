import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                error: "Unauthorized - no token found"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({
                error: "Unauthorized - invalid token"
            })
        }

        const user = await User.findById(decoded.uId).select("-passwd")

        if (!user) {
            return res.status(401).json({
                error: "Unauthorized - user not found"
            })
        }

        req.user = user
        next()
    } catch (err) {
        return res.status(401).json({
            error: "" + err.message
        })
    }
}

export default protectRoute

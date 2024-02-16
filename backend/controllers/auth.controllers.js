import bcrypt from "bcrypt"

import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signup = async (req, res) => {
    try {
        const { fName, lName, uName, email, passwd, cnfrmPasswd, gender } = req.body

        if (passwd !== cnfrmPasswd) {
            return res.status(400).json({
                error: "Passwords do not match"
            })
        }

        const user = await User.findOne({ uName }) || await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                error: "User already exists"
            })
        }

        // hashed password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(passwd, salt)

        // Profile Pictures
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${uName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${uName}`

        const newUser = new User({
            fName,
            lName,
            email,
            uName,
            passwd: hashedPassword,
            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()
        } else { res.status(400).json({ error: "Invalid user data" }) }

        res.status(201).json({
            _id: newUser._id,
            name: newUser.fName + " " + newUser.lName,
            uName: newUser.uName,
            email: newUser.email,
            profilePicture: newUser.profilePicture
        })
    }

    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const signin = async (req, res) => {
    try {
        const { uName, passwd } = req.body
        const user = await User.findOne({ uName })
        const checkPasswd = await bcrypt.compare(passwd, user?.passwd || "")

        if (!uName || !checkPasswd) {
            return res.status(400).json({
                error: "Invalid Username/Email and Password"
            })
        }

        generateTokenAndSetCookie(user._id, res)
        res.status(200).json({
            _id: user._id,
            name: user.fName + " " + user.lName,
            uName: user.uName,
            email: user.email,
            profilePicture: user.profilePicture
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const signout = (req, res) => {
    console.log("signout")
}


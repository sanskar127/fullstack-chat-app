import User from "../models/user.model.js"

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

        // Profile Pictures
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${uName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${uName}`

        const newUser = new User({
            fName,
            lName,
            email,
            uName,
            passwd,
            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            fName: newUser.fName,
            lName: newUser.lName,
            uName: newUser.uName,
            email: newUser.email,
            profilePicture: newUser.profilePicture
        })
    }

    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const signin = (req, res) => {
    console.log("signin")
}

export const signout = (req, res) => {
    console.log("signout")
}


import User from '../models/userModel.js';
export const loginController = async (req, res) => {
    console.log(req.body);
    const { user, password } = req.body;
    try {
        const existinguser = await User.findOne({ username: user, password });
        if (!existinguser) {
            return res.status(404).send({ success: false, message: "User not found" });
        } else {
            return res.status(200).send({ existinguser, success: true, message: "Login successful" });
        }
    } catch (err) {
        console.log("User not found: ", err);
    }
    console.log(user, password)
    res.status(200).send({ success: true, message: "Login successful" });
}

export const signupController = async (req, res) => {
    const { user, password } = req.body;
    console.log("Signup request:", user, password);  // check request

    try {
        // Save user to DB
        const newUser = new User({ username: user, password });
        await newUser.save();
        res.status(201).send({ newUser, success: true, message: "Signup successful" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ success: false, message: "Signup failed" });
    }
}
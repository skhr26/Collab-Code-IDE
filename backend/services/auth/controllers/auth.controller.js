import { getAuth } from "firebase-admin/auth";
import { app } from "../config/firebase.js";
import User from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = await getAuth(app).verifyIdToken(token);


    let user=await User.findOne({
      firebaseUid:decoded.uid,
    })

    if(!user) {
      user=await User.create({
        firebaseUid:decoded.uid,
        name:decoded.name,
        email:decoded.email,
        avatar:decoded.picture
      })
      // basically if there is no person like this then we have to create one such and then we have to add it in the db 
    }

    


    return res.json({ decodedToken });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
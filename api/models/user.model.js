import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        uniqe: true
    },
    password: {
        trype: String, 
        require: true,
    },
},{timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;
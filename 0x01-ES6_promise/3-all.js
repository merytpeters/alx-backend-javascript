import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
    return Promise.all(uploadPhoto, createUser)
}
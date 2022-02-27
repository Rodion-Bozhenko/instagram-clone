import { db } from "firebase/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import { IUser } from "interfaces/interfaces"

export const doesUsernameExist = async (username: string) => {
    const q = query(collection(db, "users"), where("username", "==", username))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.length > 0
}

export const getUserById = async (userId?: string) => {
    const q = query(collection(db, "users"), where("userId", "==", userId))
    const querySnapshot = await getDocs(q)
    const user = querySnapshot.docs.map((item) => ({
        ...(item.data() as IUser),
    }))

    return user
}

export const getSuggestedUsers = async (username: string) => {
    const q = query(collection(db, "users"), where("username", "!=", username))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
        ...(doc.data() as IUser),
    }))
}
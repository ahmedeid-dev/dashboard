import { atom } from "recoil";

interface User{
id: number;
name: string;
email: string;
status: number;
type: string;
token?: string | null;
avatar: string;
permission?:string[]
}

export const AuthAtom = atom({
    key: "AuthAtom",
    default: {
        isLoggedIn:false,
        user:{} as User,
        token:'',
        permission:[]
    }
}) 
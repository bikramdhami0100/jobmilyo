import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";



interface UserData {
    id: string;
    user: any;
}

const initialState = {
    Users: [] as UserData[]
}

export const SignupInfo = createSlice({
    name: "signupinfo",
    initialState,
    reducers: {
        userSignUpInfo: (state, action: any) => {
            console.log("this is payload " + action.payload);
            const data: UserData = {
                id: nanoid(),
                user: action.payload
            }
            state.Users.push(data);
        }
    }
})

export const { userSignUpInfo } = SignupInfo.actions
export default SignupInfo.reducer;

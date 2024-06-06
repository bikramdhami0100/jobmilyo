import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";



interface UserData {
    id: string;
    user: any;
}

const initialState = {
    Users: [] as UserData[],
    SearchContent:[] as any,
    validUserToken:[] as any,
}

export const SignupInfo = createSlice({
    name: "signupinfo",
    initialState,
    reducers: {
        userSignUpInfo: (state, action: any) => {
           
                const data: UserData = {
                    id: nanoid(),
                    user: action.payload
                }
                state.Users.push(data);
            
            


        },
        SingleUserAllInformation:(state,action:any)=>{
            console.log("this is single user data"+action.payload);
             state.Users.push(action.payload);
        },
        SearchHomeJobs:(state,action)=>{
          
             state.SearchContent.push(action.payload);
        },
        validUserToken:(state,action)=>{
          
            state.validUserToken.push(action.payload);
       }
    }
})

export const {validUserToken, userSignUpInfo,SingleUserAllInformation,SearchHomeJobs } = SignupInfo.actions
export default SignupInfo.reducer;
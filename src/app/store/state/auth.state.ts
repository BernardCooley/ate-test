export interface AuthState {
    userID: string;
    emailAddress: string;
}

export const initialState: AuthState = {
    userID: null,
    emailAddress: null
}
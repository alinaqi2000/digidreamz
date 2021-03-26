interface AuthToken {
    apiKey: string,
    refreshToken: string,
    accessToken: string,
    expirationTime: string,
}
export class User {
    constructor(
        public uid: string = "",
        public displayName: string = "",
        public photoURL: string = "",
        public email: string = "",
        public stsTokenManager: AuthToken = { apiKey: "", accessToken: "", expirationTime: "", refreshToken: "" },
    ) { }
}
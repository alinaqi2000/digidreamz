interface AuthToken {
    apiKey: string,
    refreshToken: string,
    accessToken: string,
    expirationTime: string,
}
export class Profile {
    constructor(
        public uid: string,
        public displayName: string,
        public photoURL: string,
        public email: string,
        public emailVerified: string,
        public phoneNumber: string,
        public isAnonymous: string,
        public tenantId: string,
        public apiKey: string,
        public appName: string,
        public authDomain: string,
        public redirectEventId: string,
        public lastLoginAt: string,
        public providerData: any[],
        public createdAt: string,
        public stsTokenManager: AuthToken = { apiKey: "", accessToken: "", expirationTime: "", refreshToken: "" },
    ) { }
}
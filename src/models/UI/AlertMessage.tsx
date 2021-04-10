export class AlertMessage {
    constructor(
        public type: "info" | "success" | "danger" | "warning" = 'info',
        public body: string,
        public key: number = Math.floor(Math.random() * 1000000)
    ) { }
}
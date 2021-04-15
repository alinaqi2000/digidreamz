export class ModalAction {
    constructor(
        public type: string = "",
        public name: string = "Cancel",
        public action: () => any = () => { }
    ) { }
}
export class ShowModal {
    constructor(
        public visible: boolean = false,
        public type: "action" | "alert" = "alert",
        public title: string = "",
        public content: string | JSX.Element | JSX.Element[] | null = null,
        public actions: ModalAction[] = [],
        public hasCancel: boolean = true,
    ) { }
}
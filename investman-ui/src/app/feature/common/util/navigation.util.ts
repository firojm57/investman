export const navigationConstants = {
    dashboard: "dashboard",
    earning: "earning",
    saving: "saving",
    investment: "investment",
    reports: "reports",
}

export class MenuModel {
    constructor(public name: string,
        public iconClass: string,
        public labelKey: string) {}
}
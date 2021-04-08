import { CPage } from "../models/UI/CPage";

export const updateObject = (oldObject: any, updatedProperties: any) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const getPage = (link: string, pages: CPage[]): CPage => {
    const page = pages.find((p: any) => p.link == link);
    if (!page) return pages[0];
    page.previous = window.location.pathname;
    return page;
}
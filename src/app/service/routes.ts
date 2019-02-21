import { genID } from './lib/lib';

export interface IRoute {
    slug: string;
    title: string;
    id: string;
}

export const testRoutes: IRoute[] = [
    { slug: "vitebsk", title: "Витебск", id: genID() },
    { slug: "brest", title: "Брест", id: genID() },
    { slug: "grodno", title: "Гродно", id: genID() },
    { slug: "gomel", title: "Гомель", id: genID() },
    { slug: "minsk", title: "Минск", id: genID() },
    { slug: "minskcity", title: "город Минск", id: genID() },
    { slug: "mogilev", title: "Могилев", id: genID() }
];
export default class Post {
    id: number;
    title: string;
    body: string;

    constructor(id: number, title: string, body: string) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    static convertFromObject(obj: any): Post {
        const id: number = obj.id as number;
        const title: string = obj.title as string;
        const body: string = obj.body as string;

        return new Post(id, title, body);
    }
}
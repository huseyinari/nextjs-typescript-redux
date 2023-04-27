import { SERVER_URL } from "."
import Post from "../models/Post";

const apiUrl = SERVER_URL + '/posts';

export const getPosts = async (limit?: number): Promise<Array<Post>> => {
    let url = apiUrl;
    if (limit)
        url += `?_limit=${limit}`;

    const resp = await fetch(url);
    const data = await resp.json();

    return data.map((post: any) => Post.convertFromObject(post))
}

export const getBestPost = async (): Promise<Post> => {
    let url = `${apiUrl}/100`;

    const resp = await fetch(url);
    const data = await resp.json();

    return Post.convertFromObject(data);
}

export const getFirstPopularPost = async (): Promise<Post> => {
    let url = `${apiUrl}/99`;

    const resp = await fetch(url);
    const data = await resp.json();

    return Post.convertFromObject(data);
}

export const getSecondPopularPost = async (): Promise<Post> => {
    let url = `${apiUrl}/98`;

    const resp = await fetch(url);
    const data = await resp.json();

    return Post.convertFromObject(data);
}

export const getAboutPost = async (): Promise<Post> => {
    let url = `${apiUrl}/97`;

    const resp = await fetch(url);
    const data = await resp.json();

    return Post.convertFromObject(data);
}
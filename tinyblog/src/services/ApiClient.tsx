import { DummyPost } from "../types/Types";

// export const getPosts = async () => {
//     const response = await fetch("https://dummyjson.com/posts");
//     return (await response.json()).posts as DummyPost[];
// }

export const getPosts = async () => {
    const response = await fetch("../mockData.JSON");
    return (await response.json()).posts as DummyPost[];
}
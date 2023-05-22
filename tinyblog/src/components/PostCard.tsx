import { DummyPost } from "../types/Types"


export const PostCard = (params: {post: DummyPost}) => {

    return <div className="flex flex-col justify-between max-w-sm m-5">
        <h3 className="m-2">{params.post.title}</h3>
        <p className="flex flex-grow m-2">{params.post.body}</p>
        <ul className="flex flex-wrap gap-2 m-2">{params.post.tags.map(tag => <li key={tag} className="w-fit">{tag}</li>)}</ul>
    </div>
}
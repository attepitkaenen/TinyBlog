import { useState } from "react"
import { DummyPost } from "../types/Types"
import { PostCard } from "./PostCard"

export const Section = (params: {posts: DummyPost[], tag: string}) => {
    const [ showPosts, setShowPosts ] = useState<boolean>(true);

    const ChangeState = () => {
        setShowPosts(!showPosts);
    }

    return <div className="flex m-10 flex-wrap ">
        <h1 className="w-full text-center text-lg">
            {params.tag}
            {showPosts ? <button className="ms-2" onClick={ChangeState}>↑</button> : <button className="ms-2" onClick={ChangeState}>↓</button>}
        </h1>
        {showPosts && <div className="flex flex-wrap">{params.posts.map(post => {
            if(post.tags.includes(params.tag)) {
                return <PostCard key={post.id} post={post}/>
            }
        })}</div>}
        
    </div>
}
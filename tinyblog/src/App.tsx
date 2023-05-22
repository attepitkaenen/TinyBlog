import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { DummyPost } from './types/Types'
import { getPosts } from './services/ApiClient'
import { PostCard } from './components/PostCard'
import { Section } from './components/Section'

function App() {
  const [ posts, setPosts ] = useState<DummyPost[]>([]);
  const [ tags, setTags ] = useState<string[]>([]);

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    if(posts.length !== 0) {
      PrepareTags();
    }
  }, [posts])

  const getData = async() => {
    setPosts(await getPosts()); 
  }

  const PrepareTags = () => {
    let tags : string[] = [];
    let counter = 0;
    while(tags.length < 5) {
      const tag = posts[counter].tags[0];
      if(!tags.includes(tag)) {
        tags.push(tag);
      }
      counter++;
    }
    setTags(tags);
  }

  return (
    <div className="flex flex-col content-center">
      <h1 className="text-6xl text-center">DummyPosts</h1>
      {tags.map(tag => <Section key={tag} posts={posts} tag={tag}/>)}
    </div>
)
}

export default App

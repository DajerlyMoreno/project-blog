import React, { useEffect, useState } from 'react'
import DescriptionAndAllPost from '../components/DescriptionAndAllPost'
import PostTarget from '../components/PostTarget'

export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() =>{
    try {
      const fetchPosts = async () => {
        //const rest = await fetch(`/api/post/getPosts`)
        const data = await rest.json()
        setPosts(data.posts)

      }
      fetchPosts()
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <div>
      <div className='w-full'>
        <DescriptionAndAllPost />
      </div>
        
      <div className='max-w-7xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col justify-center items-center mb-5 '>
            <h1 className='text-xl mt-10 font-semibold'>¡EXPLORA LA ULTIMO!</h1>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10'>
              {posts.map((post) =>{
                <PostTarget key = {post.id} post = {post}/>
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

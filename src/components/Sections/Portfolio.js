'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Portfolio = () => {
  const [posts, setPosts] = useState([])

  console.log(posts)

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      //   const token = process.env.INSTAGRAM_ACCESS_TOKEN // Access token from the .env file

      try {
        const response = await axios.get('/api/instagram') // Fetching from your API route
        const imagesOnly = response.data.data.filter(
          (post) => post.media_type === 'IMAGE'
        ) // Filter only image posts
        setPosts(imagesOnly)
      } catch (error) {
        console.error('Error fetching Instagram feed:', error)
      }
    }
    fetchInstagramFeed()
  }, [])

  return (
    <div className='p-8'>
      {posts.length > 0 ? (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} // Adjust the number of columns based on screen width
        >
          <Masonry gutter='16px'>
            {posts.map((post) => (
              <div key={post.id} className='instagram-post'>
                <a
                  href={post.permalink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={post.media_url}
                    alt={post.caption || 'Instagram post'}
                    style={{ width: '100%', display: 'block' }}
                  />
                </a>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      ) : (
        <p>Loading Instagram feed...</p>
      )}
    </div>
  )
}

export default Portfolio

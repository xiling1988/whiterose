// import { NextResponse } from 'next/server'
// import axios from 'axios'

// export async function GET() {
//   const token = process.env.INSTAGRAM_ACCESS_TOKEN // Securely access token from environment variables
//   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${token}&limit=25`

//   try {
//     console.log('hello from the server side')
//     const response = await axios.get(url)
//     return NextResponse.json(response.data) // Send back the data as JSON
//   } catch (error) {
//     console.error('Error fetching Instagram data:', error)
//     return NextResponse.json(
//       { error: 'Failed to fetch Instagram data' },
//       { status: 500 }
//     )
//   }
// }

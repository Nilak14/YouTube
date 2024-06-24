const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API
const REGION_CODE = 'In'
export const YOUTUBE_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=' +
  REGION_CODE +
  '&maxResults=50&key=' +
  GOOGLE_API_KEY

export const POPULAR_VIDEOS_BY_CATEGORY = (categoryId) =>
  ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${REGION_CODE}&videoCategoryId=${categoryId}&key=${GOOGLE_API_KEY}
`
export const VIDEO_CATEGORY_API = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=${REGION_CODE}&key=${GOOGLE_API_KEY}`

export const GET_VIDEO_BY_CATEGORY = (catId) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${REGION_CODE}&videoCategoryId=${catId}&maxResults=50&key=${GOOGLE_API_KEY}`
}

export const SEARCH_SUGGESTION_API =
  'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const CHANNEL_DATA_API = (channelId) =>
  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOOGLE_API_KEY}`

export const SINGLE_VIDEO_DATA_API = (videoId) =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`

export const COMMENT_API = (videoId, value) =>
  `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=${value}&videoId=${videoId}&key=${GOOGLE_API_KEY}`

export const SEARCH_VIDEO_API = (searchParam) => `
https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchParam}&key=${GOOGLE_API_KEY}
`
export const PLAYlIST_API = (playlistId) =>
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${GOOGLE_API_KEY}`

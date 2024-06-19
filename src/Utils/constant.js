const GOOGLE_API_KEY = 'AIzaSyAqdN_Y6N0hA6XVlM9WQCG6Tie6SsPLSEA'
const REGION_CODE = 'US'
export const YOUTUBE_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=' +
  REGION_CODE +
  '&maxResults=50&key=' +
  GOOGLE_API_KEY

export const VIDEO_CATEGORY_API = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=${REGION_CODE}&key=${GOOGLE_API_KEY}`

export const GET_VIDEO_BY_CATEGORY = (catId) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${REGION_CODE}&videoCategoryId=${catId}&maxResults=50&key=${GOOGLE_API_KEY}`
}

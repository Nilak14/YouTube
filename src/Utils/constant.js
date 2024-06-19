const GOOGLE_API_KEY = 'AIzaSyAqdN_Y6N0hA6XVlM9WQCG6Tie6SsPLSEA'
export const YOUTUBE_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=In&maxResults=50&key=' +
  GOOGLE_API_KEY

export const VIDEO_CATEGORY_API = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${GOOGLE_API_KEY}`

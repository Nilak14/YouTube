const formatViews = (views) => {
  if (views >= 1000000) {
    return Math.floor(views / 1000000) + 'M'
  } else if (views >= 1000) {
    return Math.floor(views / 1000) + 'k'
  }
  return views
}
export default formatViews

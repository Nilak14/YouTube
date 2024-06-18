const ShimmerCard = () => {
  return (
    <article className="w-full md:w-[450px] lg:w-[320px] border rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </article>
  )
}

export default ShimmerCard

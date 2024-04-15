
const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-4 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black text-lg p-2 px-10 rounded-md hover:bg-opacity-70"> ▶️ Play </button>
        <button className="mx-2 bg-zinc-500 text-white text-lg p-2 px-10 bg-opacity-50 rounded-md hover:bg-opacity-30"> ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
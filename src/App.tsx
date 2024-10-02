import UploadWidget from "./components/UploadWidget"
import React from "react"

const App = () => {
  return (
    <div >
      <h1 className='text-2xl font-semibold w-full text-center mt-[50px] text-white'>
         Upload Image to cloudinary
      </h1>
      
      <div >
        <UploadWidget/>
      </div>
    </div>
  )
}

export default App
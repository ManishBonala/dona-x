import React from 'react'

export const CreateCampign = () => {
  return (
    <div className='h-full bg-[#100805] flex flex-col items-center justify-center w-full py-48 relative font-primary'>
      {/* Breadcrumb */}    
      <div className=" mx-auto mb-12 self-start absolute top-36 left-24 ">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <span>Home</span>
          <span>/</span>
          <span>Create Campaign</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Create Campaign</h1>
          <p className="text-white/60 text-center text-sm max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor diam ac
            condimentum. Nisi est risus fermentum tellus id eu nam pharetra.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Title</label>
            <input
              type="text"
              placeholder="My New Campaign Description"
              className="bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Description</label>
            <textarea
              placeholder="Type here"
              className="bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
            />
          </div>

          {/* Target */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Owner</label>
            <input
              type="text"
              placeholder="eg. johnfrans"
              className="bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
            />
          </div>

          {/* Campaign Manager */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Campaign Manager</label>
            <input
              type="text"
              placeholder="eg. john greesham"
              className="bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
            />
          </div>

          {/* Values Section */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Tokens</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* First Row */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Price"
                  className="w-full bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                  <InfoIcon />
                </div>
              </div>
              <input
                type="text"
                placeholder="Quantity"
                className="w-full bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
              />
              <input
                type="text"
                placeholder="Description"
                    className="w-full bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
              />

              {/* Second Row */}
              <input
                type="text"
                placeholder="Price"
                className="w-full bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
              />
              <input
                type="text"
                placeholder="Quantity"
                className="w-full bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
              />
              <input
                type="text"
                placeholder="Description"
                className="w-full bg-transparent border border-white/60 rounded-2xl p-3 text-white focus:outline-none focus:border-white"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">
              Cover image (Image size: 1000x1000px, 5.5 card)
            </label>
                <div className="border border-dashed border-white/60 rounded-2xl p-4 flex items-center justify-center">
              <button type="button" className="text-white/60 flex items-center gap-2">
                <UploadIcon />
                UPLOAD FILE HERE
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-1/2 mx-auto bg-gradient-to-r from-[#ECA14B] to-[#E57D18] text-white py-4 rounded-full mt-6 hover:opacity-90 transition-opacity"
          >
            Save
          </button>
        </form>
      </div>
    
    </div>
  )
}

// Helper Icons Components
const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" fill="currentColor"/>
  </svg>
);

const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.585l-1.828 1.828-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 0 0 1.112-6.91 5 5 0 0 0-9.777-2.932A3.5 3.5 0 0 0 6 13.5a3.5 3.5 0 0 0 1.714 3.015v2.014A5.5 5.5 0 0 1 5.5 8.2 7 7 0 0 1 12 2z" fill="currentColor"/>
  </svg>
);

export default CreateCampign;

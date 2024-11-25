import { CircularBlur } from "../../components/CircularBlur"

export const ContactUsForm = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
        <div className="absolute top-16 -right-[0rem]">
          <CircularBlur direction="right"/>
     </div>

     <div className="absolute bottom-16 -left-[0rem]">

     <CircularBlur direction="left"/>
     </div>

    <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-4 py-16">
    

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-white text-4xl font-bold mb-4 font-primary">Get in touch</h2>
        <p className="text-white/70 max-w-md mx-auto text-center font-secondary">
          Lorem ipsum dolor sit amet consectetur. Metus dignissim mauris nisi ac condimentum. Nisi elit neque fermentum tellus in no nam pharetra.
        </p>
      </div>

      {/* Form */}
      <form className="w-full space-y-4 font-primary">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#E27613]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#E27613]"
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#E27613]"
        />

        {/* Message */}
        <textarea
          placeholder="Subject"
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A]/40 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#E27613] resize-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-full text-white font-medium transition-all"
          style={{
            background: "linear-gradient(73.91deg, #ECA14B 0%, #E57D18 100%)",
            boxShadow: "0px 2px 4px 0px #343C4429, 0px 0px 1px 0px #75838E0A"
          }}
        >
          Get Started
        </button>
      </form>
    </div>
    </div>
  )
}

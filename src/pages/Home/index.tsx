import wallet from "../../assets/Images/wallet.png";
import nft from "../../assets/Images/nft-image.png";
import sell from "../../assets/Images/sell.png";
import "./index.css"
import HeroContainer from "../../components/HeroContainer";
import image from "../../assets/Images/Gallery/img-1.png";
import { ContactUsForm } from "../Contact/ContactUsForm";
import { CircularBlur } from "../../components/CircularBlur";
import { useNavigate } from "react-router-dom";
import CampaignCard from "../Campaigns/CampignCard";

const RecentCampaigns = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full flex flex-col gap-24 pt-12">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <h1 className="text-4xl font-bold text-white text-center w-1/3 font-primary">
          Lorem ipsum dolor sit amet consectetur.
        </h1>

        <p className="text-white/80 text-center font-secondary">
          We help those who are in need
        </p>

        <div className='text-white/80 font-secondary ml-auto mr-12 cursor-pointer' onClick={() => navigate('/home/campaigns')}>
          View all
        </div>
      </div>

      <div className="flex justify-around w-[90%] mx-auto">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 mt-24 relative">
     <CircularBlur direction="left"/>
     <div className="absolute top-[20rem] -right-[0rem]">
     <CircularBlur direction="right"/>
     </div>
      <h1 className="text-5xl font-primary font-bold text-white text-center w-1/4">
        How it works!
      </h1>

      <div className="flex flex-col justify-around w-[60%] mx-auto py-24 gap-16">
        {/* Step 1 - Wallet */}
        <div className="flex gap-6 ">
          <div className="relative flex items-center justify-center">
            <img
              src={wallet}
              alt="Connect Wallet"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-primary font-bold text-[#E27613]">
              01.
            </h1>
            <h3 className="text-3xl font-secondary font-bold text-white w-[80%]">
              Setup and connect your wallet
            </h3>
            <p className="text-white/80 text-sm font-secondary">
            Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.
            
            </p>
          </div>
        </div>

        {/* Step 2 - NFT Creation */}
        <div className="flex items-center gap-6 ">
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-primary font-bold text-[#E27613]">
              02.
            </h1>
            <h3 className="text-3xl font-secondary font-bold text-white w-[80%]">
            Create your own digital artwork
            </h3>
            <p className="text-white/80 text-sm font-secondary">
            Making your first art can be easy as taking a photo of something
            you created and uploading it to the platform
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={nft}
              alt="Create NFT"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Step 3 - Sell */}
        <div className="flex  gap-6">
          <div className="relative flex items-center justify-center">
            <img
              src={sell}
              alt="Sell NFT"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-primary font-bold text-[#E27613]">
              03.
            </h1>
            <h3 className="text-3xl font-secondary font-bold text-white w-[80%]">
            Choose a platform to sell your NFT
            </h3>
            <p className="text-white/80 text-sm font-secondary">
            List your NFT for sale and watch as collectors make their offers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-8 mt-24 px-8 relative">
      <CircularBlur direction="left"/>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <h1 className="text-4xl font-bold text-white text-center w-full md:w-1/3 font-primary">
          Lorem ipsum dolor sit amet consectetur.
        </h1>

        <p className="text-white/80 text-center font-secondary">
          We help those who have no hope for the future
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Gallery Items - 8 boxes */}
          {[...Array(8)].map((_, index) => (
            <div 
              key={index}
              className="aspect-square rounded-3xl overflow-hidden transition-transform hover:scale-105 px-1"
              style={{
                background: "linear-gradient(55.39deg, #624225 29.58%, #4C2D17 70.42%)",

                // borderImageSource: "",
                // border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Placeholder for images */}
              <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden">
                {/* You can add your images here later */}
                <img src={image} alt="NFT" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative bg-[#100805] h-full">
      <HeroContainer />
      <RecentCampaigns />
      <HowItWorks />
      {/* blank div */}
      <div className="w-[60%] h-[30rem] bg-white mx-auto  mt-24">
      </div>
      <RecentCampaigns />
      <Gallery />
      <ContactUsForm />
      <div className='absolute -left-[600px]'>
            <CircularBlur direction="left"/>
      </div>
    </div>
  );
};


export default Home;

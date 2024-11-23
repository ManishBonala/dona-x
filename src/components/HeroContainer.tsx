import { HiArrowRight } from "react-icons/hi";

const CryptoCard = () => {
    return (
      <div className="w-[50%] h-fit mr-auto mt-24 ml-24 p-1">
        {/* Main Card with gradient background */}
        <div
          className="w-full h-full rounded-[36px_0px_0px_36px]"
          style={{
            background:
              "linear-gradient(90.65deg, #764725 0.88%, rgba(42, 22, 10, 0) 99.47%)",
          }}
        >
          {/* Content */}
          <div className="p-12 flex flex-col h-full">
            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="font-primary text-5xl font-bold text-textPrimary">BITCOIN</h2>
                <p className="font-primary text-2xl text-white/90">Secured digital payments</p>
                <div className="flex items-center gap-2 text-[#ECA14B]">
                  <span className="text-2xl font-primary uppercase leading-normal tracking-wider">Super rare RWA</span>
                </div>
              </div>
            </div>
  
            <p className="text-white font-secondary mt-8  text-base">
            Lorem ipsum dolor sit amet consectetur. Eu sit purus elementum pretium massa et consequat amet. Amet facilisis nibh magna sit nibh orci. Lectus a sit ac sagittis pulvinar sed risus. Maecenas sagittis et velit proin aliquet. Parturient lorem mollis amet accumsan. At risus sapien odio rhoncus risus morbi. Lobortis lectus sed suspendisse morbi elit dui. Tempus ullamcorper nullam tellus commodo dictum commodo placerat diam. Ac mauris ut amet elementum eleifend sed mattis. Nulla ut est aliquet morbi vulputate. Orci ante scelerisque sed velit nunc.
            </p>
  
            <button
              className="w-fit px-8 py-3 rounded-full flex items-center gap-2 text-white mt-12"
              style={{
                background: "linear-gradient(73.91deg, #ECA14B 0%, #E57D18 100%)",
                boxShadow: "0px 2px 4px 0px #343C4429, 0px 0px 1px 0px #75838E0A"
              }}
            >
              Create <HiArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
const HeroContainer = () => {
    return (
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/src/assets/Images/Home-Bg.png')] bg-cover bg-center bg-no-repeat" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#100805] opacity-70" />
        </div>
  
        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          {/* <CardContainer /> */}
          <CryptoCard />
        </div>
      </div>
    );
  };

export default HeroContainer;
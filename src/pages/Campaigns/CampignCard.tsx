import { useNavigate } from 'react-router-dom';
const CampaignCard = () => {
    const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/home/campaigns/single')}
      className="relative flex w-[20%] h-[16rem] p-1 shadow-2xl cursor-pointer"
      style={{
        background: "linear-gradient(184.93deg, #624225 3.51%, #4C2D17 96.03%)",
        borderRadius: "36px 16px 36px 16px", // Asymmetric border radius
        transform: "rotate(2deg)", // Slight rotation for extra effect
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: "linear-gradient(131.71deg, #221107 7%, #7A4A26 60%)",
          borderRadius: "30px 6px 30px 6px",
        }}
      >
        <div className="absolute w-36 h-36 rounded-full bg-white -top-16 left-1/2 -translate-x-1/2"></div>

        <button
          className="w-fit px-8 py-3 rounded-full flex items-center gap-2 text-white mt-12 absolute -bottom-4 left-1/2 -translate-x-1/2"
          style={{
            background: "linear-gradient(73.91deg, #ECA14B 0%, #E57D18 100%)",
            boxShadow: "0px 2px 4px 0px #343C4429, 0px 0px 1px 0px #75838E0A",
          }}
        >
          Track
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;

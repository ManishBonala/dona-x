import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import userImage from "../assets/Images/User-Avatar.png";
import connectWallet from "../hedera/features/WalletConnect";
import { CgSpinner } from "react-icons/cg";

const Topbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [wallet, setWallet] = useState<string[] | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {}, []);

  const handleNavigation = (path: string) => {
    setActiveTab(path);
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleCreateCampaign = () => {
    navigate("/home/create-campaign");
    setIsMobileMenuOpen(false);
  };

  const handleConnectWallet = () => {
    async function walletConnect() {
      try {
        setIsConnecting(true);
        setError(null);
        const result = await connectWallet(); //imported from hedera/features/WalletConnect

        if (result) {
          const [accountId, network] = result;
          setWalletConnected(true);
          setWallet([accountId, network]);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to connect wallet"
        );
      } finally {
        setIsConnecting(false);
      }
    }
    walletConnect();
  };

  const NavLinks = () => (
    <>
      <div
        onClick={() => handleNavigation("/")}
        className={`px-4 py-1 rounded-full cursor-pointer transition-colors ${
          activeTab === "/" ? "bg-white text-black" : "hover:text-opacity-80"
        }`}
      >
        Home
      </div>
      <div
        onClick={() => handleNavigation("/about")}
        className={`px-4 py-1 rounded-full cursor-pointer transition-colors ${
          activeTab === "/about"
            ? "bg-white text-black"
            : "hover:text-opacity-80"
        }`}
      >
        About Us
      </div>
      <div
        onClick={() => handleNavigation("/contact")}
        className={`px-4 py-1 rounded-full cursor-pointer transition-colors ${
          activeTab === "/contact"
            ? "bg-white text-black"
            : "hover:text-opacity-80"
        }`}
      >
        Contact Us
      </div>
    </>
  );

  return (
    <div
      className="flex justify-between items-center px-4 md:px-16 py-6 text-white backdrop-blur-[50px] absolute top-0 z-50 w-full font-primary"
      style={{
        background:
          "linear-gradient(0deg, rgba(113, 69, 35, 0.05) -81.48%, rgba(16, 8, 5, 0.25) 212.96%)"
      }}
    >
      <div
        className="text-xl md:text-2xl font-bold uppercase cursor-pointer"
        onClick={() => handleNavigation("/")}
      >
        Dona-X
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10">
        <NavLinks />
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={handleCreateCampaign}
          className="flex items-center gap-2 px-6 py-2 rounded-full"
          style={{
            background: "linear-gradient(73.91deg, #ECA14B 0%, #E57D18 100%)",
            boxShadow: "0px 2px 4px 0px #343C4429, 0px 0px 1px 0px #75838E0A"
          }}
        >
          Create <HiArrowRight />
        </button>

        <BsBell className="text-2xl cursor-pointer" />

       

        
          <div className="relative" ref={profileRef}>
            <div 
              className="rounded-full bg-white flex items-center justify-center gap-2 pr-2 cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <img src={userImage} alt="" className="w-8 h-8" />
              <FiChevronDown className="text-black text-lg" />
            </div>

            {/* Dropdown Modal */}
            {isProfileOpen && (
              walletConnected ? (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 text-black">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-primary">Account ID</p>
                    <p className="text-xs text-gray-600 font-secondary">{wallet?.[0]}</p>
                  </div>
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-primary">Network</p>
                    <p className="text-xs text-gray-600 font-secondary">{wallet?.[1]}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setWalletConnected(false);
                      setWallet(null);
                      setIsProfileOpen(false);
                      localStorage.removeItem('hederaAccountId');
                      localStorage.removeItem('hederaNetwork');
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <div
                  className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 text-black "
                  onClick={handleConnectWallet}
                >
                  {isConnecting ? (
                    <div className="flex items-center gap-2 px-6 py-2">
                      <CgSpinner className="animate-spin text-xl" />
                      <span>Connecting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer">
                      Connect Wallet
                    </div>
                  )}
                </div>
              )
            )}
          </div>
      
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <IoMdClose /> : <RiMenu3Line />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#100805] md:hidden py-4 px-4 flex flex-col gap-4 h-screen">
          <NavLinks />
          <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
            <button
              onClick={handleCreateCampaign}
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-full"
              style={{
                background:
                  "linear-gradient(73.91deg, #ECA14B 0%, #E57D18 100%)",
                boxShadow:
                  "0px 2px 4px 0px #343C4429, 0px 0px 1px 0px #75838E0A"
              }}
            >
              Create <HiArrowRight />
            </button>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-white flex items-center justify-center gap-2 pr-2">
                  <img src={userImage} alt="" className="w-8 h-8" />
                  <FiChevronDown className="text-black text-lg" />
                </div>
              </div>
              <BsBell className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;

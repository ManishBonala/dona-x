import React from 'react'
import HeroContainer from '../../components/HeroContainer'
import { ContactUsForm } from '../Contact/ContactUsForm'
import bitCoinImg from '../../assets/Images/bitcoinImage.png';

const MainCampignCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto p-6 font-primary my-24">
      {/* Left Section - Image and Campaign Details */}
      <div className="flex-1">
        {/* Image */}
        <div className="w-full h-[400px]  overflow-hidden mb-8">
          <img 
            src={bitCoinImg} 
            alt="Bitcoin Campaign" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Campaign Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-white/60 text-sm"># 758</span>
          </div>

          <h1 className="text-3xl font-bold text-white">
            Education Needs For Change<br />
            The World.
          </h1>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-white/60 text-sm">
              <span>42% Donated</span>
              <span>Goal: 100%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#ECA14B] to-[#E57D18]" 
                style={{ width: '42%' }}
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-white/60 font-secondary">
            <p>
              Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45C, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p>
              Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45C, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Tokens */}
      <div className="w-full md:w-[300px] space-y-4">
        <h2 className="text-white text-xl font-semibold mb-6">Tokens</h2>
        
        {/* Token Cards */}
        {[1, 2, 3, 4].map((index) => (
          <div 
            key={index}
            className="bg-gradient-to-b from-[#372A19] to-[#241B10] rounded-2xl p-4 space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-white">¥500</span>
              <span className="text-white/60">(10x)</span>
            </div>
            <p className="text-white/60 text-sm">
              Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45C, making it over 2000 years old.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CastInfo = () => {
  const castData = {
    owner: "John",
    manager: "Hari",
    managerNumber: "9876543210",
    managerEmail: "hari@gmail.com"
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mb-12">
      <div className="space-y-4">
        <h2 className="text-white text-xl font-semibold mb-6 font-primary">Cast</h2>
        
        <div className="space-y-3">
          <div className="flex gap-4">
            <span className="text-white/60 font-primary w-32">Owner :</span>
            <span className="text-white font-primary">{castData.owner}</span>
          </div>
          
          <div className="flex gap-4">
            <span className="text-white/60 font-primary w-32">Manager :</span>
            <span className="text-white font-primary">{castData.manager}</span>
          </div>
          
          <div className="flex gap-4">
            <span className="text-white/60 font-primary w-32">Manager Number :</span>
            <span className="text-white font-primary">{castData.managerNumber}</span>
          </div>
          
          <div className="flex gap-4">
            <span className="text-white/60 font-primary w-32">Manager E-Mail :</span>
            <span className="text-white font-primary">{castData.managerEmail}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TokenTable = () => {
  const tableData = [
    { tokens: '¥500', total: '50', selled: '40', remaining: '10' },
    { tokens: '¥1000', total: '100', selled: '80', remaining: '20' },
    { tokens: '¥2000', total: '200', selled: '120', remaining: '80' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mb-24">
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-6 text-left text-white font-primary font-normal">
                Tokens/Quantity
              </th>
              <th className="py-4 px-6 text-left text-white font-primary font-normal">
                Total
              </th>
              <th className="py-4 px-6 text-left text-white font-primary font-normal">
                Sold
              </th>
              <th className="py-4 px-6 text-left text-white font-primary font-normal">
                Remaining
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {tableData.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-white/10 text-white/60"
              >
                <td className="py-4 px-6 font-primary">{row.tokens}</td>
                <td className="py-4 px-6 font-primary">{row.total}</td>
                <td className="py-4 px-6 font-primary">{row.selled}</td>
                <td className="py-4 px-6 font-primary">{row.remaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const SingleCampaign = () => {
  return (
    <div className='h-full bg-[#100805]'>
      <HeroContainer/>
      <MainCampignCard/>
      <CastInfo />
      <TokenTable />
      <ContactUsForm/>    
    </div>
  )
}

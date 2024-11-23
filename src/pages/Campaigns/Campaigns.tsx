import React from 'react'
import HeroContainer from '../../components/HeroContainer'
import { ContactUsForm } from '../Contact/ContactUsForm'
import CampaignCard from "../Campaigns/CampignCard";
import { useNavigate } from 'react-router-dom';

const RecentCampaigns = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full flex flex-col gap-24 py-24">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <h1 className="text-4xl font-bold text-white text-center w-1/3 font-primary">
          Lorem ipsum dolor sit amet consectetur.
        </h1>

        <p className="text-white/80 text-center font-secondary">
          We help those who are in need
        </p>
      </div>

      <div className="flex justify-around w-[90%] mx-auto flex-wrap gap-4 gap-y-36">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>
    </div>
  );
};

export const Campaigns = () => {
  return (
    <div className='h-full bg-[#100805] flex flex-col items-center justify-center w-full relative font-primary'>
        <HeroContainer/>
        <RecentCampaigns/>
        <ContactUsForm/>
    </div>
  )
}

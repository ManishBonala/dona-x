import HeroContainer from "../../components/HeroContainer";
import { ContactUsForm } from "./ContactUsForm";

const Contact = () => {
  return <div className='h-full bg-[#100805] flex flex-col items-center justify-center w-full relative font-primary'>
    <HeroContainer/>
    <ContactUsForm />
  </div>;
};

export default Contact;

import { Link } from 'react-router-dom';
import { CircularBlur } from './CircularBlur';
// You can replace these with your actual social icons
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about' },
  { name: 'Get Accredited', path: '/accredited' },
  { name: 'Our Causes', path: '/causes' },
  { name: 'Gallery', path: '/gallery' },
];

const urgentCauses = [
  { name: 'Education', progress: 53, image: '/path-to-image' },
  { name: 'Health', progress: 53, image: '/path-to-image' },
  { name: 'Human rights', progress: 53, image: '/path-to-image' },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#100805] border-t border-[#E27613] relative overflow-hidden">
       
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Quick links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Contact us</h3>
            <div className="space-y-3 text-white/70">
              <p>123 Demo st. xxyyzz</p>
              <p>xxyyzz 84020</p>
              <p>mail@example.com</p>
              <p>+91781111190</p>
            </div>
          </div>

          {/* Urgent Causes */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Urgent Causes</h3>
            <div className="space-y-4">
              {urgentCauses.map((cause) => (
                <div key={cause.name} className="flex items-center gap-4">
                  {/* Image Placeholder */}
                  <div className="w-12 h-12 bg-white/10 rounded-lg"></div>
                  <div className="flex-1">
                    <p className="text-white mb-1">{cause.name}</p>
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full">
                      <div 
                        className="h-full bg-[#E27613] rounded-full"
                        style={{ width: `${cause.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-white/70 text-sm mt-1">{cause.progress}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright and Policies */}
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
            <Link to="/privacy" className="hover:text-white">Privacy & Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            <span className="hidden md:inline">|</span>
            <span>© Wielabs Tech 2024 copyright all right reserved</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {[FaFacebook, FaYoutube, FaTwitter, FaInstagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

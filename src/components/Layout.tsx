import Topbar from "./Topbar";
import { Footer } from "./Footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      <Topbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
import "./Navbar.scss";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <div className="flex flex-row absolute z-20 top-8 justify-between items-center w-[95%]">
      <div className="title text-[--primary]">
        <h1 className="font-bold overflow-y-hidden">Anthrope <i class="ri-gemini-fill"></i></h1>
      </div>
      <div className="nav-links flex flex-row gap-8">
        <div className="nav-links-sec text-3xl bg-[--primary] flex items-center gap-6 px-6 py-3 rounded-full">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About Us
          </a>
          <a href="#" className="nav-link">
            Reviews
          </a>
          <a href="#" className="nav-link">
            Contact Us
          </a>
        </div>
        <div className="nav-link-book text-3xl bg-[--primary] flex items-center gap-6 px-6 py-3 rounded-full">
          <a href="#" className="nav-book">
            Book a room
          </a>
        </div>
        <div className="menu text-4xl bg-[--primary] flex items-center gap-6 px-6 py-3 rounded-full">
          <button>
            <i class="ri-menu-3-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

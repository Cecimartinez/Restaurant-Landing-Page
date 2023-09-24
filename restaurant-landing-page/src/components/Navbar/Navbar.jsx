import Logo from "../../assets/foodie.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className="w-20 h-20 mt-2" />
      </div>

      <div className="navbar-links-container  text-black ">
        <a href="#" className="text-lg font-semibold">Home</a>
        <a href="#" className="text-lg font-semibold">About</a>
        <a href="#" className="text-lg font-semibold">Testimonials</a>
        <a href="#" className="text-lg font-semibold">Contact</a>
        <a href="#" className="text-2xl">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </a>
        <button className="primary-button bg-white border rounded-3xl text-lg font-semibold px-4">
          Bookings Now
        </button>
      </div>
    </nav>
  );
};

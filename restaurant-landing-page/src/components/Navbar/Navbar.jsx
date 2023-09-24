import Logo from "../../assets/foodie.png";

export const Navbar = () => {
  return (
    <>

      <nav class="flex items-center justify-between">
        <div class=" nav-logo-container ">
          <img src={Logo} alt="" className="w-20 h-20 mt-2" />

        </div>

        <div className="navbar-links-container text-black">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a>
          <a href="">
            <span className="material-symbols-outlined text-2xl ">
              shopping_cart
            </span>
          </a>
          <button className="primary-button bg-white outline-none border-none rounded-3xl text-lg cursor-pointer font-semibold">Bookings Now</button>
        </div>
      </nav>
    </>
  )
}
import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from "../../assets/foodie.png";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuOptions = [
    {
      text: "Nosotros",
      target: "about",
    },
    {
      text: "Cómo Funciona",
      target: "work",
    },
    {
      text: "Testimonios",
      target: "testimonials",
    },
    {
      text: "Contacto",
      target: "contact",
    },
  ];

  const pedidosYaUrl = "https://www.pedidosya.com.ar/?sem_tracker=20571694544&pycat=googlesearch&cmp=&ag=pedidos%20ya%20%28bm%29&kwd=pedidos%20ya&mt=b&net=g&dev=c&sitelink=&gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu0kGCVXeNAlOGjGxNec9o_vjXaWrXETPrCRC7u7IbyJHS0Ebn6txw4aAoCuEALw_wcB";
  const handlePedidosYaClick = () => {
    window.open(pedidosYaUrl, '_blank');
  };

  return (
    <nav className="flex items-center justify-between">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className="w-20 h-20 mt-2" />
      </div>

      <div className="navbar-links-container text-black">
        {!isMobile ? (
          <>
            <Link to="about" smooth={true} duration={500} className="text-base font-semibold cursor-pointer mx-2 my-1 hover:text-gray-600">Nosotros</Link>
            <Link to="work" smooth={true} duration={500} className="text-base font-semibold cursor-pointer mx-2 -y1 hover:text-gray-600">Cómo Funciona</Link>
            <Link to="testimonials" smooth={true} duration={500} className="text-base font-semibold cursor-pointer mx-2 my-1 hover:text-gray-300">Testimonios</Link>
            <Link to="contact" smooth={true} duration={500} className="text-base font-semibold cursor-pointer mx-2 my-1 hover:text-gray-300">Contacto</Link>
          </>
        ) : (
          <>
            <button className="ml-2 hamburger-icon h-10 w-14 " onClick={() => setOpenMenu(!openMenu)}>
              <span className="block bg-black w-10 h-1 m-1 hamburger-line"></span>
              <span className="block bg-black w-10 h-1 m-1 hamburger-line"></span>
              <span className="block bg-black w-10 h-1 m-1 hamburger-line"></span>
            </button>
            {openMenu && (
              <div className="mobile-menu flex transition-all py-7 ease-in-out duration-300 flex-col top-0 right-0 mr-4 bg-white rounded-lg shadow-lg animate-slide-down">
                {menuOptions.map((item) => (
                  <Link key={item.text} to={item.target} smooth={true} duration={500} onClick={() => setOpenMenu(false)}>
                    <p className="text-base font-semibold cursor-pointer px-4 py-2 hover:text-gray-500">{item.text}</p>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </nav>
  );
};

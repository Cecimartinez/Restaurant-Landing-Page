import BannerImage from '../../assets/home-banner-image.png';
import BannerImageBg from '../../assets/home-banner-background.png';
import Logo from '../../assets/foodie.png';

import { ImageComponent, Button } from '../../components';

export const Home = () => {
  const pedidosYaUrl = 'https://www.pedidosya.com.ar/?sem_tracker=20571694544&pycat=googlesearch&cmp=&ag=pedidos%20ya%20%28bm%29&kwd=pedidos%20ya&mt=b&net=g&dev=c&sitelink=&gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu0kGCVXeNAlOGjGxNec9o_vjXaWrXETPrCRC7u7IbyJHS0Ebn6txw4aAoCuEALw_wcB';

  const handlePedidosYaClick = () => {
    window.open(pedidosYaUrl, '_blank');
  };

  return (
    <div name="home" className="home-container">
      <div className="home-banner-container relative flex pt-2">
        <div className="home-bannerImage-container absolute">
          <ImageComponent
            alt="Banner Background"
            src={BannerImageBg}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="home-text-section flex-col flex mt-24 z-10">

          <div className="nav-logo-container my-4 ">
            <img src={Logo} alt="Logo" className="w-20 h-20 " />
          </div>
          <h1 className="primary-heading text-3xl text-[#4c4c4c] font-bold max-w-xl">
            Tu comida favorita, fresca y lista para disfrutar.
          </h1>
          <p className="primary-text text-[#6a6a6a] font-medium text-base my-6 max-w-md">
            Nuestros chefs se encargan de todas las tareas de preparación, como pelar, cortar y marinar, para que puedas degustar una comida elaborada.
          </p>
          <div>
            <Button
              onClick={handlePedidosYaClick}
              label="Ordenar Ahora"
              className="secondary-button bg-[#fe9e0d] outline-none border-none py-4 px-9 rounded-3xl text-lg cursor-pointer font-semibold text-white flex items-center justify-center transition-all hover:bg-[#e48f0f]"
            >
              <span className="material-symbols-outlined ml-3 text-2xl">
                arrow_right_alt
              </span>
            </Button>

          </div>

        </div>
        <div className="home-image-section flex-1 max-w-xl mt-10 z-0">
          <ImageComponent
            src={BannerImage}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

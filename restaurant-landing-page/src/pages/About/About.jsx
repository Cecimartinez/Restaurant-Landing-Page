import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/food-about.png";
import { ImageComponent } from "../../components";
import { Button } from "../../components/Button/Button";

export const About = () => {
  const pedidosYaUrl = "https://www.pedidosya.com.ar/?sem_tracker=20571694544&pycat=googlesearch&cmp=&ag=pedidos%20ya%20%28bm%29&kwd=pedidos%20ya&mt=b&net=g&dev=c&sitelink=&gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu0kGCVXeNAlOGjGxNec9o_vjXaWrXETPrCRC7u7IbyJHS0Ebn6txw4aAoCuEALw_wcB";

  const handlePedidosYaClick = () => {
    window.open(pedidosYaUrl, '_blank');
  };

  return (
    <div name="about" className="about-section-container mt-40 relative flex items-center justify-between">
      <div className="about-background-image-container absolute">
        <ImageComponent src={AboutBackground} className="max-w-full" />
      </div>
      <div className="about-section-image-container">
        <ImageComponent src={AboutBackgroundImage} className="max-w-full" />
      </div>
      <div className="about-section-text-container flex-1 justify-center flex flex-col max-w-lg">
        <p className="primary-subheading text-yellow-500 font-semibold text-lg">Acerca de Nosotros</p>
        <h1 className="primary-heading font-bold text-2xl text-[#4c4c4c]">
          La Comida es una Parte Importante de una Dieta Equilibrada
        </h1>
        <p className="primary-text  text-[#6a6a6a] font-medium my-2">
          En nuestro restaurante, creemos que la comida es una parte fundamental de una vida saludable y equilibrada. Utilizamos ingredientes frescos y de alta calidad para preparar cada plato con amor y cuidado.
        </p>
        <div className="about-buttons-container mt-4 flex">
          <Button
            onClick={handlePedidosYaClick}
            className="secondary-button bg-[#fe9e0d] outline-none border-none py-3 px-8 rounded-3xl text-lg cursor-pointer font-semibold text-white flex items-center justify-center transition-all hover:bg-[#e48f0f]"
            label="Más información" />
        </div>
      </div>
    </div>
  );
};

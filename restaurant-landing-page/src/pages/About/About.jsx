import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/food-about.png";

export const About = () => {
  return (
    <div name="about" className="about-section-container mt-40 relative flex items-center justify-between">
      <div className="about-background-image-container absolute">
        <img src={AboutBackground} alt="" className="max-w-full" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" className="max-w-full" />
      </div>
      <div className="about-section-text-container flex-1 justify-center flex flex-col max-w-lg">
        <p className="primary-subheading text-yellow-500 font-semibold text-lg">Acerca de Nosotros</p>
        <h1 className="primary-heading font-bold text-2xl text-gray-700">
          La Comida es una Parte Importante de una Dieta Equilibrada
        </h1>
        <p className="primary-text text-gray-600 font-medium">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text text-gray-600 font-medium">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container mt-8 flex">
          <button className="secondary-button bg-[#fe9e0d] outline-none border-none py-4 px-9 rounded-3xl text-lg cursor-pointer font-semibold text-white flex items-center justify-center transition-all hover:bg-[#e48f0f]">Aprender Más</button>
        </div>
      </div>
    </div>
  );
};

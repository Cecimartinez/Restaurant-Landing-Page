import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/food-about.png";

export const About = () => {
  return (
    <div className="about-section-container mt-72 relative flex items-center justify-between">
      <div className="about-background-image-container absolute">
        <img src={AboutBackground} alt="" className="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container flex-1 justify-center flex flex-col">
        <p className="primary-subheading text-[#fe9e0d] font-semibold text-lg">About</p>
        <h1 className="primary-heading ">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container mt-8 flex">
          <button className="secondary-button bg-[#fe9e0d] outline-none border-none py-4 px-9 rounded-3xl text-lg cursor-pointer font-semibold text-white flex  items-center justify-center transition-all hover:bg-[#e48f0f]">Learn More</button>

        </div>
      </div>
    </div>
  )
}
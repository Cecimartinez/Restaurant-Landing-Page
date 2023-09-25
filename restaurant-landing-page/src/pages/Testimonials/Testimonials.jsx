import ProfilePic from "../../assets/john-doe-image.png";
import { ImageComponent } from "../../components/ImageComponent/ImageComponent";

const starIcons = Array(5).fill(
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M9.70834 36.6667L12.4167 24.9583L3.33334 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70834 36.6667Z" fill="#FE9E0D" />
  </svg>
);

export const Testimonials = () => {
  return (
    <div name="testimonials" className="work-section-wrapper mt-14">
      <div className="work-section-top flex justify-center items-center flex-col">
        <p className="primary-subheading text-center text-yellow-500 font-semibold text-lg">Testimonios</p>
        <h1 className="primary-heading font-bold text-2xl text-[#4c4c4c] my-4">Lo que dicen nuestros clientes</h1>
        <p className="primary-text text-center  font-medium text-[#6a6a6a]">
          Nuestros clientes comparten sus experiencias con nosotros. Aquí tienes algunas de sus opiniones:
        </p>
      </div>
      <div className="testimonial-section-bottom bg-white mt-8 flex py-6 px-8 items-center justify-center rounded-3xl flex-col text-center max-w-2xl my-2 mx-auto">
        <ImageComponent src={ProfilePic} alt="" className="max-w-md" />
        <p className="font-medium text-[#6a6a6a] text-base my-2 mx-0 max-w-lg">
          "He disfrutado cada comida que he pedido. La calidad de los ingredientes y el sabor son excepcionales."
        </p>
        <div className="testimonials-stars-container flex text-yellow-500 text-2xl my-0 mx-1 space-x-2">
          {starIcons.map((star, index) => (
            <div key={index}>{star}</div>
          ))}
        </div>
        <h3 className="mt-6">John Doe</h3>
      </div>
    </div>
  );
};

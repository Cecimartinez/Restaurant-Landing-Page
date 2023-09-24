import ProfilePic from "../../assets/john-doe-image.png";

export const Testimonials = () => {
  return (
  
      <div className="work-section-wrapper mt-14" name="testimonials">
        <div className="work-section-top flex justify-center items-center flex-col">
          <p className="primary-subheading text-center text-yellow-500 font-semibold text-lg">Testimonial</p>
          <h1 className="primary-heading font-bold text-2xl text-gray-700 my-4">What They Are Saying</h1>
          <p className="primary-text text-center">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="testimonial-section-bottom bg-white mt-8 flex py-6 px-8 items-center justify-center rounded-3xl flex-col text-center max-w-2xl my-2 mx-auto">
          <img src={ProfilePic} alt="" className="max-w-md" />
          <p className="font-semibold text-gray-700 text-lg my-2 mx-0 max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonials-stars-container flex text-yellow-500 text-2xl my-0 mx-1 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70834 36.6667L12.4167 24.9583L3.33334 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70834 36.6667Z" fill="#FE9E0D" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70834 36.6667L12.4167 24.9583L3.33334 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70834 36.6667Z" fill="#FE9E0D" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70834 36.6667L12.4167 24.9583L3.33334 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70834 36.6667Z" fill="#FE9E0D" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70834 36.6667L12.4167 24.9583L3.33334 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70834 36.6667Z" fill="#FE9E0D" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M9.70834 36.6667L12.4167 24.9583L3.33334 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70834 36.6667Z" fill="#FE9E0D" />
            </svg>

          </div>
          <h2 className="mt-6">John Doe</h2>
        </div>
      </div>
  );
};

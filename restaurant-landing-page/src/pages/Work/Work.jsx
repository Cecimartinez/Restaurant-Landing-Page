import PickMeals from "../../assets/pick-meals-image.png";
import ChooseMeals from "../../assets/choose-image.png";
import DeliveryMeals from "../../assets/delivery-image.png";

export const Work = ()=>{
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper mt-14">
      <div className="work-section-top flex justify-center items-center flex-col">
        <p className="primary-subheading text-center  text-[#fe9e0d] font-semibold text-lg">Work</p>
        <h1 className="primary-heading font-bold text-2xl text-gray-700 my-4  ">How It Works</h1>
        <p className="primary-text text-center">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom  mt-20 flex justify-center items-center flex-wrap">
        {workInfoData.map((data) => (
          <div className="work-section-info py-8 px-4 my-4 mx-8 bg-white flex flex-col justify-center items-center rounded-2xl text-[#505050] " key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p className="text-center  flex flex-1 items-center font-semibold">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
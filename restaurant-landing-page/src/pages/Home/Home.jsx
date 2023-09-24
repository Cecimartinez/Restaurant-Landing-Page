export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container relative flex pt-3">
        <div className="home-bannerImage-container absolute top-24 right-40 z-20 max-w-2xl">
          <img src="" alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading text-3xl text-[#4c4c4c] max-w-xl">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text text-[#6a6a6a] text-base my-6 max-w-md">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button bg-[#fe9e0d] outline-none border-none py-4 px-9 rounded-3xl text-lg cursor-pointer font-semibold text-white flex  items-center justify-center transition-all hover:bg-[#e48f0f]">
            Order Now
            <span class="material-symbols-outlined ml-3 text-2xl">
              arrow_right_alt
            </span>
          </button>
        </div>
        <div className="home-image-section flex-1 max-w-xl">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}
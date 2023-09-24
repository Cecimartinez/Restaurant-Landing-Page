export const Contact = () => {
  return (
    <div name="contact" className="contact-page-wrapper flex flex-col items-center justify-center my-24 mx-0">
      <h1 className="primary-heading max-w-4xl text-3xl font-bold text-gray-700">¿Tienes alguna pregunta en mente?</h1>
      <h1 className="primary-heading text-3xl font-bold text-gray-700">Permítenos ayudarte</h1>
      <div className="contact-form-container bg-white w-full flex mt-12 items-center p-4 rounded-3xl">
        <input
          type="email"
          placeholder="tucorreo@gmail.com"
          className="flex-1 h-full border-none outline-none text-lg"
        />
        <button
          type="submit"
          className="secondary-button bg-[#fe9e0d] outline-none border-none py-4 px-10 rounded-3xl text-lg cursor-pointer font-semibold text-white flex items-center justify-center transition-all hover:bg-[#e48f0f]"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

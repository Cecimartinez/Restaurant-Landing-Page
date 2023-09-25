import { Button } from "../../components/Button/Button";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div name="contact" className="contact-page-wrapper flex flex-col items-center justify-center my-24 mx-0">
      <p className="primary-subheading text-yellow-500 font-semibold text-lg">Contacto</p>
      <h1 className="primary-heading max-w-4xl  font-bold text-2xl text-[#4c4c4c]">
        ¿Tienes alguna pregunta en mente?
      </h1>
      <h2 className="primary-heading text-xl mt-2 font-bold  text-[#4c4c4c]">
        Permítenos ayudarte
      </h2>
      <form
        action="#"
        method="POST"
        className="contact-form-container bg-white w-full flex mt-12 items-center p-4 rounded-3xl"
      >
        <input
          type="email"
          name="email"
          placeholder="tucorreo@gmail.com"
          className="flex-1 h-full border-none outline-none text-lg"
          required
        />
        <Button
          type={"submit"}
          value={"Send"}
          onClick={handleSubmit}
          className="secondary-button bg-[#fe9e0d] outline-none border-none py-4 px-10 rounded-3xl text-lg cursor-pointer font-semibold text-white flex items-center justify-center transition-all hover:bg-[#e48f0f]"
          label="Enviar"
        />
      </form>
    </div>
  );
};

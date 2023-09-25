import React from 'react';
import PickMeals from '../../assets/pick-meals-image.png';
import ChooseMeals from '../../assets/choose-image.png';
import DeliveryMeals from '../../assets/delivery-image.png';
import { ImageComponent } from '../../components';

export const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: 'Elegir Comidas',
      text: 'Nuestro menú ofrece una amplia selección de deliciosas comidas. Puedes explorar y elegir tus platos favoritos para tu próxima comida.',
    },
    {
      image: ChooseMeals,
      title: 'Elegir Con Qué Frecuencia',
      text: 'Tú decides cuándo y cuántas veces deseas recibir tus comidas. Nos adaptamos a tu horario y necesidades.',
    },
    {
      image: DeliveryMeals,
      title: 'Entregas Rápidas',
      text: 'Nuestro equipo se encarga de preparar y entregar tus comidas de manera rápida y segura.',
    },
  ];

  return (
    <div name="work" className="work-section-wrapper mt-20">
      <div className="work-section-top flex justify-center items-center flex-col">
        <p className="primary-subheading text-center text-yellow-500 font-semibold text-lg">Cómo Funciona</p>
        <h1 className="primary-heading font-bold text-2xl text-[#4c4c4c] my-2">Descubre Nuestro Proceso</h1>
        <p className="primary-text text-center text-[#6a6a6a] font-medium text-base">
          En Foofie, hemos simplificado el proceso de pedidos de comidas para que sea conveniente y rápido. Descubre cómo funciona a continuación.
        </p>
      </div>
      <div className="work-section-bottom mt-10 flex justify-center items-center flex-wrap">
        {workInfoData.map((data) => (
          <div className="work-section-info py-8 px-4 my-4 mx-8 bg-white flex flex-col justify-center items-center rounded-2xl text-[#4c4c4c]" key={data.title}>
            <div className="info-boxes-img-container flex justify-center items-center">
              <ImageComponent src={data.image} alt={data.title} className="max-w-md my-1" />
            </div>
            <h3 className='font-bold '>{data.title}</h3>
            <p className="text-center justify-center flex flex-1 items-center text-[#6a6a6a] font-medium text-sm">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

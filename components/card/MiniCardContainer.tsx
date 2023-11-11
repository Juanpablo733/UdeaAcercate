import { MiniCard } from './MiniCard';

interface MiniCardContainerI2 {
  data: {
    id: string,
    // tag: string,
    tag: "Deportivo" | "Cultural" | "Academico",
    author: {
      name: string,
      image: string,
    }
    title: string,
    image: string,
    date: string,
    minutes: string,
    hours: string,
    day: string,
    month: string,
    year: string,
    attendeesCount: number,
  }[];
}



const MiniCardConteiner = ({ data }: MiniCardContainerI2) => {
  return (
    <div className='  grid grid-cols-2 gap-4 justify-items-center" style="grid-auto-rows: 1fr;' >
      {data.map((item) => {
        // let etiqueta = item.tag.toUpperCase();
        return (
          <MiniCard
            key={item.id}
            id={item.id}
            nombre={item.author.name}
            titulo={item.title}
            asistentes={item.attendeesCount}
            tipo={item.tag}
            fecha={item.date}
            minutes={item.minutes}
            hours={item.hours}
            day={item.day}
            month={item.month}
            year={item.year}
            imagenAutor={item.author.image}
          />
        );
      })}
    </div>
  );
};
// const MiniCardConteiner = ({data}: MiniCardConteinerI) => {
//   return (
//         <div className='  grid grid-cols-2 gap-4 justify-items-center" style="grid-auto-rows: 1fr;' >
//             {data.map((item) => {
//               return (
//                 <MiniCard
//                   key={item.id}
//                   nombre={item.nombre}
//                   titulo={item.titulo}
//                   asistentes={item.asistentes}
//                   tipo={item.tipo}
//                   fecha={item.fecha}
//                 />
//               );
//             })}
//         </div>
//   );
// };


export { MiniCardConteiner };
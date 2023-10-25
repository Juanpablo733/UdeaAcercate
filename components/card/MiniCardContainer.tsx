import { MiniCard } from './MiniCard';

interface MiniCardConteinerI {
  data: {
    id: string,
    nombre: string,
    titulo: string,
    asistentes: number,
    tipo: "Deportivo" | "Cultural" | "Academico",
    fecha: string,
  }[];
}



const MiniCardConteiner = ({data}: MiniCardConteinerI) => {
  return (
        <div className='  grid grid-cols-2 gap-4 justify-items-center" style="grid-auto-rows: 1fr;' >
            {data.map((item) => {
              return (
                <MiniCard
                  key={item.id}
                  nombre={item.nombre}
                  titulo={item.titulo}
                  asistentes={item.asistentes}
                  tipo={item.tipo}
                  fecha={item.fecha}
                />
              );
            })}
        </div>
  );
};


export { MiniCardConteiner };
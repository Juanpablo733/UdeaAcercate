interface SeedEvent {
    nombre: string;
    titulo: string;
    asistentes: number;
    tipo: IType;
    fecha: string;
    descripcion: string;
    images: string[];
    // tags: string[];
}

export type IType = 'Deportivo' | 'Académico' | 'Cultural';

interface SeedData {
    events: SeedEvent[],
}


export const initialData: SeedData = {
    events: [
        {   
            nombre: "Santiago Bedoya",
            titulo: "Evento de fútbol",
            asistentes: 5,
            tipo: "Deportivo",
            fecha: "10/10/2023",
            descripcion: "Torneo de fútbol en el aeropuerto, llega con tus amigos y disfruta",
            images: ['evento1.png'],
        },
        {   
            nombre: "Santiago Bedoya",
            titulo: "Evento de basket",
            asistentes: 8,
            tipo: "Deportivo",
            fecha: "20/10/2023",
            descripcion: "Torneo de voley en el coliseo, llega con tus amigos y disfruta",
            images: ['evento1.png'],
        },
        {   
            nombre: "Juan Pablo Bedoya",
            titulo: "Evento de Rap",
            asistentes: 2,
            tipo: "Cultural",
            fecha: "5/10/2023",
            descripcion: "Torneo de freestyle en el aeropuerto, llega con tus amigos y disfruta",
            images: ['evento1.png'],
        },
        {   
            nombre: "Juan Pablo Bedoya",
            titulo: "Monitoria de lógica de programación",
            asistentes: 3,
            tipo: "Académico",
            fecha: "12/10/2023",
            descripcion: "Monitoría de lógica, llega con tus amigos y aprende",
            images: ['evento1.png'],
        },
    ]
};

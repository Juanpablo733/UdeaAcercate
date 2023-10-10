
export interface IMinEvent {
    nombre: string;
    titulo: string;
    asistentes: number;
    tipo: IType;
    fecha: string;
}
export interface IEvent {
    nombre: string;
    titulo: string;
    asistentes: number;
    tipo: IType;
    fecha: string;
    descripcion: string;
}
export type IType = 'Deportivo' | 'Académico' | 'Cultural';

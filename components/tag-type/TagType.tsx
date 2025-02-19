import React from 'react'

interface TypesProps {
    type: "Deportivo" | "Cultural" | "Academico" | "Noticia";
}
// interface TypesProps {
//     type: any;
// }

const TYPES = {
    Deportivo: {
        label: "Deportivo",
        color: "var(--blue-mid)",
    },
    Cultural: {
        label: "Cultural",
        color: "var(--green-little)",
    },
    Academico: {
        label: "Academico",
        color: "var(--blue-dark)",
    },
    Noticia: {
        label: "Noticia",
        color: "var(--violet-oficial)",
    },
};

const TagType = ({type} : TypesProps) => {
    // const {label, color} = TYPES[type];
    // let tipo = type.charAt(0).toUpperCase();
    // let aux = '';
    // if (tipo==='Deportivo'){
    //     aux = 'Deportivo'
    // } else if(tipo === 'Academico'){
    //     aux = 'Academico'
    // } else {
    //     aux = 'Cultural'
    // }
    const {label, color} = TYPES[type];
    const style = {
        color: "white",
        border: '1px solid black',
        borderRadius: "9px",
        backgroundColor: `${color}`,
        padding: "2px 5px",
        fontSize: "bold",
      };
      return <span style={style}>{label}</span>;
}

export {TagType};
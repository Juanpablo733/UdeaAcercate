import zIndex from '@mui/material/styles/zIndex';
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
        color: "var(--complementary)",
    },
    Cultural: {
        label: "Cultural",
        color: "var(--secondary)",
    },
    Academico: {
        label: "Academico",
        color: "var(--tertiary)",
    },
    Noticia: {
        label: "Noticia",
        color: "var(--violet-oficial)",
    },
};

const TagType = ({ type }: TypesProps) => {
    const { label, color } = TYPES[type];
    return (
        <div className={`px-4 py-1 bg-[var(--tag-color)] w-fit absolute after:absolute after:top-1/2 after:right-[-16px] after:-translate-y-1/2 after:border-y-[16px] after:border-l-[16px] after:border-transparent after:border-l-[var(--tag-color)]`}
        style={{ "--tag-color": color } as React.CSSProperties}>
            <span className='font-bold italic text-white'>{label}</span>
        </div>
    );
}

export { TagType };
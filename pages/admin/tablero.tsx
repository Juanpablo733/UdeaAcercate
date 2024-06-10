import PrivateLayout from "@/layouts/PrivateLayout";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdAnalytics, MdFlag, MdOutlineFlag, MdSentimentVerySatisfied } from "react-icons/md";

export default function Tablero() {
    return (
        <PrivateLayout isAdminPage={true}>
            <title>
                Administrar | UdeAcercate
            </title>
            <div className="h-screen w-full grid grid-cols-1  sm:grid-cols-2 justify-items-center pt-24 gap-8 p-8 Yellow-little">
                <Link
                    className='InfoProfile justify-center gap-6'
                    href={"/admin/roles"}
                >
                    <span className='text-xl font-extrabold text-[var(--green-hard)]'>

                        Usuarios
                    </span>
                    <CgProfile className='h-16 w-16 text-[var(--green-hard)]' />

                </Link>
                <Link className='InfoProfile justify-center'
                    href={"/admin/reportes"}
                >
                    <span className='text-xl font-extrabold text-[var(--green-hard)]'>

                        Reportes
                    </span>
                    <MdOutlineFlag className='h-16 w-16 text-[var(--green-hard)]' />
                </Link>
                <Link className='InfoProfile justify-center'
                    href={"/admin/analisis-eventos"}
                >
                    <span className='text-xl font-extrabold text-[var(--green-hard)]'>

                        Análisis de eventos
                    </span>
                    <MdAnalytics className='h-16 w-16 text-[var(--green-hard)]' />

                </Link>
                <Link className='InfoProfile justify-center'
                    href={"/admin/analisis-sentimientos"}
                >
                    <span className='text-xl font-extrabold text-[var(--green-hard)]'>

                        Análisis de sentimientos
                    </span>
                    <MdSentimentVerySatisfied className='h-16 w-16 text-[var(--green-hard)]' />
                </Link>
            </div>
        </PrivateLayout>
    )
}
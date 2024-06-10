import PrivateLayout from "@/layouts/PrivateLayout";
import Link from "next/link";

export default function Tablero() {
    return (
        <PrivateLayout isAdminPage={true}>
            <div className="h-screen w-full grid grid-cols-2 pt-24 gap-8 p-8">
                <Link
                    className="bg-green-500 hover:bg-green-700 text-center"
                    href={"/admin/roles"}
                >
                    Usuarios
                </Link>
                <Link className="bg-green-500 hover:bg-green-700 text-center"
                    href={"/admin/reportes"}
                >
                    Reportes
                </Link>
                <Link className="bg-green-500 hover:bg-green-700 text-center"
                    href={"/admin/analisis-eventos"}
                >
                    Análisis de eventos
                </Link>
                <Link className="bg-green-500 hover:bg-green-700 text-center"
                    href={"/admin/analisis-sentimientos"}
                >
                    Análisis de sentimientos
                </Link>
            </div>
        </PrivateLayout>
    )
}
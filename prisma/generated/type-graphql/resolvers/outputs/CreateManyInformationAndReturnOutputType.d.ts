import { CreateManyInformationAndReturnOutputTypeAuthorArgs } from "./args/CreateManyInformationAndReturnOutputTypeAuthorArgs";
import { User } from "../outputs/User";
export declare class CreateManyInformationAndReturnOutputType {
    id: string;
    authorId: string | null;
    title: string;
    description: string;
    date: Date;
    image: string | null;
    tag: "Deportivo" | "Academico" | "Cultural" | "Noticia";
    hashtags: string[] | null;
    official: boolean;
    author: User | null;
    getAuthor(root: CreateManyInformationAndReturnOutputType, args: CreateManyInformationAndReturnOutputTypeAuthorArgs): User | null;
}

import { InformationCreatehashtagsInput } from "../inputs/InformationCreatehashtagsInput";
export declare class InformationCreateManyAuthorInput {
    id?: string | undefined;
    title: string;
    description: string;
    date?: Date | undefined;
    image?: string | undefined;
    tag: "Deportivo" | "Academico" | "Cultural" | "Noticia";
    hashtags?: InformationCreatehashtagsInput | undefined;
    official?: boolean | undefined;
}

import { EventCreatehashtagsInput } from "../inputs/EventCreatehashtagsInput";
export declare class EventCreateManyAuthorInput {
    id?: string | undefined;
    title: string;
    description: string;
    place: string;
    date: Date;
    image?: string | undefined;
    tag: "Deportivo" | "Academico" | "Cultural";
    hashtags?: EventCreatehashtagsInput | undefined;
}

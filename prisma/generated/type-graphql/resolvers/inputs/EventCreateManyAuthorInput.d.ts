import { EventCreatehashtagsInput } from "../inputs/EventCreatehashtagsInput";
export declare class EventCreateManyAuthorInput {
    id?: string | undefined;
    title: string;
    description: string;
    place: string;
    date: Date;
    image?: string | undefined;
    tag: "deportivo" | "academico" | "cultural";
    hashtags?: EventCreatehashtagsInput | undefined;
}

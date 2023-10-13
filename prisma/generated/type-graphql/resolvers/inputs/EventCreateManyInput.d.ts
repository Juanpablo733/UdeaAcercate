import { EventCreatehashtagsInput } from "../inputs/EventCreatehashtagsInput";
export declare class EventCreateManyInput {
    id?: string | undefined;
    title: string;
    description: string;
    place: string;
    date: Date;
    image?: string | undefined;
    tag: "deportivo" | "academico" | "cultural";
    authorId: string;
    hashtags?: EventCreatehashtagsInput | undefined;
}

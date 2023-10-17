import { AttendeeCreateNestedManyWithoutEventInput } from "../inputs/AttendeeCreateNestedManyWithoutEventInput";
import { CommentCreateNestedManyWithoutEventInput } from "../inputs/CommentCreateNestedManyWithoutEventInput";
import { EventCreatehashtagsInput } from "../inputs/EventCreatehashtagsInput";
export declare class EventCreateWithoutAuthorInput {
    id?: string | undefined;
    title: string;
    description: string;
    place: string;
    date: Date;
    image?: string | undefined;
    tag: "deportivo" | "academico" | "cultural";
    hashtags?: EventCreatehashtagsInput | undefined;
    comments?: CommentCreateNestedManyWithoutEventInput | undefined;
    attendees?: AttendeeCreateNestedManyWithoutEventInput | undefined;
}

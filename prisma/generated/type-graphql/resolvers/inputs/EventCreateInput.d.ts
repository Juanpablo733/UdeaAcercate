import { AttendeeCreateNestedManyWithoutEventInput } from "../inputs/AttendeeCreateNestedManyWithoutEventInput";
import { CommentCreateNestedManyWithoutEventInput } from "../inputs/CommentCreateNestedManyWithoutEventInput";
import { EventCreatehashtagsInput } from "../inputs/EventCreatehashtagsInput";
import { UserCreateNestedOneWithoutEventsCreatedInput } from "../inputs/UserCreateNestedOneWithoutEventsCreatedInput";
export declare class EventCreateInput {
    id?: string | undefined;
    title: string;
    description: string;
    place: string;
    date: Date;
    image?: string | undefined;
    tag: "Deportivo" | "Academico" | "Cultural";
    hashtags?: EventCreatehashtagsInput | undefined;
    author: UserCreateNestedOneWithoutEventsCreatedInput;
    comments?: CommentCreateNestedManyWithoutEventInput | undefined;
    attendees?: AttendeeCreateNestedManyWithoutEventInput | undefined;
}

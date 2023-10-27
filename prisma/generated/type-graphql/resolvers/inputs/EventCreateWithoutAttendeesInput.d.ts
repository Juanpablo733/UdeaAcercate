import { CommentCreateNestedManyWithoutEventInput } from "../inputs/CommentCreateNestedManyWithoutEventInput";
import { EventCreatehashtagsInput } from "../inputs/EventCreatehashtagsInput";
import { UserCreateNestedOneWithoutEventsCreatedInput } from "../inputs/UserCreateNestedOneWithoutEventsCreatedInput";
export declare class EventCreateWithoutAttendeesInput {
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
}

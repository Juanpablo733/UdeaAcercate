import { AttendeeCreateNestedManyWithoutEventInput } from "../inputs/AttendeeCreateNestedManyWithoutEventInput";
import { EventCreatehashtagsInput } from "../inputs/EventCreatehashtagsInput";
import { UserCreateNestedOneWithoutEventsCreatedInput } from "../inputs/UserCreateNestedOneWithoutEventsCreatedInput";
export declare class EventCreateWithoutCommentsInput {
    id?: string | undefined;
    title: string;
    description: string;
    place: string;
    date: Date;
    image?: string | undefined;
    tag: "Deportivo" | "Academico" | "Cultural";
    hashtags?: EventCreatehashtagsInput | undefined;
    author: UserCreateNestedOneWithoutEventsCreatedInput;
    attendees?: AttendeeCreateNestedManyWithoutEventInput | undefined;
}

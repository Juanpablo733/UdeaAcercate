import { AttendeeCreateNestedManyWithoutEventInput } from "../inputs/AttendeeCreateNestedManyWithoutEventInput";
import { UserCreateNestedOneWithoutEventsCreatedInput } from "../inputs/UserCreateNestedOneWithoutEventsCreatedInput";
export declare class EventCreateWithoutInfoInput {
    id?: string | undefined;
    place: string;
    author: UserCreateNestedOneWithoutEventsCreatedInput;
    attendees?: AttendeeCreateNestedManyWithoutEventInput | undefined;
}

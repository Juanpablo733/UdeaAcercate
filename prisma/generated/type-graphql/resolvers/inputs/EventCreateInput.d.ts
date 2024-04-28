import { AttendeeCreateNestedManyWithoutEventInput } from "../inputs/AttendeeCreateNestedManyWithoutEventInput";
import { InformationCreateNestedOneWithoutEventInput } from "../inputs/InformationCreateNestedOneWithoutEventInput";
import { UserCreateNestedOneWithoutEventsCreatedInput } from "../inputs/UserCreateNestedOneWithoutEventsCreatedInput";
export declare class EventCreateInput {
    id?: string | undefined;
    place: string;
    author: UserCreateNestedOneWithoutEventsCreatedInput;
    info: InformationCreateNestedOneWithoutEventInput;
    attendees?: AttendeeCreateNestedManyWithoutEventInput | undefined;
}

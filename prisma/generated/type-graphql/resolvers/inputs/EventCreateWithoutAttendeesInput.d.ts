import { InformationCreateNestedOneWithoutEventInput } from "../inputs/InformationCreateNestedOneWithoutEventInput";
import { UserCreateNestedOneWithoutEventsCreatedInput } from "../inputs/UserCreateNestedOneWithoutEventsCreatedInput";
export declare class EventCreateWithoutAttendeesInput {
    id?: string | undefined;
    place: string;
    author: UserCreateNestedOneWithoutEventsCreatedInput;
    info: InformationCreateNestedOneWithoutEventInput;
}

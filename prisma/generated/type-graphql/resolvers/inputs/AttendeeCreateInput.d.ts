import { EventCreateNestedOneWithoutAttendeesInput } from "../inputs/EventCreateNestedOneWithoutAttendeesInput";
import { UserCreateNestedOneWithoutAttendeesInput } from "../inputs/UserCreateNestedOneWithoutAttendeesInput";
export declare class AttendeeCreateInput {
    dateTime?: Date | undefined;
    user: UserCreateNestedOneWithoutAttendeesInput;
    event: EventCreateNestedOneWithoutAttendeesInput;
}

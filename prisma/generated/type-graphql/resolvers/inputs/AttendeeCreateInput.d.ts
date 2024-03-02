import { EventCreateNestedOneWithoutAttendeesInput } from "../inputs/EventCreateNestedOneWithoutAttendeesInput";
import { UserCreateNestedOneWithoutAttendeesInput } from "../inputs/UserCreateNestedOneWithoutAttendeesInput";
export declare class AttendeeCreateInput {
    user: UserCreateNestedOneWithoutAttendeesInput;
    event: EventCreateNestedOneWithoutAttendeesInput;
}

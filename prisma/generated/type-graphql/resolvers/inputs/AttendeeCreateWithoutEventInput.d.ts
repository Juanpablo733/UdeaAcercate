import { UserCreateNestedOneWithoutAttendeesInput } from "../inputs/UserCreateNestedOneWithoutAttendeesInput";
export declare class AttendeeCreateWithoutEventInput {
    dateTime?: Date | undefined;
    user: UserCreateNestedOneWithoutAttendeesInput;
}

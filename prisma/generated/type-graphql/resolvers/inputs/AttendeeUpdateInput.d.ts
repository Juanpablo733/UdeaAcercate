import { EventUpdateOneRequiredWithoutAttendeesNestedInput } from "../inputs/EventUpdateOneRequiredWithoutAttendeesNestedInput";
import { UserUpdateOneRequiredWithoutAttendeesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAttendeesNestedInput";
export declare class AttendeeUpdateInput {
    user?: UserUpdateOneRequiredWithoutAttendeesNestedInput | undefined;
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput | undefined;
}

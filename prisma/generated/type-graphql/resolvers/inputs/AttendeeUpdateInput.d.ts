import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EventUpdateOneRequiredWithoutAttendeesNestedInput } from "../inputs/EventUpdateOneRequiredWithoutAttendeesNestedInput";
import { UserUpdateOneRequiredWithoutAttendeesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAttendeesNestedInput";
export declare class AttendeeUpdateInput {
    dateTime?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAttendeesNestedInput | undefined;
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput | undefined;
}

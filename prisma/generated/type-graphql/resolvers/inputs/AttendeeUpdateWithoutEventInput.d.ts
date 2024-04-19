import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAttendeesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAttendeesNestedInput";
export declare class AttendeeUpdateWithoutEventInput {
    dateTime?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAttendeesNestedInput | undefined;
}

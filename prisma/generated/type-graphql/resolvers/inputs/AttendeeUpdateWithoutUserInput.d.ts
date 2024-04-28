import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EventUpdateOneRequiredWithoutAttendeesNestedInput } from "../inputs/EventUpdateOneRequiredWithoutAttendeesNestedInput";
export declare class AttendeeUpdateWithoutUserInput {
    dateTime?: DateTimeFieldUpdateOperationsInput | undefined;
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput | undefined;
}

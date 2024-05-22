import { AttendeeUpdateManyWithoutEventNestedInput } from "../inputs/AttendeeUpdateManyWithoutEventNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutEventsCreatedNestedInput } from "../inputs/UserUpdateOneRequiredWithoutEventsCreatedNestedInput";
export declare class EventUpdateWithoutInfoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    place?: StringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutEventsCreatedNestedInput | undefined;
    attendees?: AttendeeUpdateManyWithoutEventNestedInput | undefined;
}

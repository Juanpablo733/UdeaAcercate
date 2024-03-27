import { AttendeeUpdateManyWithoutEventNestedInput } from "../inputs/AttendeeUpdateManyWithoutEventNestedInput";
import { InformationUpdateOneRequiredWithoutEventNestedInput } from "../inputs/InformationUpdateOneRequiredWithoutEventNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutEventsCreatedNestedInput } from "../inputs/UserUpdateOneRequiredWithoutEventsCreatedNestedInput";
export declare class EventUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    place?: StringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutEventsCreatedNestedInput | undefined;
    info?: InformationUpdateOneRequiredWithoutEventNestedInput | undefined;
    attendees?: AttendeeUpdateManyWithoutEventNestedInput | undefined;
}

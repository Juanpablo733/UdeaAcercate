import { AttendeeUpdateManyWithoutEventNestedInput } from "../inputs/AttendeeUpdateManyWithoutEventNestedInput";
import { InformationUpdateOneRequiredWithoutEventNestedInput } from "../inputs/InformationUpdateOneRequiredWithoutEventNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EventUpdateWithoutAuthorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    place?: StringFieldUpdateOperationsInput | undefined;
    info?: InformationUpdateOneRequiredWithoutEventNestedInput | undefined;
    attendees?: AttendeeUpdateManyWithoutEventNestedInput | undefined;
}

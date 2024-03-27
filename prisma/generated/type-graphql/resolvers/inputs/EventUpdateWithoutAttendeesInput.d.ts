import { InformationUpdateOneRequiredWithoutEventNestedInput } from "../inputs/InformationUpdateOneRequiredWithoutEventNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutEventsCreatedNestedInput } from "../inputs/UserUpdateOneRequiredWithoutEventsCreatedNestedInput";
export declare class EventUpdateWithoutAttendeesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    place?: StringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutEventsCreatedNestedInput | undefined;
    info?: InformationUpdateOneRequiredWithoutEventNestedInput | undefined;
}

import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EventUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/EventUpdateOneRequiredWithoutCommentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CommentUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    dateTime?: DateTimeFieldUpdateOperationsInput | undefined;
    event?: EventUpdateOneRequiredWithoutCommentsNestedInput | undefined;
}

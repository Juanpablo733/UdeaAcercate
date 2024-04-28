import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InformationUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/InformationUpdateOneRequiredWithoutCommentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CommentUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    dateTime?: DateTimeFieldUpdateOperationsInput | undefined;
    info?: InformationUpdateOneRequiredWithoutCommentsNestedInput | undefined;
}

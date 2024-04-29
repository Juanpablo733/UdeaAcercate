import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSentimentFieldUpdateOperationsInput } from "../inputs/EnumSentimentFieldUpdateOperationsInput";
import { EnumTagFieldUpdateOperationsInput } from "../inputs/EnumTagFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CommentSentimentUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    sentiment?: EnumSentimentFieldUpdateOperationsInput | undefined;
    confidence?: FloatFieldUpdateOperationsInput | undefined;
    commentTag?: EnumTagFieldUpdateOperationsInput | undefined;
    dateTime?: DateTimeFieldUpdateOperationsInput | undefined;
}

import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ReportUpdateInput {
    userId?: StringFieldUpdateOperationsInput | undefined;
    eventId?: StringFieldUpdateOperationsInput | undefined;
    reason?: StringFieldUpdateOperationsInput | undefined;
    dateTime?: DateTimeFieldUpdateOperationsInput | undefined;
}

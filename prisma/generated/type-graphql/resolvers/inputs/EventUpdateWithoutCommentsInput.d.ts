import { AttendeeUpdateManyWithoutEventNestedInput } from "../inputs/AttendeeUpdateManyWithoutEventNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTagFieldUpdateOperationsInput } from "../inputs/EnumTagFieldUpdateOperationsInput";
import { EventUpdatehashtagsInput } from "../inputs/EventUpdatehashtagsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutEventsCreatedNestedInput } from "../inputs/UserUpdateOneRequiredWithoutEventsCreatedNestedInput";
export declare class EventUpdateWithoutCommentsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    place?: StringFieldUpdateOperationsInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    tag?: EnumTagFieldUpdateOperationsInput | undefined;
    hashtags?: EventUpdatehashtagsInput | undefined;
    author?: UserUpdateOneRequiredWithoutEventsCreatedNestedInput | undefined;
    attendees?: AttendeeUpdateManyWithoutEventNestedInput | undefined;
}

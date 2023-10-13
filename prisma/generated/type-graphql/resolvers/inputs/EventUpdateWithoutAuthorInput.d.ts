import { AttendeeUpdateManyWithoutEventNestedInput } from "../inputs/AttendeeUpdateManyWithoutEventNestedInput";
import { CommentUpdateManyWithoutEventNestedInput } from "../inputs/CommentUpdateManyWithoutEventNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTagFieldUpdateOperationsInput } from "../inputs/EnumTagFieldUpdateOperationsInput";
import { EventUpdatehashtagsInput } from "../inputs/EventUpdatehashtagsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EventUpdateWithoutAuthorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    place?: StringFieldUpdateOperationsInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    tag?: EnumTagFieldUpdateOperationsInput | undefined;
    hashtags?: EventUpdatehashtagsInput | undefined;
    comments?: CommentUpdateManyWithoutEventNestedInput | undefined;
    attendees?: AttendeeUpdateManyWithoutEventNestedInput | undefined;
}

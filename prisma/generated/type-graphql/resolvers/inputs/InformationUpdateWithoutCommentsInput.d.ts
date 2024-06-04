import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTagFieldUpdateOperationsInput } from "../inputs/EnumTagFieldUpdateOperationsInput";
import { EventUpdateOneWithoutInfoNestedInput } from "../inputs/EventUpdateOneWithoutInfoNestedInput";
import { InformationUpdatehashtagsInput } from "../inputs/InformationUpdatehashtagsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutNewsCreatedNestedInput } from "../inputs/UserUpdateOneWithoutNewsCreatedNestedInput";
export declare class InformationUpdateWithoutCommentsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    tag?: EnumTagFieldUpdateOperationsInput | undefined;
    hashtags?: InformationUpdatehashtagsInput | undefined;
    official?: BoolFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneWithoutNewsCreatedNestedInput | undefined;
    event?: EventUpdateOneWithoutInfoNestedInput | undefined;
}

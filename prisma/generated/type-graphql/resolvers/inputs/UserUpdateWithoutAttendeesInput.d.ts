import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { CommentUpdateManyWithoutUserNestedInput } from "../inputs/CommentUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EventUpdateManyWithoutAuthorNestedInput } from "../inputs/EventUpdateManyWithoutAuthorNestedInput";
import { InformationUpdateManyWithoutAuthorNestedInput } from "../inputs/InformationUpdateManyWithoutAuthorNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProfileUpdateOneWithoutUserNestedInput } from "../inputs/ProfileUpdateOneWithoutUserNestedInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutAttendeesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    profile?: ProfileUpdateOneWithoutUserNestedInput | undefined;
    eventsCreated?: EventUpdateManyWithoutAuthorNestedInput | undefined;
    comments?: CommentUpdateManyWithoutUserNestedInput | undefined;
    accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;
    sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;
    newsCreated?: InformationUpdateManyWithoutAuthorNestedInput | undefined;
}

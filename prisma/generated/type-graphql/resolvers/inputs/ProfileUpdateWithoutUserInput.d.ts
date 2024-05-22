import { NullableEnumCampusFieldUpdateOperationsInput } from "../inputs/NullableEnumCampusFieldUpdateOperationsInput";
import { NullableEnumUserTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumUserTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProfileUpdatesocialLinksInput } from "../inputs/ProfileUpdatesocialLinksInput";
export declare class ProfileUpdateWithoutUserInput {
    faculty?: NullableStringFieldUpdateOperationsInput | undefined;
    career?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | undefined;
    campus?: NullableEnumCampusFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    hobbies?: NullableStringFieldUpdateOperationsInput | undefined;
    socialLinks?: ProfileUpdatesocialLinksInput | undefined;
}

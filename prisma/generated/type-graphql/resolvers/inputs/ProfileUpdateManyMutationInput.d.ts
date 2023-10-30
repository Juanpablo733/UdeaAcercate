import { NullableEnumCampusFieldUpdateOperationsInput } from "../inputs/NullableEnumCampusFieldUpdateOperationsInput";
import { NullableEnumUserTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumUserTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProfileUpdatehobbiesInput } from "../inputs/ProfileUpdatehobbiesInput";
import { ProfileUpdatesocialLinksInput } from "../inputs/ProfileUpdatesocialLinksInput";
export declare class ProfileUpdateManyMutationInput {
    faculty?: NullableStringFieldUpdateOperationsInput | undefined;
    career?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | undefined;
    campus?: NullableEnumCampusFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    hobbies?: ProfileUpdatehobbiesInput | undefined;
    socialLinks?: ProfileUpdatesocialLinksInput | undefined;
}

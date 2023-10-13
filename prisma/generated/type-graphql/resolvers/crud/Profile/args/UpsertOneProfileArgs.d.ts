import { ProfileCreateInput } from "../../../inputs/ProfileCreateInput";
import { ProfileUpdateInput } from "../../../inputs/ProfileUpdateInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";
export declare class UpsertOneProfileArgs {
    where: ProfileWhereUniqueInput;
    create: ProfileCreateInput;
    update: ProfileUpdateInput;
}

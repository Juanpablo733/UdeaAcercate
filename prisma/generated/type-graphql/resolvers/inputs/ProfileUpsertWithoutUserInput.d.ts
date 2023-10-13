import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileUpdateWithoutUserInput } from "../inputs/ProfileUpdateWithoutUserInput";
import { ProfileWhereInput } from "../inputs/ProfileWhereInput";
export declare class ProfileUpsertWithoutUserInput {
    update: ProfileUpdateWithoutUserInput;
    create: ProfileCreateWithoutUserInput;
    where?: ProfileWhereInput | undefined;
}

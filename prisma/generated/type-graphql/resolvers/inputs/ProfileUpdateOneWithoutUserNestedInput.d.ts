import { ProfileCreateOrConnectWithoutUserInput } from "../inputs/ProfileCreateOrConnectWithoutUserInput";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileUpdateToOneWithWhereWithoutUserInput } from "../inputs/ProfileUpdateToOneWithWhereWithoutUserInput";
import { ProfileUpsertWithoutUserInput } from "../inputs/ProfileUpsertWithoutUserInput";
import { ProfileWhereInput } from "../inputs/ProfileWhereInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";
export declare class ProfileUpdateOneWithoutUserNestedInput {
    create?: ProfileCreateWithoutUserInput | undefined;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | undefined;
    upsert?: ProfileUpsertWithoutUserInput | undefined;
    disconnect?: ProfileWhereInput | undefined;
    delete?: ProfileWhereInput | undefined;
    connect?: ProfileWhereUniqueInput | undefined;
    update?: ProfileUpdateToOneWithWhereWithoutUserInput | undefined;
}

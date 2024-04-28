import { UserCreateOrConnectWithoutProfileInput } from "../inputs/UserCreateOrConnectWithoutProfileInput";
import { UserCreateWithoutProfileInput } from "../inputs/UserCreateWithoutProfileInput";
import { UserUpdateToOneWithWhereWithoutProfileInput } from "../inputs/UserUpdateToOneWithWhereWithoutProfileInput";
import { UserUpsertWithoutProfileInput } from "../inputs/UserUpsertWithoutProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutProfileNestedInput {
    create?: UserCreateWithoutProfileInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | undefined;
    upsert?: UserUpsertWithoutProfileInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutProfileInput | undefined;
}

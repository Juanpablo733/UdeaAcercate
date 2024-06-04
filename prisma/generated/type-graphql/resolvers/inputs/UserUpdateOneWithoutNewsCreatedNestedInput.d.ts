import { UserCreateOrConnectWithoutNewsCreatedInput } from "../inputs/UserCreateOrConnectWithoutNewsCreatedInput";
import { UserCreateWithoutNewsCreatedInput } from "../inputs/UserCreateWithoutNewsCreatedInput";
import { UserUpdateToOneWithWhereWithoutNewsCreatedInput } from "../inputs/UserUpdateToOneWithWhereWithoutNewsCreatedInput";
import { UserUpsertWithoutNewsCreatedInput } from "../inputs/UserUpsertWithoutNewsCreatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutNewsCreatedNestedInput {
    create?: UserCreateWithoutNewsCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutNewsCreatedInput | undefined;
    upsert?: UserUpsertWithoutNewsCreatedInput | undefined;
    disconnect?: UserWhereInput | undefined;
    delete?: UserWhereInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutNewsCreatedInput | undefined;
}

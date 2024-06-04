import { UserCreateOrConnectWithoutNewsCreatedInput } from "../inputs/UserCreateOrConnectWithoutNewsCreatedInput";
import { UserCreateWithoutNewsCreatedInput } from "../inputs/UserCreateWithoutNewsCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutNewsCreatedInput {
    create?: UserCreateWithoutNewsCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutNewsCreatedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}

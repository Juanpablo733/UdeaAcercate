import { UserCreateOrConnectWithoutEventsCreatedInput } from "../inputs/UserCreateOrConnectWithoutEventsCreatedInput";
import { UserCreateWithoutEventsCreatedInput } from "../inputs/UserCreateWithoutEventsCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutEventsCreatedInput {
    create?: UserCreateWithoutEventsCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutEventsCreatedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}

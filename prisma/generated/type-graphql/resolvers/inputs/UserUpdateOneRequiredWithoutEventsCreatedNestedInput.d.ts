import { UserCreateOrConnectWithoutEventsCreatedInput } from "../inputs/UserCreateOrConnectWithoutEventsCreatedInput";
import { UserCreateWithoutEventsCreatedInput } from "../inputs/UserCreateWithoutEventsCreatedInput";
import { UserUpdateToOneWithWhereWithoutEventsCreatedInput } from "../inputs/UserUpdateToOneWithWhereWithoutEventsCreatedInput";
import { UserUpsertWithoutEventsCreatedInput } from "../inputs/UserUpsertWithoutEventsCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutEventsCreatedNestedInput {
    create?: UserCreateWithoutEventsCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutEventsCreatedInput | undefined;
    upsert?: UserUpsertWithoutEventsCreatedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutEventsCreatedInput | undefined;
}

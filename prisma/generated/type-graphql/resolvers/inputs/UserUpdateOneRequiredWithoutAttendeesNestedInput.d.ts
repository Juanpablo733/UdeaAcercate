import { UserCreateOrConnectWithoutAttendeesInput } from "../inputs/UserCreateOrConnectWithoutAttendeesInput";
import { UserCreateWithoutAttendeesInput } from "../inputs/UserCreateWithoutAttendeesInput";
import { UserUpdateToOneWithWhereWithoutAttendeesInput } from "../inputs/UserUpdateToOneWithWhereWithoutAttendeesInput";
import { UserUpsertWithoutAttendeesInput } from "../inputs/UserUpsertWithoutAttendeesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAttendeesNestedInput {
    create?: UserCreateWithoutAttendeesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAttendeesInput | undefined;
    upsert?: UserUpsertWithoutAttendeesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutAttendeesInput | undefined;
}

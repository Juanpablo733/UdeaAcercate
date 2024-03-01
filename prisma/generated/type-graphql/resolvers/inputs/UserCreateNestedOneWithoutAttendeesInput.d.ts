import { UserCreateOrConnectWithoutAttendeesInput } from "../inputs/UserCreateOrConnectWithoutAttendeesInput";
import { UserCreateWithoutAttendeesInput } from "../inputs/UserCreateWithoutAttendeesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAttendeesInput {
    create?: UserCreateWithoutAttendeesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAttendeesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}

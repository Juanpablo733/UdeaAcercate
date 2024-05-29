import { UserCreateWithoutAttendeesInput } from "../inputs/UserCreateWithoutAttendeesInput";
import { UserUpdateWithoutAttendeesInput } from "../inputs/UserUpdateWithoutAttendeesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutAttendeesInput {
    update: UserUpdateWithoutAttendeesInput;
    create: UserCreateWithoutAttendeesInput;
    where?: UserWhereInput | undefined;
}

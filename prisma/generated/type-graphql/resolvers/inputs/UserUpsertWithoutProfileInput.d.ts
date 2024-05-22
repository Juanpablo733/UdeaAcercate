import { UserCreateWithoutProfileInput } from "../inputs/UserCreateWithoutProfileInput";
import { UserUpdateWithoutProfileInput } from "../inputs/UserUpdateWithoutProfileInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutProfileInput {
    update: UserUpdateWithoutProfileInput;
    create: UserCreateWithoutProfileInput;
    where?: UserWhereInput | undefined;
}

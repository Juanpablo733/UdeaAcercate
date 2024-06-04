import { UserCreateWithoutNewsCreatedInput } from "../inputs/UserCreateWithoutNewsCreatedInput";
import { UserUpdateWithoutNewsCreatedInput } from "../inputs/UserUpdateWithoutNewsCreatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutNewsCreatedInput {
    update: UserUpdateWithoutNewsCreatedInput;
    create: UserCreateWithoutNewsCreatedInput;
    where?: UserWhereInput | undefined;
}

import { UserCreateWithoutEventsCreatedInput } from "../inputs/UserCreateWithoutEventsCreatedInput";
import { UserUpdateWithoutEventsCreatedInput } from "../inputs/UserUpdateWithoutEventsCreatedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutEventsCreatedInput {
    update: UserUpdateWithoutEventsCreatedInput;
    create: UserCreateWithoutEventsCreatedInput;
    where?: UserWhereInput | undefined;
}

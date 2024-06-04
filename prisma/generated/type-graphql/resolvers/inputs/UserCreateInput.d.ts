import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { AttendeeCreateNestedManyWithoutUserInput } from "../inputs/AttendeeCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { EventCreateNestedManyWithoutAuthorInput } from "../inputs/EventCreateNestedManyWithoutAuthorInput";
import { InformationCreateNestedManyWithoutAuthorInput } from "../inputs/InformationCreateNestedManyWithoutAuthorInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    image?: string | undefined;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
    eventsCreated?: EventCreateNestedManyWithoutAuthorInput | undefined;
    attendees?: AttendeeCreateNestedManyWithoutUserInput | undefined;
    comments?: CommentCreateNestedManyWithoutUserInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    newsCreated?: InformationCreateNestedManyWithoutAuthorInput | undefined;
}

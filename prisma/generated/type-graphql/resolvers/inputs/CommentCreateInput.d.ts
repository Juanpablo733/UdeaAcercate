import { EventCreateNestedOneWithoutCommentsInput } from "../inputs/EventCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateInput {
    id?: string | undefined;
    text: string;
    dateTime?: Date | undefined;
    user: UserCreateNestedOneWithoutCommentsInput;
    event: EventCreateNestedOneWithoutCommentsInput;
}

import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutEventInput {
    id?: string | undefined;
    text: string;
    dateTime?: Date | undefined;
    user: UserCreateNestedOneWithoutCommentsInput;
}

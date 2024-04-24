import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutInfoInput {
    id?: string | undefined;
    text: string;
    dateTime?: Date | undefined;
    user: UserCreateNestedOneWithoutCommentsInput;
}

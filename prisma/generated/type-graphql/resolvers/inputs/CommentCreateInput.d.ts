import { InformationCreateNestedOneWithoutCommentsInput } from "../inputs/InformationCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateInput {
    id?: string | undefined;
    text: string;
    dateTime?: Date | undefined;
    user: UserCreateNestedOneWithoutCommentsInput;
    info: InformationCreateNestedOneWithoutCommentsInput;
}

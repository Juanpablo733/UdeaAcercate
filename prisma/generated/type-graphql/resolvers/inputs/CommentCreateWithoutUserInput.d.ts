import { InformationCreateNestedOneWithoutCommentsInput } from "../inputs/InformationCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutUserInput {
    id?: string | undefined;
    text: string;
    dateTime?: Date | undefined;
    info: InformationCreateNestedOneWithoutCommentsInput;
}

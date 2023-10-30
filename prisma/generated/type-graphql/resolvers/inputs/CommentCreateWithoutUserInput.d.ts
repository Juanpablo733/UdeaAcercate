import { EventCreateNestedOneWithoutCommentsInput } from "../inputs/EventCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutUserInput {
    id?: string | undefined;
    text: string;
    dateTime?: Date | undefined;
    event: EventCreateNestedOneWithoutCommentsInput;
}

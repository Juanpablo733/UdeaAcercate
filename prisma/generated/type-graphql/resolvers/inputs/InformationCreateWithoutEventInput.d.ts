import { CommentCreateNestedManyWithoutInfoInput } from "../inputs/CommentCreateNestedManyWithoutInfoInput";
import { InformationCreatehashtagsInput } from "../inputs/InformationCreatehashtagsInput";
import { UserCreateNestedOneWithoutNewsCreatedInput } from "../inputs/UserCreateNestedOneWithoutNewsCreatedInput";
export declare class InformationCreateWithoutEventInput {
    id?: string | undefined;
    title: string;
    description: string;
    date: Date;
    image?: string | undefined;
    tag: "Deportivo" | "Academico" | "Cultural";
    hashtags?: InformationCreatehashtagsInput | undefined;
    official?: boolean | undefined;
    author?: UserCreateNestedOneWithoutNewsCreatedInput | undefined;
    comments?: CommentCreateNestedManyWithoutInfoInput | undefined;
}

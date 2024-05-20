import { CommentCreateNestedManyWithoutInfoInput } from "../inputs/CommentCreateNestedManyWithoutInfoInput";
import { InformationCreatehashtagsInput } from "../inputs/InformationCreatehashtagsInput";
export declare class InformationCreateWithoutEventInput {
    id?: string | undefined;
    title: string;
    description: string;
    date: Date;
    image?: string | undefined;
    tag: "Deportivo" | "Academico" | "Cultural";
    hashtags?: InformationCreatehashtagsInput | undefined;
    comments?: CommentCreateNestedManyWithoutInfoInput | undefined;
}

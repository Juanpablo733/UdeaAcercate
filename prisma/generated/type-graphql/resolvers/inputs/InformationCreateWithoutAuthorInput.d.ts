import { CommentCreateNestedManyWithoutInfoInput } from "../inputs/CommentCreateNestedManyWithoutInfoInput";
import { EventCreateNestedOneWithoutInfoInput } from "../inputs/EventCreateNestedOneWithoutInfoInput";
import { InformationCreatehashtagsInput } from "../inputs/InformationCreatehashtagsInput";
export declare class InformationCreateWithoutAuthorInput {
    id?: string | undefined;
    title: string;
    description: string;
    date?: Date | undefined;
    image?: string | undefined;
    tag: "Deportivo" | "Academico" | "Cultural" | "Noticia";
    hashtags?: InformationCreatehashtagsInput | undefined;
    official?: boolean | undefined;
    comments?: CommentCreateNestedManyWithoutInfoInput | undefined;
    event?: EventCreateNestedOneWithoutInfoInput | undefined;
}

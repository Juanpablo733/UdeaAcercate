import { CommentCreateNestedManyWithoutInfoInput } from "../inputs/CommentCreateNestedManyWithoutInfoInput";
import { EventCreateNestedOneWithoutInfoInput } from "../inputs/EventCreateNestedOneWithoutInfoInput";
import { InformationCreatehashtagsInput } from "../inputs/InformationCreatehashtagsInput";
export declare class InformationCreateInput {
    id?: string | undefined;
    title: string;
    description: string;
    date: Date;
    image?: string | undefined;
    tag: "Deportivo" | "Academico" | "Cultural";
    hashtags?: InformationCreatehashtagsInput | undefined;
    comments?: CommentCreateNestedManyWithoutInfoInput | undefined;
    event?: EventCreateNestedOneWithoutInfoInput | undefined;
}

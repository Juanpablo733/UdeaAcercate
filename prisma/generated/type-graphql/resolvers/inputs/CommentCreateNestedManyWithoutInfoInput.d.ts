import { CommentCreateManyInfoInputEnvelope } from "../inputs/CommentCreateManyInfoInputEnvelope";
import { CommentCreateOrConnectWithoutInfoInput } from "../inputs/CommentCreateOrConnectWithoutInfoInput";
import { CommentCreateWithoutInfoInput } from "../inputs/CommentCreateWithoutInfoInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedManyWithoutInfoInput {
    create?: CommentCreateWithoutInfoInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutInfoInput[] | undefined;
    createMany?: CommentCreateManyInfoInputEnvelope | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
}

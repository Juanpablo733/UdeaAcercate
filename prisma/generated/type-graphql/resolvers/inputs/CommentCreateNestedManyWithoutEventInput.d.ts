import { CommentCreateManyEventInputEnvelope } from "../inputs/CommentCreateManyEventInputEnvelope";
import { CommentCreateOrConnectWithoutEventInput } from "../inputs/CommentCreateOrConnectWithoutEventInput";
import { CommentCreateWithoutEventInput } from "../inputs/CommentCreateWithoutEventInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentCreateNestedManyWithoutEventInput {
    create?: CommentCreateWithoutEventInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutEventInput[] | undefined;
    createMany?: CommentCreateManyEventInputEnvelope | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
}

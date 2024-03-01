import { CommentCreateManyEventInputEnvelope } from "../inputs/CommentCreateManyEventInputEnvelope";
import { CommentCreateOrConnectWithoutEventInput } from "../inputs/CommentCreateOrConnectWithoutEventInput";
import { CommentCreateWithoutEventInput } from "../inputs/CommentCreateWithoutEventInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutEventInput } from "../inputs/CommentUpdateManyWithWhereWithoutEventInput";
import { CommentUpdateWithWhereUniqueWithoutEventInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutEventInput";
import { CommentUpsertWithWhereUniqueWithoutEventInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutEventInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentUpdateManyWithoutEventNestedInput {
    create?: CommentCreateWithoutEventInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutEventInput[] | undefined;
    upsert?: CommentUpsertWithWhereUniqueWithoutEventInput[] | undefined;
    createMany?: CommentCreateManyEventInputEnvelope | undefined;
    set?: CommentWhereUniqueInput[] | undefined;
    disconnect?: CommentWhereUniqueInput[] | undefined;
    delete?: CommentWhereUniqueInput[] | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
    update?: CommentUpdateWithWhereUniqueWithoutEventInput[] | undefined;
    updateMany?: CommentUpdateManyWithWhereWithoutEventInput[] | undefined;
    deleteMany?: CommentScalarWhereInput[] | undefined;
}

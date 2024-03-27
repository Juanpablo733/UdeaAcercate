import { CommentCreateManyInfoInputEnvelope } from "../inputs/CommentCreateManyInfoInputEnvelope";
import { CommentCreateOrConnectWithoutInfoInput } from "../inputs/CommentCreateOrConnectWithoutInfoInput";
import { CommentCreateWithoutInfoInput } from "../inputs/CommentCreateWithoutInfoInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutInfoInput } from "../inputs/CommentUpdateManyWithWhereWithoutInfoInput";
import { CommentUpdateWithWhereUniqueWithoutInfoInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutInfoInput";
import { CommentUpsertWithWhereUniqueWithoutInfoInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutInfoInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentUpdateManyWithoutInfoNestedInput {
    create?: CommentCreateWithoutInfoInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutInfoInput[] | undefined;
    upsert?: CommentUpsertWithWhereUniqueWithoutInfoInput[] | undefined;
    createMany?: CommentCreateManyInfoInputEnvelope | undefined;
    set?: CommentWhereUniqueInput[] | undefined;
    disconnect?: CommentWhereUniqueInput[] | undefined;
    delete?: CommentWhereUniqueInput[] | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
    update?: CommentUpdateWithWhereUniqueWithoutInfoInput[] | undefined;
    updateMany?: CommentUpdateManyWithWhereWithoutInfoInput[] | undefined;
    deleteMany?: CommentScalarWhereInput[] | undefined;
}

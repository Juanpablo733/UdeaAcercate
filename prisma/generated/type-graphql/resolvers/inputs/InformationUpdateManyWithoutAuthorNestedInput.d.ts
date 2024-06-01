import { InformationCreateManyAuthorInputEnvelope } from "../inputs/InformationCreateManyAuthorInputEnvelope";
import { InformationCreateOrConnectWithoutAuthorInput } from "../inputs/InformationCreateOrConnectWithoutAuthorInput";
import { InformationCreateWithoutAuthorInput } from "../inputs/InformationCreateWithoutAuthorInput";
import { InformationScalarWhereInput } from "../inputs/InformationScalarWhereInput";
import { InformationUpdateManyWithWhereWithoutAuthorInput } from "../inputs/InformationUpdateManyWithWhereWithoutAuthorInput";
import { InformationUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/InformationUpdateWithWhereUniqueWithoutAuthorInput";
import { InformationUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/InformationUpsertWithWhereUniqueWithoutAuthorInput";
import { InformationWhereUniqueInput } from "../inputs/InformationWhereUniqueInput";
export declare class InformationUpdateManyWithoutAuthorNestedInput {
    create?: InformationCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: InformationCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: InformationUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: InformationCreateManyAuthorInputEnvelope | undefined;
    set?: InformationWhereUniqueInput[] | undefined;
    disconnect?: InformationWhereUniqueInput[] | undefined;
    delete?: InformationWhereUniqueInput[] | undefined;
    connect?: InformationWhereUniqueInput[] | undefined;
    update?: InformationUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: InformationUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: InformationScalarWhereInput[] | undefined;
}

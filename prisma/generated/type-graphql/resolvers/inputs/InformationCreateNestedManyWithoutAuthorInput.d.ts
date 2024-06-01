import { InformationCreateManyAuthorInputEnvelope } from "../inputs/InformationCreateManyAuthorInputEnvelope";
import { InformationCreateOrConnectWithoutAuthorInput } from "../inputs/InformationCreateOrConnectWithoutAuthorInput";
import { InformationCreateWithoutAuthorInput } from "../inputs/InformationCreateWithoutAuthorInput";
import { InformationWhereUniqueInput } from "../inputs/InformationWhereUniqueInput";
export declare class InformationCreateNestedManyWithoutAuthorInput {
    create?: InformationCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: InformationCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: InformationCreateManyAuthorInputEnvelope | undefined;
    connect?: InformationWhereUniqueInput[] | undefined;
}

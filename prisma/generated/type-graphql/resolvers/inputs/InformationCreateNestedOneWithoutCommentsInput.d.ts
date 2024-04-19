import { InformationCreateOrConnectWithoutCommentsInput } from "../inputs/InformationCreateOrConnectWithoutCommentsInput";
import { InformationCreateWithoutCommentsInput } from "../inputs/InformationCreateWithoutCommentsInput";
import { InformationWhereUniqueInput } from "../inputs/InformationWhereUniqueInput";
export declare class InformationCreateNestedOneWithoutCommentsInput {
    create?: InformationCreateWithoutCommentsInput | undefined;
    connectOrCreate?: InformationCreateOrConnectWithoutCommentsInput | undefined;
    connect?: InformationWhereUniqueInput | undefined;
}

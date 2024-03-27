import { InformationCreateOrConnectWithoutEventInput } from "../inputs/InformationCreateOrConnectWithoutEventInput";
import { InformationCreateWithoutEventInput } from "../inputs/InformationCreateWithoutEventInput";
import { InformationWhereUniqueInput } from "../inputs/InformationWhereUniqueInput";
export declare class InformationCreateNestedOneWithoutEventInput {
    create?: InformationCreateWithoutEventInput | undefined;
    connectOrCreate?: InformationCreateOrConnectWithoutEventInput | undefined;
    connect?: InformationWhereUniqueInput | undefined;
}

import { InformationCreateOrConnectWithoutEventInput } from "../inputs/InformationCreateOrConnectWithoutEventInput";
import { InformationCreateWithoutEventInput } from "../inputs/InformationCreateWithoutEventInput";
import { InformationUpdateToOneWithWhereWithoutEventInput } from "../inputs/InformationUpdateToOneWithWhereWithoutEventInput";
import { InformationUpsertWithoutEventInput } from "../inputs/InformationUpsertWithoutEventInput";
import { InformationWhereUniqueInput } from "../inputs/InformationWhereUniqueInput";
export declare class InformationUpdateOneRequiredWithoutEventNestedInput {
    create?: InformationCreateWithoutEventInput | undefined;
    connectOrCreate?: InformationCreateOrConnectWithoutEventInput | undefined;
    upsert?: InformationUpsertWithoutEventInput | undefined;
    connect?: InformationWhereUniqueInput | undefined;
    update?: InformationUpdateToOneWithWhereWithoutEventInput | undefined;
}

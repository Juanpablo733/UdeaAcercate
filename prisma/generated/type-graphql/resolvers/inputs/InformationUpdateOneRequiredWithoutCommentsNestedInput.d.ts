import { InformationCreateOrConnectWithoutCommentsInput } from "../inputs/InformationCreateOrConnectWithoutCommentsInput";
import { InformationCreateWithoutCommentsInput } from "../inputs/InformationCreateWithoutCommentsInput";
import { InformationUpdateToOneWithWhereWithoutCommentsInput } from "../inputs/InformationUpdateToOneWithWhereWithoutCommentsInput";
import { InformationUpsertWithoutCommentsInput } from "../inputs/InformationUpsertWithoutCommentsInput";
import { InformationWhereUniqueInput } from "../inputs/InformationWhereUniqueInput";
export declare class InformationUpdateOneRequiredWithoutCommentsNestedInput {
    create?: InformationCreateWithoutCommentsInput | undefined;
    connectOrCreate?: InformationCreateOrConnectWithoutCommentsInput | undefined;
    upsert?: InformationUpsertWithoutCommentsInput | undefined;
    connect?: InformationWhereUniqueInput | undefined;
    update?: InformationUpdateToOneWithWhereWithoutCommentsInput | undefined;
}

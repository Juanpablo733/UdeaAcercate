import { InformationCreateInput } from "../../../inputs/InformationCreateInput";
import { InformationUpdateInput } from "../../../inputs/InformationUpdateInput";
import { InformationWhereUniqueInput } from "../../../inputs/InformationWhereUniqueInput";
export declare class UpsertOneInformationArgs {
    where: InformationWhereUniqueInput;
    create: InformationCreateInput;
    update: InformationUpdateInput;
}

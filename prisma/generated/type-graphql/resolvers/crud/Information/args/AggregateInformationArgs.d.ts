import { InformationOrderByWithRelationInput } from "../../../inputs/InformationOrderByWithRelationInput";
import { InformationWhereInput } from "../../../inputs/InformationWhereInput";
import { InformationWhereUniqueInput } from "../../../inputs/InformationWhereUniqueInput";
export declare class AggregateInformationArgs {
    where?: InformationWhereInput | undefined;
    orderBy?: InformationOrderByWithRelationInput[] | undefined;
    cursor?: InformationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

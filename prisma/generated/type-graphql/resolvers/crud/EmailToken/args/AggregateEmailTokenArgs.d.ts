import { EmailTokenOrderByWithRelationInput } from "../../../inputs/EmailTokenOrderByWithRelationInput";
import { EmailTokenWhereInput } from "../../../inputs/EmailTokenWhereInput";
import { EmailTokenWhereUniqueInput } from "../../../inputs/EmailTokenWhereUniqueInput";
export declare class AggregateEmailTokenArgs {
    where?: EmailTokenWhereInput | undefined;
    orderBy?: EmailTokenOrderByWithRelationInput[] | undefined;
    cursor?: EmailTokenWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

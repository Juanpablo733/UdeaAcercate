import { EmailTokenOrderByWithAggregationInput } from "../../../inputs/EmailTokenOrderByWithAggregationInput";
import { EmailTokenScalarWhereWithAggregatesInput } from "../../../inputs/EmailTokenScalarWhereWithAggregatesInput";
import { EmailTokenWhereInput } from "../../../inputs/EmailTokenWhereInput";
export declare class GroupByEmailTokenArgs {
    where?: EmailTokenWhereInput | undefined;
    orderBy?: EmailTokenOrderByWithAggregationInput[] | undefined;
    by: Array<"identifier" | "token" | "expires">;
    having?: EmailTokenScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

import { InformationOrderByWithAggregationInput } from "../../../inputs/InformationOrderByWithAggregationInput";
import { InformationScalarWhereWithAggregatesInput } from "../../../inputs/InformationScalarWhereWithAggregatesInput";
import { InformationWhereInput } from "../../../inputs/InformationWhereInput";
export declare class GroupByInformationArgs {
    where?: InformationWhereInput | undefined;
    orderBy?: InformationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "description" | "date" | "image" | "tag" | "hashtags">;
    having?: InformationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
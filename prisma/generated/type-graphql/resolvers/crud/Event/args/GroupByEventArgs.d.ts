import { EventOrderByWithAggregationInput } from "../../../inputs/EventOrderByWithAggregationInput";
import { EventScalarWhereWithAggregatesInput } from "../../../inputs/EventScalarWhereWithAggregatesInput";
import { EventWhereInput } from "../../../inputs/EventWhereInput";
export declare class GroupByEventArgs {
    where?: EventWhereInput | undefined;
    orderBy?: EventOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "description" | "place" | "date" | "image" | "tag" | "authorId" | "hashtags">;
    having?: EventScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

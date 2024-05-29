import { ProfileOrderByWithAggregationInput } from "../../../inputs/ProfileOrderByWithAggregationInput";
import { ProfileScalarWhereWithAggregatesInput } from "../../../inputs/ProfileScalarWhereWithAggregatesInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";
export declare class GroupByProfileArgs {
    where?: ProfileWhereInput | undefined;
    orderBy?: ProfileOrderByWithAggregationInput[] | undefined;
    by: Array<"faculty" | "career" | "type" | "campus" | "userId" | "description" | "hobbies" | "socialLinks">;
    having?: ProfileScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

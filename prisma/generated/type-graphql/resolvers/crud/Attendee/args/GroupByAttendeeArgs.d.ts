import { AttendeeOrderByWithAggregationInput } from "../../../inputs/AttendeeOrderByWithAggregationInput";
import { AttendeeScalarWhereWithAggregatesInput } from "../../../inputs/AttendeeScalarWhereWithAggregatesInput";
import { AttendeeWhereInput } from "../../../inputs/AttendeeWhereInput";
export declare class GroupByAttendeeArgs {
    where?: AttendeeWhereInput | undefined;
    orderBy?: AttendeeOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "eventId">;
    having?: AttendeeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

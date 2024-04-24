import type { GraphQLResolveInfo } from "graphql";
import { GroupByAttendeeArgs } from "./args/GroupByAttendeeArgs";
import { AttendeeGroupBy } from "../../outputs/AttendeeGroupBy";
export declare class GroupByAttendeeResolver {
    groupByAttendee(ctx: any, info: GraphQLResolveInfo, args: GroupByAttendeeArgs): Promise<AttendeeGroupBy[]>;
}

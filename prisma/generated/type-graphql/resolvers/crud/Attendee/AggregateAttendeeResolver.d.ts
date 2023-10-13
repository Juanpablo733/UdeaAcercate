import type { GraphQLResolveInfo } from "graphql";
import { AggregateAttendeeArgs } from "./args/AggregateAttendeeArgs";
import { AggregateAttendee } from "../../outputs/AggregateAttendee";
export declare class AggregateAttendeeResolver {
    aggregateAttendee(ctx: any, info: GraphQLResolveInfo, args: AggregateAttendeeArgs): Promise<AggregateAttendee>;
}

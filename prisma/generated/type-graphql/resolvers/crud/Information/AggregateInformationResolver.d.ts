import type { GraphQLResolveInfo } from "graphql";
import { AggregateInformationArgs } from "./args/AggregateInformationArgs";
import { AggregateInformation } from "../../outputs/AggregateInformation";
export declare class AggregateInformationResolver {
    aggregateInformation(ctx: any, info: GraphQLResolveInfo, args: AggregateInformationArgs): Promise<AggregateInformation>;
}

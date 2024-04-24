import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneInformationArgs } from "./args/UpsertOneInformationArgs";
import { Information } from "../../../models/Information";
export declare class UpsertOneInformationResolver {
    upsertOneInformation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneInformationArgs): Promise<Information>;
}

import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneInformationArgs } from "./args/UpdateOneInformationArgs";
import { Information } from "../../../models/Information";
export declare class UpdateOneInformationResolver {
    updateOneInformation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneInformationArgs): Promise<Information | null>;
}

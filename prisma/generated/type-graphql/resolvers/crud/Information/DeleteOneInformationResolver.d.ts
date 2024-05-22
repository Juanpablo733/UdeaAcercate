import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneInformationArgs } from "./args/DeleteOneInformationArgs";
import { Information } from "../../../models/Information";
export declare class DeleteOneInformationResolver {
    deleteOneInformation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneInformationArgs): Promise<Information | null>;
}

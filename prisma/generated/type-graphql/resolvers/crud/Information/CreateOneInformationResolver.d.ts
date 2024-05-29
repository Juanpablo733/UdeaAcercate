import type { GraphQLResolveInfo } from "graphql";
import { CreateOneInformationArgs } from "./args/CreateOneInformationArgs";
import { Information } from "../../../models/Information";
export declare class CreateOneInformationResolver {
    createOneInformation(ctx: any, info: GraphQLResolveInfo, args: CreateOneInformationArgs): Promise<Information>;
}

import type { GraphQLResolveInfo } from "graphql";
import { AggregateProfileArgs } from "./args/AggregateProfileArgs";
import { CreateManyProfileArgs } from "./args/CreateManyProfileArgs";
import { CreateOneProfileArgs } from "./args/CreateOneProfileArgs";
import { DeleteManyProfileArgs } from "./args/DeleteManyProfileArgs";
import { DeleteOneProfileArgs } from "./args/DeleteOneProfileArgs";
import { FindFirstProfileArgs } from "./args/FindFirstProfileArgs";
import { FindFirstProfileOrThrowArgs } from "./args/FindFirstProfileOrThrowArgs";
import { FindManyProfileArgs } from "./args/FindManyProfileArgs";
import { FindUniqueProfileArgs } from "./args/FindUniqueProfileArgs";
import { FindUniqueProfileOrThrowArgs } from "./args/FindUniqueProfileOrThrowArgs";
import { GroupByProfileArgs } from "./args/GroupByProfileArgs";
import { UpdateManyProfileArgs } from "./args/UpdateManyProfileArgs";
import { UpdateOneProfileArgs } from "./args/UpdateOneProfileArgs";
import { UpsertOneProfileArgs } from "./args/UpsertOneProfileArgs";
import { Profile } from "../../../models/Profile";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProfile } from "../../outputs/AggregateProfile";
import { ProfileGroupBy } from "../../outputs/ProfileGroupBy";
export declare class ProfileCrudResolver {
    aggregateProfile(ctx: any, info: GraphQLResolveInfo, args: AggregateProfileArgs): Promise<AggregateProfile>;
    createManyProfile(ctx: any, info: GraphQLResolveInfo, args: CreateManyProfileArgs): Promise<AffectedRowsOutput>;
    createOneProfile(ctx: any, info: GraphQLResolveInfo, args: CreateOneProfileArgs): Promise<Profile>;
    deleteManyProfile(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProfileArgs): Promise<AffectedRowsOutput>;
    deleteOneProfile(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProfileArgs): Promise<Profile | null>;
    findFirstProfile(ctx: any, info: GraphQLResolveInfo, args: FindFirstProfileArgs): Promise<Profile | null>;
    findFirstProfileOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProfileOrThrowArgs): Promise<Profile | null>;
    profiles(ctx: any, info: GraphQLResolveInfo, args: FindManyProfileArgs): Promise<Profile[]>;
    profile(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProfileArgs): Promise<Profile | null>;
    getProfile(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProfileOrThrowArgs): Promise<Profile | null>;
    groupByProfile(ctx: any, info: GraphQLResolveInfo, args: GroupByProfileArgs): Promise<ProfileGroupBy[]>;
    updateManyProfile(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProfileArgs): Promise<AffectedRowsOutput>;
    updateOneProfile(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProfileArgs): Promise<Profile | null>;
    upsertOneProfile(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProfileArgs): Promise<Profile>;
}

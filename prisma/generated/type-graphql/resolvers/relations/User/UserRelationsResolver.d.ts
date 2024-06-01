import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Attendee } from "../../../models/Attendee";
import { Comment } from "../../../models/Comment";
import { Event } from "../../../models/Event";
import { Information } from "../../../models/Information";
import { Profile } from "../../../models/Profile";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserAttendeesArgs } from "./args/UserAttendeesArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserEventsCreatedArgs } from "./args/UserEventsCreatedArgs";
import { UserNewsCreatedArgs } from "./args/UserNewsCreatedArgs";
import { UserProfileArgs } from "./args/UserProfileArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    profile(user: User, ctx: any, info: GraphQLResolveInfo, args: UserProfileArgs): Promise<Profile | null>;
    eventsCreated(user: User, ctx: any, info: GraphQLResolveInfo, args: UserEventsCreatedArgs): Promise<Event[]>;
    attendees(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAttendeesArgs): Promise<Attendee[]>;
    comments(user: User, ctx: any, info: GraphQLResolveInfo, args: UserCommentsArgs): Promise<Comment[]>;
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, info: GraphQLResolveInfo, args: UserSessionsArgs): Promise<Session[]>;
    newsCreated(user: User, ctx: any, info: GraphQLResolveInfo, args: UserNewsCreatedArgs): Promise<Information[]>;
}

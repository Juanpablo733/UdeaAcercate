import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountAttendeesArgs } from "./args/UserCountAttendeesArgs";
import { UserCountCommentsArgs } from "./args/UserCountCommentsArgs";
import { UserCountEventsCreatedArgs } from "./args/UserCountEventsCreatedArgs";
import { UserCountNewsCreatedArgs } from "./args/UserCountNewsCreatedArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";
export declare class UserCount {
    eventsCreated: number;
    attendees: number;
    comments: number;
    accounts: number;
    sessions: number;
    newsCreated: number;
    getEventsCreated(root: UserCount, args: UserCountEventsCreatedArgs): number;
    getAttendees(root: UserCount, args: UserCountAttendeesArgs): number;
    getComments(root: UserCount, args: UserCountCommentsArgs): number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getSessions(root: UserCount, args: UserCountSessionsArgs): number;
    getNewsCreated(root: UserCount, args: UserCountNewsCreatedArgs): number;
}

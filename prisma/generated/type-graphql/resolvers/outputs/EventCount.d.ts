import { EventCountAttendeesArgs } from "./args/EventCountAttendeesArgs";
import { EventCountCommentsArgs } from "./args/EventCountCommentsArgs";
export declare class EventCount {
    comments: number;
    attendees: number;
    getComments(root: EventCount, args: EventCountCommentsArgs): number;
    getAttendees(root: EventCount, args: EventCountAttendeesArgs): number;
}

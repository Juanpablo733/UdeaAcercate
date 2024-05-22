import { EventCountAttendeesArgs } from "./args/EventCountAttendeesArgs";
export declare class EventCount {
    attendees: number;
    getAttendees(root: EventCount, args: EventCountAttendeesArgs): number;
}

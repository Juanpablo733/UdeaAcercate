import { Event } from "../models/Event";
import { User } from "../models/User";
export declare class Attendee {
    user?: User;
    userId: string;
    event?: Event;
    eventId: string;
    dateTime: Date;
}

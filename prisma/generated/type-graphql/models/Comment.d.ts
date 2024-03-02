import { Event } from "../models/Event";
import { User } from "../models/User";
export declare class Comment {
    id: string;
    text: string;
    dateTime: Date;
    user?: User;
    userId: string;
    event?: Event;
    eventId: string;
}

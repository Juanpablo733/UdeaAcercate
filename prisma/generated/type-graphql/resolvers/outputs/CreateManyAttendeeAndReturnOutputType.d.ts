import { Event } from "../outputs/Event";
import { User } from "../outputs/User";
export declare class CreateManyAttendeeAndReturnOutputType {
    userId: string;
    eventId: string;
    dateTime: Date;
    user: User;
    event: Event;
}

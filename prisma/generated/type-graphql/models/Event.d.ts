import { Attendee } from "../models/Attendee";
import { Information } from "../models/Information";
import { User } from "../models/User";
import { EventCount } from "../resolvers/outputs/EventCount";
export declare class Event {
    id: string;
    author?: User;
    authorId: string;
    info?: Information;
    infoId: string;
    place: string;
    attendees?: Attendee[];
    _count?: EventCount | null;
}

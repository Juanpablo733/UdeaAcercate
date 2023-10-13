import { Attendee } from "../models/Attendee";
import { Comment } from "../models/Comment";
import { User } from "../models/User";
import { EventCount } from "../resolvers/outputs/EventCount";
export declare class Event {
    id: string;
    title: string;
    description: string;
    place: string;
    date: Date;
    image?: string | null;
    tag: "deportivo" | "academico" | "cultural";
    author?: User;
    authorId: string;
    comments?: Comment[];
    attendees?: Attendee[];
    hashtags: string[];
    _count?: EventCount | null;
    attendeesCount: ReactNode;
}

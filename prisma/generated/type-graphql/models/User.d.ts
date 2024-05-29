import { Account } from "../models/Account";
import { Attendee } from "../models/Attendee";
import { Comment } from "../models/Comment";
import { Event } from "../models/Event";
import { Information } from "../models/Information";
import { Profile } from "../models/Profile";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null;
    profile?: Profile | null;
    eventsCreated?: Event[];
    attendees?: Attendee[];
    comments?: Comment[];
    accounts?: Account[];
    sessions?: Session[];
    newsCreated?: Information[];
    _count?: UserCount | null;
}

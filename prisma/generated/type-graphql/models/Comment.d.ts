import { Information } from "../models/Information";
import { User } from "../models/User";
export declare class Comment {
    id: string;
    text: string;
    dateTime: Date;
    user?: User;
    userId: string;
    info?: Information;
    infoId: string;
}

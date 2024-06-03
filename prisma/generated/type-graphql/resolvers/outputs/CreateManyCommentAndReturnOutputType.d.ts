import { Information } from "../outputs/Information";
import { User } from "../outputs/User";
export declare class CreateManyCommentAndReturnOutputType {
    id: string;
    text: string;
    dateTime: Date;
    userId: string;
    infoId: string;
    user: User;
    info: Information;
}

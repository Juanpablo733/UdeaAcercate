import { Information } from "../outputs/Information";
import { User } from "../outputs/User";
export declare class CreateManyEventAndReturnOutputType {
    id: string;
    authorId: string;
    infoId: string;
    place: string;
    author: User;
    info: Information;
}

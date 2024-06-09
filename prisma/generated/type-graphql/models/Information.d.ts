import { Comment } from "../models/Comment";
import { Event } from "../models/Event";
import { User } from "../models/User";
import { InformationCount } from "../resolvers/outputs/InformationCount";
export declare class Information {
    id: string;
    author?: User | null;
    authorId?: string | null;
    title: string;
    description: string;
    date: Date;
    image?: string | null;
    tag: "Deportivo" | "Academico" | "Cultural" | "Noticia";
    hashtags: string[];
    official: boolean;
    comments?: Comment[];
    event?: Event | null;
    _count?: InformationCount | null;
}

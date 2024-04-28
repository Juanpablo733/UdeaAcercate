import { Comment } from "../models/Comment";
import { Event } from "../models/Event";
import { InformationCount } from "../resolvers/outputs/InformationCount";
export declare class Information {
    id: string;
    title: string;
    description: string;
    date: Date;
    image?: string | null;
    tag: "Deportivo" | "Academico" | "Cultural";
    hashtags: string[];
    comments?: Comment[];
    event?: Event | null;
    _count?: InformationCount | null;
}

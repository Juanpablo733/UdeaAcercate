import { EventCountAggregate } from "../outputs/EventCountAggregate";
import { EventMaxAggregate } from "../outputs/EventMaxAggregate";
import { EventMinAggregate } from "../outputs/EventMinAggregate";
export declare class EventGroupBy {
    id: string;
    title: string;
    description: string;
    place: string;
    date: Date;
    image: string | null;
    tag: "Deportivo" | "Academico" | "Cultural";
    authorId: string;
    hashtags: string[] | null;
    _count: EventCountAggregate | null;
    _min: EventMinAggregate | null;
    _max: EventMaxAggregate | null;
}

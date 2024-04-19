import { EventCountAggregate } from "../outputs/EventCountAggregate";
import { EventMaxAggregate } from "../outputs/EventMaxAggregate";
import { EventMinAggregate } from "../outputs/EventMinAggregate";
export declare class EventGroupBy {
    id: string;
    authorId: string;
    infoId: string;
    place: string;
    _count: EventCountAggregate | null;
    _min: EventMinAggregate | null;
    _max: EventMaxAggregate | null;
}

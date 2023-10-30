import { AttendeeCountAggregate } from "../outputs/AttendeeCountAggregate";
import { AttendeeMaxAggregate } from "../outputs/AttendeeMaxAggregate";
import { AttendeeMinAggregate } from "../outputs/AttendeeMinAggregate";
export declare class AttendeeGroupBy {
    userId: string;
    eventId: string;
    _count: AttendeeCountAggregate | null;
    _min: AttendeeMinAggregate | null;
    _max: AttendeeMaxAggregate | null;
}

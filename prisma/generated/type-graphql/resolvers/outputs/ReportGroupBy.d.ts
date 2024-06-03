import { ReportCountAggregate } from "../outputs/ReportCountAggregate";
import { ReportMaxAggregate } from "../outputs/ReportMaxAggregate";
import { ReportMinAggregate } from "../outputs/ReportMinAggregate";
export declare class ReportGroupBy {
    userId: string;
    eventId: string;
    reason: string;
    dateTime: Date;
    _count: ReportCountAggregate | null;
    _min: ReportMinAggregate | null;
    _max: ReportMaxAggregate | null;
}

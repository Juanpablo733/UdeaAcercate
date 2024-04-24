import { InformationCountAggregate } from "../outputs/InformationCountAggregate";
import { InformationMaxAggregate } from "../outputs/InformationMaxAggregate";
import { InformationMinAggregate } from "../outputs/InformationMinAggregate";
export declare class AggregateInformation {
    _count: InformationCountAggregate | null;
    _min: InformationMinAggregate | null;
    _max: InformationMaxAggregate | null;
}

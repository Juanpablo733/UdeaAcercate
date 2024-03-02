import { EmailTokenCountAggregate } from "../outputs/EmailTokenCountAggregate";
import { EmailTokenMaxAggregate } from "../outputs/EmailTokenMaxAggregate";
import { EmailTokenMinAggregate } from "../outputs/EmailTokenMinAggregate";
export declare class AggregateEmailToken {
    _count: EmailTokenCountAggregate | null;
    _min: EmailTokenMinAggregate | null;
    _max: EmailTokenMaxAggregate | null;
}

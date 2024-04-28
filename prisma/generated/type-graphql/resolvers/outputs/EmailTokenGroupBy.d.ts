import { EmailTokenCountAggregate } from "../outputs/EmailTokenCountAggregate";
import { EmailTokenMaxAggregate } from "../outputs/EmailTokenMaxAggregate";
import { EmailTokenMinAggregate } from "../outputs/EmailTokenMinAggregate";
export declare class EmailTokenGroupBy {
    identifier: string;
    token: string;
    expires: Date;
    _count: EmailTokenCountAggregate | null;
    _min: EmailTokenMinAggregate | null;
    _max: EmailTokenMaxAggregate | null;
}

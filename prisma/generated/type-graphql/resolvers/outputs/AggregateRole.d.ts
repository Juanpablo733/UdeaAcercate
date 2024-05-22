import { RoleCountAggregate } from "../outputs/RoleCountAggregate";
import { RoleMaxAggregate } from "../outputs/RoleMaxAggregate";
import { RoleMinAggregate } from "../outputs/RoleMinAggregate";
export declare class AggregateRole {
    _count: RoleCountAggregate | null;
    _min: RoleMinAggregate | null;
    _max: RoleMaxAggregate | null;
}

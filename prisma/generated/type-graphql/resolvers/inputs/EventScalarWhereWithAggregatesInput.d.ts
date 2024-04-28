import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EventScalarWhereWithAggregatesInput {
    AND?: EventScalarWhereWithAggregatesInput[] | undefined;
    OR?: EventScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EventScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    infoId?: StringWithAggregatesFilter | undefined;
    place?: StringWithAggregatesFilter | undefined;
}

import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EmailTokenScalarWhereWithAggregatesInput {
    AND?: EmailTokenScalarWhereWithAggregatesInput[] | undefined;
    OR?: EmailTokenScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EmailTokenScalarWhereWithAggregatesInput[] | undefined;
    identifier?: StringWithAggregatesFilter | undefined;
    token?: StringWithAggregatesFilter | undefined;
    expires?: DateTimeWithAggregatesFilter | undefined;
}

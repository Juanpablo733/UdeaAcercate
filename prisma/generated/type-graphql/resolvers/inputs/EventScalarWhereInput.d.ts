import { StringFilter } from "../inputs/StringFilter";
export declare class EventScalarWhereInput {
    AND?: EventScalarWhereInput[] | undefined;
    OR?: EventScalarWhereInput[] | undefined;
    NOT?: EventScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    infoId?: StringFilter | undefined;
    place?: StringFilter | undefined;
}

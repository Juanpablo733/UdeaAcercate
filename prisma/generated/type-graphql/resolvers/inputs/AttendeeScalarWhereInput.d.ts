import { StringFilter } from "../inputs/StringFilter";
export declare class AttendeeScalarWhereInput {
    AND?: AttendeeScalarWhereInput[] | undefined;
    OR?: AttendeeScalarWhereInput[] | undefined;
    NOT?: AttendeeScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    eventId?: StringFilter | undefined;
}

import { AttendeeCreateInput } from "../../../inputs/AttendeeCreateInput";
import { AttendeeUpdateInput } from "../../../inputs/AttendeeUpdateInput";
import { AttendeeWhereUniqueInput } from "../../../inputs/AttendeeWhereUniqueInput";
export declare class UpsertOneAttendeeArgs {
    where: AttendeeWhereUniqueInput;
    create: AttendeeCreateInput;
    update: AttendeeUpdateInput;
}

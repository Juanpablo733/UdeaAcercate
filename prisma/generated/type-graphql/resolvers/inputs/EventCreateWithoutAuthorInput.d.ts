import { AttendeeCreateNestedManyWithoutEventInput } from "../inputs/AttendeeCreateNestedManyWithoutEventInput";
import { InformationCreateNestedOneWithoutEventInput } from "../inputs/InformationCreateNestedOneWithoutEventInput";
export declare class EventCreateWithoutAuthorInput {
    id?: string | undefined;
    place: string;
    info: InformationCreateNestedOneWithoutEventInput;
    attendees?: AttendeeCreateNestedManyWithoutEventInput | undefined;
}

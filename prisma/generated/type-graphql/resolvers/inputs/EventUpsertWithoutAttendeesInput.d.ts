import { EventCreateWithoutAttendeesInput } from "../inputs/EventCreateWithoutAttendeesInput";
import { EventUpdateWithoutAttendeesInput } from "../inputs/EventUpdateWithoutAttendeesInput";
import { EventWhereInput } from "../inputs/EventWhereInput";
export declare class EventUpsertWithoutAttendeesInput {
    update: EventUpdateWithoutAttendeesInput;
    create: EventCreateWithoutAttendeesInput;
    where?: EventWhereInput | undefined;
}

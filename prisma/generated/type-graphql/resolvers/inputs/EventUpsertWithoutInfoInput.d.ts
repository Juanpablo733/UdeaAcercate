import { EventCreateWithoutInfoInput } from "../inputs/EventCreateWithoutInfoInput";
import { EventUpdateWithoutInfoInput } from "../inputs/EventUpdateWithoutInfoInput";
import { EventWhereInput } from "../inputs/EventWhereInput";
export declare class EventUpsertWithoutInfoInput {
    update: EventUpdateWithoutInfoInput;
    create: EventCreateWithoutInfoInput;
    where?: EventWhereInput | undefined;
}

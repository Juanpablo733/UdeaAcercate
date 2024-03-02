import { EventCreateWithoutCommentsInput } from "../inputs/EventCreateWithoutCommentsInput";
import { EventUpdateWithoutCommentsInput } from "../inputs/EventUpdateWithoutCommentsInput";
import { EventWhereInput } from "../inputs/EventWhereInput";
export declare class EventUpsertWithoutCommentsInput {
    update: EventUpdateWithoutCommentsInput;
    create: EventCreateWithoutCommentsInput;
    where?: EventWhereInput | undefined;
}

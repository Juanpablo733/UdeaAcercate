import { EventCreateOrConnectWithoutAttendeesInput } from "../inputs/EventCreateOrConnectWithoutAttendeesInput";
import { EventCreateWithoutAttendeesInput } from "../inputs/EventCreateWithoutAttendeesInput";
import { EventUpdateToOneWithWhereWithoutAttendeesInput } from "../inputs/EventUpdateToOneWithWhereWithoutAttendeesInput";
import { EventUpsertWithoutAttendeesInput } from "../inputs/EventUpsertWithoutAttendeesInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventUpdateOneRequiredWithoutAttendeesNestedInput {
    create?: EventCreateWithoutAttendeesInput | undefined;
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput | undefined;
    upsert?: EventUpsertWithoutAttendeesInput | undefined;
    connect?: EventWhereUniqueInput | undefined;
    update?: EventUpdateToOneWithWhereWithoutAttendeesInput | undefined;
}

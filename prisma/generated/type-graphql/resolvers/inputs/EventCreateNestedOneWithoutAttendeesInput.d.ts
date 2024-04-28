import { EventCreateOrConnectWithoutAttendeesInput } from "../inputs/EventCreateOrConnectWithoutAttendeesInput";
import { EventCreateWithoutAttendeesInput } from "../inputs/EventCreateWithoutAttendeesInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventCreateNestedOneWithoutAttendeesInput {
    create?: EventCreateWithoutAttendeesInput | undefined;
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput | undefined;
    connect?: EventWhereUniqueInput | undefined;
}

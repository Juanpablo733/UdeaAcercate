import { EventCreateOrConnectWithoutInfoInput } from "../inputs/EventCreateOrConnectWithoutInfoInput";
import { EventCreateWithoutInfoInput } from "../inputs/EventCreateWithoutInfoInput";
import { EventUpdateToOneWithWhereWithoutInfoInput } from "../inputs/EventUpdateToOneWithWhereWithoutInfoInput";
import { EventUpsertWithoutInfoInput } from "../inputs/EventUpsertWithoutInfoInput";
import { EventWhereInput } from "../inputs/EventWhereInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventUpdateOneWithoutInfoNestedInput {
    create?: EventCreateWithoutInfoInput | undefined;
    connectOrCreate?: EventCreateOrConnectWithoutInfoInput | undefined;
    upsert?: EventUpsertWithoutInfoInput | undefined;
    disconnect?: EventWhereInput | undefined;
    delete?: EventWhereInput | undefined;
    connect?: EventWhereUniqueInput | undefined;
    update?: EventUpdateToOneWithWhereWithoutInfoInput | undefined;
}

import { EventCreateOrConnectWithoutInfoInput } from "../inputs/EventCreateOrConnectWithoutInfoInput";
import { EventCreateWithoutInfoInput } from "../inputs/EventCreateWithoutInfoInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventCreateNestedOneWithoutInfoInput {
    create?: EventCreateWithoutInfoInput | undefined;
    connectOrCreate?: EventCreateOrConnectWithoutInfoInput | undefined;
    connect?: EventWhereUniqueInput | undefined;
}

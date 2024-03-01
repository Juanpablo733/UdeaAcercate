import { EventCreateOrConnectWithoutCommentsInput } from "../inputs/EventCreateOrConnectWithoutCommentsInput";
import { EventCreateWithoutCommentsInput } from "../inputs/EventCreateWithoutCommentsInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventCreateNestedOneWithoutCommentsInput {
    create?: EventCreateWithoutCommentsInput | undefined;
    connectOrCreate?: EventCreateOrConnectWithoutCommentsInput | undefined;
    connect?: EventWhereUniqueInput | undefined;
}

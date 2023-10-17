import { EventCreateOrConnectWithoutCommentsInput } from "../inputs/EventCreateOrConnectWithoutCommentsInput";
import { EventCreateWithoutCommentsInput } from "../inputs/EventCreateWithoutCommentsInput";
import { EventUpdateToOneWithWhereWithoutCommentsInput } from "../inputs/EventUpdateToOneWithWhereWithoutCommentsInput";
import { EventUpsertWithoutCommentsInput } from "../inputs/EventUpsertWithoutCommentsInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventUpdateOneRequiredWithoutCommentsNestedInput {
    create?: EventCreateWithoutCommentsInput | undefined;
    connectOrCreate?: EventCreateOrConnectWithoutCommentsInput | undefined;
    upsert?: EventUpsertWithoutCommentsInput | undefined;
    connect?: EventWhereUniqueInput | undefined;
    update?: EventUpdateToOneWithWhereWithoutCommentsInput | undefined;
}

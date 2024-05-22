import { EventCreateManyAuthorInputEnvelope } from "../inputs/EventCreateManyAuthorInputEnvelope";
import { EventCreateOrConnectWithoutAuthorInput } from "../inputs/EventCreateOrConnectWithoutAuthorInput";
import { EventCreateWithoutAuthorInput } from "../inputs/EventCreateWithoutAuthorInput";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyWithWhereWithoutAuthorInput } from "../inputs/EventUpdateManyWithWhereWithoutAuthorInput";
import { EventUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/EventUpdateWithWhereUniqueWithoutAuthorInput";
import { EventUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/EventUpsertWithWhereUniqueWithoutAuthorInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventUpdateManyWithoutAuthorNestedInput {
    create?: EventCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: EventCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: EventUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: EventCreateManyAuthorInputEnvelope | undefined;
    set?: EventWhereUniqueInput[] | undefined;
    disconnect?: EventWhereUniqueInput[] | undefined;
    delete?: EventWhereUniqueInput[] | undefined;
    connect?: EventWhereUniqueInput[] | undefined;
    update?: EventUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: EventUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: EventScalarWhereInput[] | undefined;
}

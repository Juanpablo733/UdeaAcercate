import { EventCreateManyAuthorInputEnvelope } from "../inputs/EventCreateManyAuthorInputEnvelope";
import { EventCreateOrConnectWithoutAuthorInput } from "../inputs/EventCreateOrConnectWithoutAuthorInput";
import { EventCreateWithoutAuthorInput } from "../inputs/EventCreateWithoutAuthorInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";
export declare class EventCreateNestedManyWithoutAuthorInput {
    create?: EventCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: EventCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: EventCreateManyAuthorInputEnvelope | undefined;
    connect?: EventWhereUniqueInput[] | undefined;
}

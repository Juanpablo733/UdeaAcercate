import { AttendeeCreateManyEventInputEnvelope } from "../inputs/AttendeeCreateManyEventInputEnvelope";
import { AttendeeCreateOrConnectWithoutEventInput } from "../inputs/AttendeeCreateOrConnectWithoutEventInput";
import { AttendeeCreateWithoutEventInput } from "../inputs/AttendeeCreateWithoutEventInput";
import { AttendeeScalarWhereInput } from "../inputs/AttendeeScalarWhereInput";
import { AttendeeUpdateManyWithWhereWithoutEventInput } from "../inputs/AttendeeUpdateManyWithWhereWithoutEventInput";
import { AttendeeUpdateWithWhereUniqueWithoutEventInput } from "../inputs/AttendeeUpdateWithWhereUniqueWithoutEventInput";
import { AttendeeUpsertWithWhereUniqueWithoutEventInput } from "../inputs/AttendeeUpsertWithWhereUniqueWithoutEventInput";
import { AttendeeWhereUniqueInput } from "../inputs/AttendeeWhereUniqueInput";
export declare class AttendeeUpdateManyWithoutEventNestedInput {
    create?: AttendeeCreateWithoutEventInput[] | undefined;
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventInput[] | undefined;
    upsert?: AttendeeUpsertWithWhereUniqueWithoutEventInput[] | undefined;
    createMany?: AttendeeCreateManyEventInputEnvelope | undefined;
    set?: AttendeeWhereUniqueInput[] | undefined;
    disconnect?: AttendeeWhereUniqueInput[] | undefined;
    delete?: AttendeeWhereUniqueInput[] | undefined;
    connect?: AttendeeWhereUniqueInput[] | undefined;
    update?: AttendeeUpdateWithWhereUniqueWithoutEventInput[] | undefined;
    updateMany?: AttendeeUpdateManyWithWhereWithoutEventInput[] | undefined;
    deleteMany?: AttendeeScalarWhereInput[] | undefined;
}

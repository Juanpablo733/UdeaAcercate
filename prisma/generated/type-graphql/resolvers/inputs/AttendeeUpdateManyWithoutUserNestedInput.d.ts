import { AttendeeCreateManyUserInputEnvelope } from "../inputs/AttendeeCreateManyUserInputEnvelope";
import { AttendeeCreateOrConnectWithoutUserInput } from "../inputs/AttendeeCreateOrConnectWithoutUserInput";
import { AttendeeCreateWithoutUserInput } from "../inputs/AttendeeCreateWithoutUserInput";
import { AttendeeScalarWhereInput } from "../inputs/AttendeeScalarWhereInput";
import { AttendeeUpdateManyWithWhereWithoutUserInput } from "../inputs/AttendeeUpdateManyWithWhereWithoutUserInput";
import { AttendeeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AttendeeUpdateWithWhereUniqueWithoutUserInput";
import { AttendeeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AttendeeUpsertWithWhereUniqueWithoutUserInput";
import { AttendeeWhereUniqueInput } from "../inputs/AttendeeWhereUniqueInput";
export declare class AttendeeUpdateManyWithoutUserNestedInput {
    create?: AttendeeCreateWithoutUserInput[] | undefined;
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: AttendeeUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: AttendeeCreateManyUserInputEnvelope | undefined;
    set?: AttendeeWhereUniqueInput[] | undefined;
    disconnect?: AttendeeWhereUniqueInput[] | undefined;
    delete?: AttendeeWhereUniqueInput[] | undefined;
    connect?: AttendeeWhereUniqueInput[] | undefined;
    update?: AttendeeUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: AttendeeUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: AttendeeScalarWhereInput[] | undefined;
}

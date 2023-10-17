import { AttendeeCreateManyUserInputEnvelope } from "../inputs/AttendeeCreateManyUserInputEnvelope";
import { AttendeeCreateOrConnectWithoutUserInput } from "../inputs/AttendeeCreateOrConnectWithoutUserInput";
import { AttendeeCreateWithoutUserInput } from "../inputs/AttendeeCreateWithoutUserInput";
import { AttendeeWhereUniqueInput } from "../inputs/AttendeeWhereUniqueInput";
export declare class AttendeeCreateNestedManyWithoutUserInput {
    create?: AttendeeCreateWithoutUserInput[] | undefined;
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: AttendeeCreateManyUserInputEnvelope | undefined;
    connect?: AttendeeWhereUniqueInput[] | undefined;
}

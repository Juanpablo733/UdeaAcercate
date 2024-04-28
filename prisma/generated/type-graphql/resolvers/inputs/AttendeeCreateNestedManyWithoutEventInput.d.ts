import { AttendeeCreateManyEventInputEnvelope } from "../inputs/AttendeeCreateManyEventInputEnvelope";
import { AttendeeCreateOrConnectWithoutEventInput } from "../inputs/AttendeeCreateOrConnectWithoutEventInput";
import { AttendeeCreateWithoutEventInput } from "../inputs/AttendeeCreateWithoutEventInput";
import { AttendeeWhereUniqueInput } from "../inputs/AttendeeWhereUniqueInput";
export declare class AttendeeCreateNestedManyWithoutEventInput {
    create?: AttendeeCreateWithoutEventInput[] | undefined;
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventInput[] | undefined;
    createMany?: AttendeeCreateManyEventInputEnvelope | undefined;
    connect?: AttendeeWhereUniqueInput[] | undefined;
}

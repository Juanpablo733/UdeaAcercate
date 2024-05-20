import { InformationCreateWithoutEventInput } from "../inputs/InformationCreateWithoutEventInput";
import { InformationUpdateWithoutEventInput } from "../inputs/InformationUpdateWithoutEventInput";
import { InformationWhereInput } from "../inputs/InformationWhereInput";
export declare class InformationUpsertWithoutEventInput {
    update: InformationUpdateWithoutEventInput;
    create: InformationCreateWithoutEventInput;
    where?: InformationWhereInput | undefined;
}

import { InformationCreateWithoutCommentsInput } from "../inputs/InformationCreateWithoutCommentsInput";
import { InformationUpdateWithoutCommentsInput } from "../inputs/InformationUpdateWithoutCommentsInput";
import { InformationWhereInput } from "../inputs/InformationWhereInput";
export declare class InformationUpsertWithoutCommentsInput {
    update: InformationUpdateWithoutCommentsInput;
    create: InformationCreateWithoutCommentsInput;
    where?: InformationWhereInput | undefined;
}

import { InformationOrderByWithRelationInput } from "../../../inputs/InformationOrderByWithRelationInput";
import { InformationWhereInput } from "../../../inputs/InformationWhereInput";
import { InformationWhereUniqueInput } from "../../../inputs/InformationWhereUniqueInput";
export declare class FindFirstInformationArgs {
    where?: InformationWhereInput | undefined;
    orderBy?: InformationOrderByWithRelationInput[] | undefined;
    cursor?: InformationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "date" | "image" | "tag" | "hashtags"> | undefined;
}

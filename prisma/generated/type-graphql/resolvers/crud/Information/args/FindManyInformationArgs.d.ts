import { InformationOrderByWithRelationInput } from "../../../inputs/InformationOrderByWithRelationInput";
import { InformationWhereInput } from "../../../inputs/InformationWhereInput";
import { InformationWhereUniqueInput } from "../../../inputs/InformationWhereUniqueInput";
export declare class FindManyInformationArgs {
    where?: InformationWhereInput | undefined;
    orderBy?: InformationOrderByWithRelationInput[] | undefined;
    cursor?: InformationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "authorId" | "title" | "description" | "date" | "image" | "tag" | "hashtags" | "official"> | undefined;
}

import { ReportOrderByWithRelationInput } from "../../../inputs/ReportOrderByWithRelationInput";
import { ReportWhereInput } from "../../../inputs/ReportWhereInput";
import { ReportWhereUniqueInput } from "../../../inputs/ReportWhereUniqueInput";
export declare class FindManyReportArgs {
    where?: ReportWhereInput | undefined;
    orderBy?: ReportOrderByWithRelationInput[] | undefined;
    cursor?: ReportWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "eventId" | "reason" | "dateTime"> | undefined;
}

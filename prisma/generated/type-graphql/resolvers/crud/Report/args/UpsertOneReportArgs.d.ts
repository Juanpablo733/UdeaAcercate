import { ReportCreateInput } from "../../../inputs/ReportCreateInput";
import { ReportUpdateInput } from "../../../inputs/ReportUpdateInput";
import { ReportWhereUniqueInput } from "../../../inputs/ReportWhereUniqueInput";
export declare class UpsertOneReportArgs {
    where: ReportWhereUniqueInput;
    create: ReportCreateInput;
    update: ReportUpdateInput;
}

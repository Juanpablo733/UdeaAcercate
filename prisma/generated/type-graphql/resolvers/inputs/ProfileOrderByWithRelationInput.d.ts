import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ProfileOrderByWithRelationInput {
    faculty?: SortOrderInput | undefined;
    career?: SortOrderInput | undefined;
    type?: SortOrderInput | undefined;
    campus?: SortOrderInput | undefined;
    userId?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    hobbies?: "asc" | "desc" | undefined;
    socialLinks?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
}

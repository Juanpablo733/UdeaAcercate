import { InformationCountAggregate } from "../outputs/InformationCountAggregate";
import { InformationMaxAggregate } from "../outputs/InformationMaxAggregate";
import { InformationMinAggregate } from "../outputs/InformationMinAggregate";
export declare class InformationGroupBy {
    id: string;
    authorId: string | null;
    title: string;
    description: string;
    date: Date;
    image: string | null;
    tag: "Deportivo" | "Academico" | "Cultural" | "Noticia";
    hashtags: string[] | null;
    official: boolean;
    _count: InformationCountAggregate | null;
    _min: InformationMinAggregate | null;
    _max: InformationMaxAggregate | null;
}

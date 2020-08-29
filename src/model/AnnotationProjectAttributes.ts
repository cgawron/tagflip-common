/**
 * Attributes of an annotation project.
 * An *annotation project* contains annotation tasks to annotate a corpus using one or more annotation sets.
 */
import CorpusAttributes from "./CorpusAttributes";
import AnnotationSetAttributes from "./AnnotationSetAttributes";

export default interface AnnotationProjectAttributes {

    /** uniquely identifies an annotation project */
    annotationProjectId: number;

    /** identifier for the related corpus **/
    corpusId: number;

    /** name of the annotation project */
    name: string;

    /** textual description of the annotation project */
    description: string;

    /** Date of creation */
    createdAt: Date

    /** Date of the last update */
    updatedAt: Date

    corpus: CorpusAttributes;

    annotationSets: AnnotationSetAttributes[];


}

/**
 * Attributes of an annotation task.
 * An *annotation task* contains a subset of documents to be annotated.
 */
export default interface AnnotationTaskAttributes {

    /** uniquely identifies an annotation task */
    annotationTaskId: number

    /** name of the annotation task */
    name: string;

    /** textual description of the annotation task */
    description: string;

    /** Date of creation */
    createdAt: Date

    /** Date of the last update */
    updatedAt: Date

}

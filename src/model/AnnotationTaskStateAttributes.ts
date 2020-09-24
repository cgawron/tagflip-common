/**
 * Attributes of an annotation task.
 * An *annotation task* contains a subset of documents to be annotated.
 */
export default interface AnnotationTaskAttributes {

    annotationTaskStateId: number

    name: string;

    color: string;

    visible: boolean;

    updatedAt: Date;

    createdAt: Date;

}

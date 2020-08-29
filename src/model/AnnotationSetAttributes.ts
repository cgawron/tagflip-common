/**
 * Attributes of an annotation set.
 * An *annotation set* is a collection annotations.
 */
export default interface AnnotationSetAttributes {

    /** uniquely identifies an annotation set */
    annotationSetId: number

    /** name of the annotation set */
    name: string;

    /** textual description of the annotation set */
    description: string;

    /** Date of creation */
    createdAt: Date

    /** Date of the last update */
    updatedAt: Date

}

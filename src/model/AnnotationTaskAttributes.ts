/**
 * Attributes of an annotation task.
 * An *annotation task* contains a subset of documents to be annotated.
 */
import {CorpusAttributes} from "../../index";

export default interface AnnotationTaskAttributes {

    /** uniquely identifies an annotation task */
    annotationTaskId: number

    /** uniquely identifies a referenced corpus */
    corpusId: number

    /** attributes of referenced corpus */
    corpus?: CorpusAttributes

    /** name of the annotation task */
    name: string;

    /** current state of annotation task */
    annotationTaskStateId: number;

    /** priority of the annotation task related to current state */
    priority:number;

    /** textual description of the annotation task */
    description: string;

    /** Date of creation */
    createdAt: Date

    /** Date of the last update */
    updatedAt: Date

}

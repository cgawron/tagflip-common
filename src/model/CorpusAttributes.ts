/**
 * Attributes of a Corpus.
 * A *Corpus* is a collection of annotated documents.
 */
import {AnnotationSetAttributes} from "../../index";

export default interface CorpusAttributes {

    /** uniquely identifies a corpus */
    corpusId: number

    /** name of the corpus */
    name: string;

    /** textual description of the corpus */
    description: string;

    /** annotation sets which are assigned to the corpus **/
    annotationSets: AnnotationSetAttributes[]

    /** Date of creation */
    createdAt: Date

    /** Date of the last update of the corpus */
    updatedAt: Date

}

/**
 * Attributes of a Corpus.
 * A *Corpus* is a collection of annotated documents. 
 */
export default interface CorpusAttributes {

    /** uniquely identifies a corpus */
    corpusId: number

    /** name of the corpus */
    name: string;

    /** textual description of the corpus */
    description: string;

    /** Date of creation */
    createdAt: Date

    /** Date of the last update of the corpus */
    updatedAt: Date

}

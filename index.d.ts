import AnnotationAttributes from './src/model/AnnotationAttributes'
import AnnotationSetAttributes from './src/model/AnnotationSetAttributes'
import AnnotationProjectAttributes from './src/model/AnnotationProjectAttributes'
import AnnotationTaskAttributes from "./src/model/AnnotationTaskAttributes"
import AnnotationTaskDocumentAttributes from "./src/model/AnnotationTaskDocumentAttributes"
import {DocumentAnnotationState} from "./src/model/AnnotationTaskDocumentAttributes"
import CorpusAttributes from './src/model/CorpusAttributes'
import DocumentAttributes from './src/model/DocumentAttributes'
import TagAttributes from './src/model/TagAttributes'
import TagFlipError from './src/exception/TagFlipError'
import TagFlipErrorCode from './src/exception/TagFlipErrorCode'

import SearchFilter, {Operator} from './src/rest/SearchFilter'


export as namespace tagflip;

export {
    AnnotationAttributes,
    AnnotationSetAttributes,
    AnnotationProjectAttributes,
    AnnotationTaskAttributes,
    AnnotationTaskDocumentAttributes,
    DocumentAnnotationState,
    CorpusAttributes,
    DocumentAttributes,
    TagAttributes,
    TagFlipError,
    TagFlipErrorCode,
    SearchFilter,
    Operator
}


/**
 * Copyright (c) 2023 - Charles `sparticvs` Timko
 */

function __isValidVectorString(input) {
    if(typeof input !== 'string') {
        throw 'Vector string must be a string';
    }

    const regex = /AV:[LANP]\/AC:[LH]\/AT:[NP]\/PR:[NLH]\/UI:[NPA]:\/VC:[HLN]\/VI:[HLN]\/VA:[HLN]\/SC:[HLN]\/SI:[HLN]\/SA:[HLN](\/E:[XAPU]\/CR:[XHML]\/IR:[XHML]\/AR:[XHML]\/MAV:[XNALP]\/MAC:[XLH]\/MAT:[XNP]\/MPR:[XNLH]\/MUI:[XNPA]\/MVC:[XNLH]\/MVI:[XNLH]\/MVA:[XNLH]\/MSC:[XNLH]\/MSI:[XNLHS]\/MSA:[XNLHS])?(\/S:[XNP]\/AU:[XNY]\/R:[XAUI]\/V:[XDC]\/RE:[XLMH]\/U:(X|Clear|Green|Amber|Red))?/;
    return input.match(regex) !== null;
}

/*!
 * Copyright (c) 2017-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const context = require('../contexts/veres-one-v1.jsonld');
const constants = require('./constants');
const {documentLoader} = require('./documentLoader');
const {CONTEXT_URL, CBORLD_CODEC_VALUE} = constants;

const contexts = new Map();
contexts.set(constants.CONTEXT_URL, context);

const appContextMap = new Map();
appContextMap.set(CONTEXT_URL, CBORLD_CODEC_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  documentLoader,
};

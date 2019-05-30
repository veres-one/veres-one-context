/*!
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const contexts = exports.contexts = new Map();
const constants = exports.constants = require('./constants.js');

contexts.set(
  constants.VERES_ONE_CONTEXT_V1_URL,
  require('../contexts/veres-one-v1.jsonld'));

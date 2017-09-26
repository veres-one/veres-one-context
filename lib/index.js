/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */

const constants = require('bedrock').config.constants;
const fs = require('fs');
const path = require('path');

require('bedrock-ledger-context');

constants.VERES_ONE_CONTEXT_URL = 'https://w3id.org/veres-one/v1';
constants.CONTEXTS[constants.VERES_ONE_CONTEXT_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/veres-one-v1.jsonld'),
    {encoding: 'utf8'}));

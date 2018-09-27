/*
 * Copyright (c) 2017-2018 Digital Bazaar, Inc. All rights reserved.
 */

const fs = require('fs');
const path = require('path');

module.exports = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/veres-one-v1.jsonld'),
    {encoding: 'utf8'}));

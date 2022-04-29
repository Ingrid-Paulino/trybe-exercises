
const express = require('express');

const route = express.Router({ mergeParams: true });

import storeRoute from './RecordStore'

route.use('/store', storeRoute);

export default route;
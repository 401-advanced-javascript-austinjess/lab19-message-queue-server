'use strict';

const Q = require('@nmq/q/server');
Q.start();

const fileQ = new Q('files');
fileQ.monitorEvent('save');
fileQ.monitorEvent('error');

const dbQ = new Q('database');
dbQ.monitorEvent('create');
dbQ.monitorEvent('read');
dbQ.monitorEvent('update');
dbQ.monitorEvent('delete');
dbQ.monitorEvent('error');

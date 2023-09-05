'use strict';

/**
 * lamp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lamp.lamp');

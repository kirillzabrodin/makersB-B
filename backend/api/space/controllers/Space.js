'use strict';

/**
 * Space.js controller
 *
 * @description: A set of functions called "actions" for managing `Space`.
 */

module.exports = {

  /**
   * Retrieve space records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.space.search(ctx.query);
    } else {
      return strapi.services.space.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a space record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.space.fetch(ctx.params);
  },

  /**
   * Count space records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.space.count(ctx.query);
  },

  /**
   * Create a/an space record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.space.add(ctx.request.body);
  },

  /**
   * Update a/an space record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.space.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an space record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.space.remove(ctx.params);
  }
};

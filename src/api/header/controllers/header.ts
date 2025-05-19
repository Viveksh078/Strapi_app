import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::header.header', ({ strapi }) => ({
  async find(ctx) {
    const entries = await strapi.entityService.findMany('api::header.header', {
      ...ctx.query,
      populate: {
        data: {
          populate: '*', // this will get sub_menu inside each data item
        },
        logo: true, // if logo is a media field
      },
    });

    return { data: entries };
  }
}));

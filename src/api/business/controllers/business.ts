/**
 * business controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::business.business' , ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany('api::business.business', {
        populate: {
            business_pages:{
                on:{
                    'our-business.page-group':{
                        populate:{
                            banner:{
                                populate:{
                                    banner_business:{
                                        populate:['image']
                                    }
                                }
                            },
                            capabilities:{
                                populate:'*'
                            },
                            projects:{
                                populate:{
                                    project_card:{
                                        populate:['image']
                                    }
                                }
                            },
                            certificate:{
                                populate:{
                                    card_data:{
                                        populate:['image']
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
      });
  
      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  }));
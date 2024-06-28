const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.object().keys({
          whatItIs: Joi.string(),
          keyFeatures: Joi.array().items(Joi.string()),
          securityFeatures: Joi.array().items(Joi.string())
        }),
        image: Joi.string(),
        size: Joi.number(),
        url: Joi.string().required(),
        category: Joi.string().required(),
        platform: Joi.array().items(Joi.string().valid('Android', 'Windows', 'iOS', 'Linux', 'MacOS')).required(),
        rating: Joi.number().min(0).max(5).default(0),
        downloadCount: Joi.number().default(0),
        releaseDate: Joi.date(),
        version: Joi.string(),
        developer: Joi.string(),
        license: Joi.string().valid('Open-Source', 'Proprietary', 'Other'),
        tags: Joi.array().items(Joi.string()),
        systemRequirements: Joi.object().keys({
          minimum: Joi.string(),
          recommended: Joi.string()
        }),
        languages: Joi.array().items(Joi.string()),
        screenshots: Joi.array().items(Joi.string()),
        changelog: Joi.string(),
        contentRating: Joi.string(),
        price: Joi.object().keys({
          amount: Joi.number(),
          currency: Joi.string()
        }),
        isFree: Joi.boolean(),
        keywords: Joi.array().items(Joi.string()),
        schemaVersion: Joi.number(),
        reviews: Joi.array().items(Joi.string())
       
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});
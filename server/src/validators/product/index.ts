import Joi, { ObjectSchema } from "joi";

const productSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(5).max(30).required(),
  description: Joi.string().min(30).max(80).required(),
  quantite: Joi.number().positive().required(),
  imgURLS: Joi.array<string>().items(Joi.string()).max(5).min(2).required(),
  rate: Joi.number().max(5).min(0).required(),
  price: Joi.number().positive().required(),
  discount: Joi.number().positive().required(),
  stock: Joi.number().integer().positive().required(),
  validatorId: Joi.string().required(),
  productId: Joi.string().required(),
});

export default productSchema;

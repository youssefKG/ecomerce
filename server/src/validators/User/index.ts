import Joi from "joi";

const updateProfilDataSchema = Joi.object({
  firstName: Joi.string().max(30).min(5).required(),
  lastName: Joi.string().max(30).min(5).required(),
  adress: Joi.string().min(5).required(),
  currentPassword: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
  newPassword: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
  confirmNewPassword: Joi.ref("newPassword"),
});

export { updateProfilDataSchema };

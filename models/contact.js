const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);
const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required(),
  phone: Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),
  favorite: Joi.boolean(),
});

const updFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updFavoriteSchema,
};

module.exports = { Contact, schemas };
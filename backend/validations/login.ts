import { body } from "express-validator";

export const loginValidations = [
  body("email", "Введите E-mail")
    .isEmail()
    .withMessage("Неверный E-mail")
    .isLength({
      min: 10,
      max: 40,
    }),
  body("password", "Введите  пароль")
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage("Допустимое кол-во символов от 2 до 40"),
  // .custom((value, { req }) => {
  //   if (value !== req.body.password2) {
  //     throw new Error("Пароли не совпадают");
  //   } else {
  //     return value;
  //   }
  // }),
];

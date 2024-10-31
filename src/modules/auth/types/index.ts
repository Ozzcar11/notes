export type AuthFormProps = {
  title?: string;
  submitText?: string;
  repeatPassword?: boolean;
};

export const AuthFormDefaultProps = {
  title: "Заголовок",
  submitText: "Кнопка",
  repeatPassword: false,
} as const

export type AuthFormEmits = {
  (e: "submit"): void;
};
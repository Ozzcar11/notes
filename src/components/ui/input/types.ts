export type InputProps = {
  label?: string;
  type?: "text" | "password";
  disabled?: boolean;
  placeholder?: string;
  clearable?: boolean;
  size?: "small" | "medium" | "large";
};

export const InputPropsDefaults = {
  label: "",
  type: "text",
  placeholder: "",
  disabled: false,
  clearable: false,
  size: "medium",
} as const;
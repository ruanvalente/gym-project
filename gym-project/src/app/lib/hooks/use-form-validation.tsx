import { useState, useEffect, ChangeEvent } from "react";

interface ValidationRules {
  [key: string]: {
    required: boolean;
  };
}

interface ValidationErrors {
  [key: string]: string;
}

interface UseFormValidationProps {
  initialValues: { [key: string]: any };
  validationRules: ValidationRules;
  onSubmit: (values: { [key: string]: any }) => void;
}

const useFormValidation = ({
  initialValues,
  validationRules,
  onSubmit,
}: UseFormValidationProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({});

  const validateField = (name: string, value: any) => {
    const rules = validationRules[name];
    const newErrors: ValidationErrors = { ...errors };

    if (rules.required && (!value || value.trim() === "")) {
      newErrors[name] = "Campo obrigatório";
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));

    if (touchedFields[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [name]: true,
    }));
    validateField(name, values[name]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTouchedFields((prevTouchedFields) => {
      const touched: { [key: string]: boolean } = {};
      Object.keys(validationRules).forEach((fieldName) => {
        touched[fieldName] = true;
      });
      return touched;
    });

    if (Object.keys(errors).length === 0) {
      onSubmit(values);
    } else {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      console.log("Enviando formulário:", values);
      setIsSubmitting(false);
    }
  }, [isSubmitting, values]);

  return {
    values,
    errors,
    touchedFields,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  };
};

export default useFormValidation;

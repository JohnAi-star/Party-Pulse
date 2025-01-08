'use client';

import { useState } from 'react';
import { validateEmail, validateRequired, validateMinMax, validateFutureDate } from '@/lib/utils/validation';

export type ValidationRule = {
  type: 'required' | 'email' | 'minMax' | 'futureDate';
  fieldName: string;
  min?: number;
  max?: number;
};

export function useFormValidation() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (value: any, rule: ValidationRule): string | null => {
    switch (rule.type) {
      case 'required':
        return validateRequired(value, rule.fieldName);
      case 'email':
        return validateEmail(value);
      case 'minMax':
        return validateMinMax(value, rule.min!, rule.max!, rule.fieldName);
      case 'futureDate':
        return validateFutureDate(new Date(value), rule.fieldName);
      default:
        return null;
    }
  };

  const validateForm = (values: Record<string, any>, rules: Record<string, ValidationRule[]>) => {
    const newErrors: Record<string, string> = {};
    
    Object.entries(rules).forEach(([field, fieldRules]) => {
      fieldRules.forEach(rule => {
        const error = validateField(values[field], rule);
        if (error) {
          newErrors[field] = error;
        }
      });
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm };
}
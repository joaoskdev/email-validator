import { ValidationResult } from '../types';

export const validateSyntax = (email: string): ValidationResult => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return{
            isValid: false,
            reason: 'formato do email inválido'
        };
    }

    return {
        isValid: true
    };

}
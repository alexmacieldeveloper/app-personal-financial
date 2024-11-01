import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const loginUser = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message || 'Erro ao fazer login. Verifique suas credenciais.');
        } else {
            throw new Error('Erro desconhecido ao fazer login.');
        }
  }
};

export const registerUser = async (email: string, password: string): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message || 'Erro ao registrar. Tente novamente.');
        } else {
            throw new Error('Erro desconhecido ao registrar.');
        }
    }
  };
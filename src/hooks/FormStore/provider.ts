import { GenT } from '~/hooks/FormStore/types';
import { FormStore } from '~/hooks/FormStore/create';

const formStoreContext = createContext<FormStore>();

export const FormStoreProvider = formStoreContext.Provider;

export const useFormStoreContext = <T extends GenT = any>(): FormStore<T> => {
	const value = useContext(formStoreContext);
	if (!value) throw new Error('FormStore is not defined. Please add FormStoreProvider to tree');
	return value;
};

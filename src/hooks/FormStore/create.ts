import { FormStoreErrors, FormStoreOptions, GenT } from '~/hooks/FormStore/types';
import { SetStoreFunction, unwrap } from 'solid-js/store';

export class FormStore<T extends GenT = any> {
	public self = this;
	public values:     T = undefined as any;
	public setValues:  SetStoreFunction<T> = undefined as any;
	private _errors:   FormStoreErrors<T> | undefined;
	private setErrors: SetStoreFunction<FormStoreErrors<T>> | undefined;


	constructor(private options: FormStoreOptions<T>) {
		[this.values, this.setValues] = createStore((options.defaultValues || {}) as T);
	}
	reset() {
		this.setValues(this.options.defaultValues || {} as T);
	}
	get errors() {
		if (!this._errors) [this._errors, this.setErrors] = createStore({} as FormStoreErrors<T>);
		return this._errors;
	}
	handleSubmit(cb) {
		return (ev) => {
			ev?.preventDefault();
			const snap = unwrap(this.values);
			if (!this.options.schema) return cb(snap);
			const parse = this.options.schema.safeParse(snap);
			if (!parse?.success) {
				return this.setErrors?.(parse.error.flatten().fieldErrors as any);
			}
			cb(parse.data);
		};
	}
}

// Create simple store to contain form values with some helpers. Inspired by react-hook-form
const createFormStore = <T extends GenT>(options: FormStoreOptions<T>) => new FormStore(options);
export default createFormStore;

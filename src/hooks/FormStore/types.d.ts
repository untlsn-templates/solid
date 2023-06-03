import { ZodSchema } from 'zod';

export type FormStoreErrors<T extends object> = Record<keyof T, string[] | undefined>;
export type GenT = Record<string, any>;
export type FormStoreHandle<T> = (cb: (values: T) => void) => (ev?: { preventDefault(): void }) => void
export type FormStoreOptions<T extends GenT = any> = {
    /**
     * values will be set to this and if you use reset it will reset to this state
     * @default {}
     */
    defaultValues?: T,
    // Zod schema that validate and transform (optional) values after submit, or generate errors when failed
    schema?:        ZodSchema<T>
}

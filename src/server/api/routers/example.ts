import { createTRPCRouter, publicProcedure } from '../utils';
import * as v from 'valibot';

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(v.parser(v.string()))
		.query(({ input }) => {
			return `Hello ${input}!`;
		}),
});

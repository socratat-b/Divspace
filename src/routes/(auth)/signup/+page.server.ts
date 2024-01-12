import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const registerFormSchema = z.object({
	fName: z.string().min(1),
	lName: z.string().min(1),
	course: z.string().min(12),
	year: z.string().min(5),
	typeOfUser: z.string().min(5),
	email: z.string().email(),
	username: z.string().min(3).max(20),
	password: z.string().min(8).max(14),
	confirmPassword: z.string().min(8).max(14)
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(registerFormSchema);
	return { form };
};
export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, registerFormSchema);

		if (!form.valid) {
			console.log(form);
			return fail(400, { form });
		}

		throw redirect(303, '/login');
	}
};

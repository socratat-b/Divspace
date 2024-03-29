import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/server/prisma';

const registerFormSchema = z.object({
	fName: z.string().min(3),
	lName: z.string().min(3),
	course: z.string().default('Course'),
	year: z.string().default('Year Level'),
	typeOfUser: z.string().default('User Type'),
	email: z.string().email(),
	username: z.string().min(3).max(20),
	password: z.string().min(8).max(12),
	confirmPassword: z.string().min(8).max(12)
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
		} else {
			await prisma.user.create({
				data: {
					username: form.data.username,
					email: form.data.email,
					firstName: form.data.fName,
					lastName: form.data.lName
				}
			});
			return message(form, 'Successfully created');
		}
	}
};

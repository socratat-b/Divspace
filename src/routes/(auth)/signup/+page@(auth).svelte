<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	export let data;
	const { form, enhance, errors, constraints, message } = superForm(data.form, {
		validators: {
			fName: (fName) => (fName.length < 3 ? 'Must be at least 3 characters' : ''),
			lName: (lName) => (lName.length < 3 ? 'Must be at least 3 characters' : ''),
			email: (email) => (!email.endsWith('@dwc-legazpi.edu') ? 'Use @dwc-legazpi.edu email.' : ''),
			username: (username) => (username.length < 3 ? 'Choose a unique username' : '')
		},

		autoFocusOnError: true,
		resetForm: true
	});

	import Card from '$lib/components/Card.svelte';
</script>

{#if $message}
	<p>{$message}</p>
{/if}
<Card>
	<svelte:fragment slot="card-title">Create your account</svelte:fragment>

	<form slot="card-body" class="p-0 card-body" method="POST" use:enhance>
		<div class="grid w-full grid-cols-2 gap-x-4 gap-y-4">
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>First Name</span>
				</label>
				<input
					name="fName"
					type="text"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
					aria-invalid={$errors.fName ? 'true' : undefined}
					bind:value={$form.fName}
				/>

				{#if $errors.fName}
					<span class="text-[7px] text-red-600">{$errors.fName}</span>
				{/if}
			</div>
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Last Name</span>
				</label>
				<input
					aria-invalid={$errors.fName ? 'true' : undefined}
					name="lName"
					type="text"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
					bind:value={$form.lName}
				/>
				{#if $errors.lName}
					<span class="text-[7px] text-red-600">{$errors.lName}</span>
				{/if}
			</div>

			<div class="w-full max-w-[96] col-span-2 form-control">
				<select
					name="course"
					class="p-0 px-2 border-black rounded select select-bordered select-xs focus:outline-none focus:border-black"
					bind:value={$form.course}
					{...$constraints.course}
				>
					<option disabled selected>Course</option>
					<option value="Bachelor of Science in Computer Science" class="text-xs"
						>Bachelor of Science in Computer Science</option
					>
					<option value="Bachelor of Science in Information Technology" class="text-xs"
						>Bachelor of Science in Information Technology</option
					>
					<option value="Bachelor of Science in Nursing" class="text-xs"
						>Bachelor of Science in Nursing</option
					>
					<option value="Bachelor of Science in Accounting" class="text-xs"
						>Bachelor of Science in Accounting</option
					>
				</select>
				{#if $errors.course}
					<span class="text-[7px] text-red-600">{$errors.course}</span>
				{/if}
			</div>

			<div class="w-full max-w-[96] form-control">
				<select
					name="year"
					class="p-0 px-2 border-black rounded select select-bordered select-xs focus:outline-none focus:border-black"
					bind:value={$form.year}
					{...$constraints.year}
				>
					<option disabled selected>Year Level</option>
					<option value="First Year" class="text-xs">First Year</option>
					<option value="Second Year" class="text-xs">Second Year</option>
					<option value="Third Year" class="text-xs">Third Year</option>
					<option value="Fourth Year" class="text-xs">Fourth Year</option>
					<option value="Overtime" class="text-xs">Overtime</option>
				</select>
				{#if $errors.year}
					<span class="text-[7px] text-red-600">{$errors.year}</span>
				{/if}
			</div>

			<div class="w-full max-w-[96] form-control">
				<select
					name="typeOfUser"
					class="p-0 px-2 border-black rounded select select-bordered select-xs focus:outline-none focus:border-black"
					bind:value={$form.typeOfUser}
					{...$constraints.typeOfUser}
				>
					<option disabled selected>User Type</option>
					<option value="Student" class="text-xs">Student</option>
					<option value="Faculty Member" class="text-xs">Faculty Member</option>
					<option value="Staff" class="text-xs">Staff</option>
					<option value="Alumni" class="text-xs">Alumni</option>
				</select>
				{#if $errors.typeOfUser}
					<span class="text-[7px] text-red-600">{$errors.typeOfUser}</span>
				{/if}
			</div>

			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Email</span>
				</label>
				<input
					name="email"
					type="email"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
					bind:value={$form.email}
				/>
				{#if $errors.email}
					<span class="text-[7px] text-red-600">{$errors.email}</span>
				{/if}
			</div>
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Username</span>
				</label>
				<input
					name="username"
					type="text"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
					bind:value={$form.username}
				/>
				{#if $errors.username}
					<span class="text-[7px] text-red-600">{$errors.username}</span>
				{/if}
			</div>
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Password</span>
				</label>
				<input
					name="password"
					type="password"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
					bind:value={$form.password}
				/>
				{#if $errors.password}
					<span class="text-[7px] text-red-600">{$errors.password}</span>
				{/if}
			</div>
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Confirm Password</span>
				</label>
				<input
					name="confirmPassword"
					type="password"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
					bind:value={$form.confirmPassword}
				/>
				{#if $errors.confirmPassword}
					<span class="text-[7px] text-red-600">{$errors.confirmPassword}</span>
				{/if}
			</div>
		</div>
		<button type="submit" class="my-4 bg-blue-100 border border-black btn btn-sm">Sign up</button>
	</form>
</Card>

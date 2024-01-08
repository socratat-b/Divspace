<script>
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<svelte:fragment slot="card-title">Create your account</svelte:fragment>
	<form slot="card-body" class="p-0 card-body">
		<div class="grid w-full grid-cols-2 gap-x-4 gap-y-4">
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>First Name</span>
				</label>
				<input
					type="text"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
				/>
			</div>
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Last Name</span>
				</label>
				<input
					type="text"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
				/>
			</div>

			<div class="w-full max-w-[96] col-span-2 form-control">
				<select
					class="p-0 px-2 border-black rounded select select-bordered select-xs focus:outline-none focus:border-black"
				>
					<option disabled selected>Course</option>
					<option class="text-xs">Bachelor of Science in Computer Science</option>
					<option class="text-xs">Bachelor of Science in Information Technology</option>
					<option class="text-xs">Bachelor of Science in Nursing</option>
					<option class="text-xs">Bachelor of Science in Accounting</option>
				</select>
			</div>

			<div class="w-full max-w-[96] form-control">
				<select
					class="p-0 px-2 border-black rounded select select-bordered select-xs focus:outline-none focus:border-black"
				>
					<option disabled selected>Year</option>
					<option class="text-xs">First Year</option>
					<option class="text-xs">Second Year</option>
					<option class="text-xs">Third Year</option>
					<option class="text-xs">Fourth Year</option>
					<option class="text-xs">Overtime</option>
				</select>
			</div>

			<div class="w-full max-w-[96] form-control">
				<select
					class="p-0 px-2 border-black rounded select select-bordered select-xs focus:outline-none focus:border-black"
				>
					<option disabled selected>Type of User</option>
					<option class="text-xs">Student</option>
					<option class="text-xs">Faculty Member</option>
					<option class="text-xs">Staff</option>
					<option class="text-xs">Alumni</option>
				</select>
			</div>

			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Email</span>
				</label>
				<input
					type="email"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
				/>
			</div>
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Username</span>
				</label>
				<input
					type="text"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
				/>
			</div>
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Password</span>
				</label>
				<input
					type="password"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
				/>
			</div>
			<div class="form-control">
				<label for="" class="py-0 text-xs label">
					<span>Confirm Password</span>
				</label>
				<input
					type="password"
					class="border-black rounded input input-bordered input-xs focus:outline-none focus:border-black"
				/>
			</div>
		</div>
		<button class="my-4 bg-blue-100 border border-black btn btn-sm">Sign up</button>
	</form>
</Card>

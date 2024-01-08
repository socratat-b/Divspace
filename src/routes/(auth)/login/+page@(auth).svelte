<script>
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<svelte:fragment slot="card-title">Login to your account</svelte:fragment>
	<form slot="card-body" class="card-body">
		<div class="form-control">
			<label for="email" class="text-xs text-blue-950 label"> Email </label>
			<input
				name="email"
				type="email"
				required
				class="w-full border-black border-blue input input-bordered input-sm focus:outline-none focus:border-black"
			/>
		</div>
		<div class="form-control">
			<label for="password" class="text-xs text-blue-950 label">Password</label>
			<input
				name="password"
				type="password"
				required
				class="w-full border-black input input-bordered input-sm"
			/>
		</div>
		<div class="form-control">
			<label class="flex gap-1 py-2 cursor-pointer">
				<input type="checkbox" class="rounded-md checkbox checkbox-xs" />
				<span class="text-xs label-text">Remember me</span>
			</label>
		</div>
		<button class="bg-blue-100 border border-black btn btn-sm">Login</button>
	</form>
</Card>

<script>
</script>

<div class="px-3 border shadow-md navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="text-xl font-bold">Divspace</a>
	</div>
	<div class="flex-none gap-2">
		<slot>
			<a
				href="/login"
				class="px-4 btn btn-sm btn-ghost hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-100"
				>Login</a
			>
			<a
				href="/signup"
				class="px-4 bg-blue-100 border border-black btn btn-sm hover:bg-blue-200 hover:outline-none hover:border-black"
			>
				Signup
			</a>
		</slot>
	</div>
</div>

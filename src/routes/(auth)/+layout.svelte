<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar>
	{#if $page.url.pathname === '/signup'}
		<p class="text-xs">
			Already have an account? <a href="/login" class="text-blue-500 link">Login</a>
		</p>
	{:else if $page.url.pathname === '/login'}
		<p class="text-xs">
			Don't have an account? <a href="/signup" class="text-blue-500 link">Signup</a>
		</p>
	{/if}
</Navbar>

<main class="container flex items-center justify-center min-h-screen mx-auto bg-blue-50">
	<slot />
</main>

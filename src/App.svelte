<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { ModeWatcher } from "mode-watcher";
	import Router from "svelte-spa-router";
	import { routes } from "./routes";
	import { link } from "svelte-spa-router";
	import { Separator } from "$lib/components/ui/separator";

	let links = [
		{ name: "Home", href: "/" },
		{ name: "Profile", href: "/profile" },
		{ name: "Jeproady", href: "/Jeproady" },
	];
</script>

<ModeWatcher />
<div class="flex-1 flex flex-col h-screen w-screen">
	<div class="flex h-10 ml-2 place-items-center">
		{#each links as l}
			<Button variant="link">
				<a use:link={l.href}>{l.name}</a>
			</Button>
		{/each}
	</div>
	<Router {routes} />
</div>

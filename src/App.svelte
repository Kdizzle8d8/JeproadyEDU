<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { ModeWatcher } from "mode-watcher";
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
  import { link } from "svelte-spa-router";

  let links = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
    { name: "Jeproady", href: "/Jeproady" },
  ];
</script>

<ModeWatcher />
<div class="flex flex-col w-screen h-screen">
  <div class="flex h-10 ml-2 border-b-2 border-gray-800 place-items-center">
    {#each links as l}
      <Button variant="link">
        <a use:link={l.href}>{l.name}</a>
      </Button>
    {/each}
  </div>
  <Router {routes} />
</div>

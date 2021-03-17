<script context="module" lang="ts">
    import "virtual:windi.css";
    export const prerender = true;
</script>

<script lang="ts">
    import { page, navigating } from "$app/stores";
    import Nav from "$lib/Nav.svelte";

    $: section = $page.path.split("/")[1];
</script>

<Nav />
<main class="relative max-w-4xl p-8 mx-auto box-border">
    <slot />
</main>

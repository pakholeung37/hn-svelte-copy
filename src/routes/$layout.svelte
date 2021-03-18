<script context="module" lang="ts">
    export const prerender = true;
</script>

<script lang="ts">
    import { page, navigating } from "$app/stores";
    import Nav from "$lib/Nav.svelte";
    import PreloadingIndicatior from "$lib/PreloadingIndicator.svelte";
    $: section = $page.path.split("/")[1];
</script>

<Nav {section} />
{#if $navigating}
    <PreloadingIndicatior />
{/if}
<main>
    <slot />
</main>

<style>
    main {
        position: relative;
        max-width: 56em;
        padding: 2em;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>

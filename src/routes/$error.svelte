<script lang="ts">
    import { dev } from "$app/env";

    export let status;
    export let error;

    const offline =
        typeof navigator !== "undefined" && navigator.onLine === false;
    const title = offline ? "Offline" : status;
    const message = offline ? "Find the internet and try again" : error.message;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1 class="text-4xl mx-auto mb-2 font-bold">{title}</h1>

<p class="my-4 mx-auto">{message}</p>

{#if dev && error.stack}
    <pre>{error.stack}</pre>
{/if}

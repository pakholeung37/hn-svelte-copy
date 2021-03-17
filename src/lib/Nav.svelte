<script lang="ts">
    export let section;
</script>

<nav class="h-12 bg-white border-b border-orange-400 font-thin px-4">
    <img
        alt="Svelte Hacker News logo"
        class="block w-4 h-4 float-left text-xl relative top-1 box-border mt-1"
        src="/favicon.ico"
    />
    <ul class="m-0 p-0">
        <li class="block">
            <a
                sveltekit:prefetch
                href="/top/1"
                class:selected={section === "top"}>top</a
            >
        </li>
    </ul>
</nav>

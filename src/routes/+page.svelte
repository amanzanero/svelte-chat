<script lang="ts">
  import trpcClient from "$lib/trpcClient/client";
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

{#await trpcClient.query("hello.world")}
  <!-- promise is pending -->
  <p class="mt-4">waiting for the promise to resolve...</p>
{:then value}
  <h2 class="mt-4">Hello {value}</h2>
{/await}

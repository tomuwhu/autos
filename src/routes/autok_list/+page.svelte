<script>
    import { browser } from '$app/environment';
    import { persist, createLocalStorage } from "@macfja/svelte-persistent-store"
    import { writable } from 'svelte/store';
    const user = browser ? persist(writable({}), createLocalStorage(), "user") : null
    import { onMount } from 'svelte';
    var cars  = []
    var users = []
    onMount(async() => {
        cars = await 
            fetch('http://localhost:3000/car')
                .then(v => v.json())           
        users = await
            fetch('http://localhost:3000/user')
                .then(v => v.json())
    })
</script>
{#if $user}
<h6>Bejelentkezve: {$user.name} ({$user.email})</h6>
<table>
    <tr>
        <th>Brand</th>
        <th>Type</th>
        <th>Year</th>
        <th>Price</th>
        <th>Stars</th>
        <th>Owner</th>
    </tr>
    {#each cars as car}
        <tr>
            {#if car.tulaj == $user.id}
            <td>
                <input type="text" bind:value={car.brand}
                on:input={async () => {
                    await fetch(`http://localhost:3000/car/${car.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({id: car.id, brand: car.brand}),
                        headers: { 'Content-Type': 'application/json' }
                    })
                }}>
            </td>
            {:else}
            <td>{car.brand}</td>
            {/if}
            {#if car.tulaj == $user.id}
            <td>
                <input type="text" bind:value={car.type}
                on:input={async () => {
                    await fetch(`http://localhost:3000/car/${car.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({id: car.id, type: car.type}),
                        headers: { 'Content-Type': 'application/json' }
                    })
                }}>
            </td>
            {:else}
            <td>{car.type}</td>
            {/if}
            {#if car.tulaj == $user.id}
            <td>
                <input type="number" bind:value={car.year}
                on:input={async () => {
                    await fetch(`http://localhost:3000/car/${car.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({id: car.id, year: car.year}),
                        headers: { 'Content-Type': 'application/json' }
                    })
                }}>
            </td>
            {:else}
            <td>{car.year}</td>
            {/if}
            <td>{car.price}</td>
            <td>{
                Array.from({length: car.stars}).fill("*").join("")
            }</td>
            {#if car.tulaj}
            <td>{users.filter(v => v.id == car.tulaj)[0]?.name || "Cica"}</td>
            {/if}
        </tr>
    {/each}
</table>
{:else}
<h1>Nincs bejelentkezve</h1>
{/if}
<style>
    table {
        margin: auto;
        border-collapse: collapse;
        border: 1px solid black;
    }
    td, th {
        border: 1px solid black;
        padding: 10px;
    }
</style>
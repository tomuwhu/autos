<script>
    import { base } from '$app/paths'
    var jsonsrever
    if (base == '/autos') jsonsrever = 'https://my-json-server.typicode.com/tomuwhu/jsonserver'
    else jsonsrever = 'http://localhost:3000'
    import { browser } from '$app/environment';
    import { persist, createLocalStorage } from "@macfja/svelte-persistent-store"
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';
    var user = browser ? persist(writable({}), createLocalStorage(), "user") : null 
    var urlap = {
        brand: '',
        type: '',
        year: '',
        price: '',
        stars: '',
        tulaj: $user?.id
    }
</script>
<br><br>
{#if $user}
<form>
    <table>
        <tr>
            <th>Brand</th><td><input type="text" bind:value={urlap.brand}></td>
        </tr>
        <tr>    
            <th>Type</th><td><input type="text" bind:value={urlap.type}></td>
        </tr>
        <tr>
            <th>Year</th><td><input type="number" bind:value={urlap.year}></td>
        </tr>
        <tr>
            <th>Price</th><td><input type="number" bind:value={urlap.price}></td>    
        </tr>
        <tr>    
            <th>Stars</th><td><input type="number" bind:value={urlap.stars}></td>    
        </tr>
    </table>
    <button type="submit" on:click={async () => {
        var data = await fetch(`${jsonsrever}/car`,
         { method: 'POST', 
           body: JSON.stringify(urlap),
           headers: { 'Content-Type': 'application/json' }
         }).then(v => v.json())
        goto(`${base}/autok_list`)
    }}>Felvesz</button>
</form>
{:else}
<h1>Nincs bejelentkezve</h1>
<hr>
{/if}
<style>
        form {
        margin: auto;
        text-align: center;
        display: block;
        width: 300px;
        background-color: bisque;
        padding:20px;
        border: 1px solid black;
    }
    td {
        width: 400px;
    }
</style>
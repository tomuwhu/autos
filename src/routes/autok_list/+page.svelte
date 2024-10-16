<script>
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
        console.log(users.filter(v => v.id == 1)[0]); 
    })
</script>

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
            <td>{car.brand}</td>
            <td>{car.type}</td>
            <td>{car.year}</td>
            <td>{car.price}</td>
            <td>{
                Array.from({length: car.stars}).fill("*").join("")
            }</td>
            {#if car.tulaj}
            <td>{users.filter(v => v.id == car.tulaj)[0]?.name}</td>
            {/if}
        </tr>
    {/each}
</table>
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
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

        users.forEach(user => {
            cars.forEach(car => {
                if (car.tulaj == user.id) {
                    car.tulaj = user
                }
            })
        })  
    })
</script>

<table>
    <tr>
        <th>Brand</th>
        <th>Type</th>
        <th>Year</th>
        <th>Price</th>
        <th>Stars</th>
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
<script>
    import { onMount } from 'svelte';
    var cars=[]
    onMount(async() => {
        cars = await 
            fetch('http://localhost:3000/car')
                .then(v => v.json())
    })
</script>
<h1>Autók listája</h1>
<table>
    {#each cars as car}
        <tr>
            <td>{car.brand}</td>
            <td>{car.type}</td>
            <td>{car.year}</td>
            <td>{car.price}</td>
            <td>{
                Array.form({size: car.stars}).fill("*")
            }</td>
        </tr>
    {/each}
</table>
<style>

</style>
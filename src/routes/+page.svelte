<script>
    import { onMount } from 'svelte';
    var users=[]
    onMount(async() => {
        users = await 
            fetch('http://localhost:3000/user')
                .then(v => v.json())
    })
</script>
<h1>Bejelentkezés</h1>

{#each users as user}
    <p>{user.name}</p>
{/each}
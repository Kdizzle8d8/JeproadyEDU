<script lang="ts">
  export let props: string = "";
  export let color: string = "bg-blue-500";
  export let content: string = "+";
  export let onClick: () => void = () => {};
</script>

<button class=" {props} font-semibold before:bg-black text-white {color} hover:bg-opacity-70 transition-all rounded-md" on:click={onClick}>{content}</button>

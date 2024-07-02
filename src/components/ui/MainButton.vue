<template>
  <button
    class="w-[150px] bg-c-1 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-c-3 before:to-c-4 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-c-2 hover:text-c-1 border-none hover:bg-c-2"
  >
    <slot />
  </button>
</template>

<script lang="js" setup></script>

<style></style>

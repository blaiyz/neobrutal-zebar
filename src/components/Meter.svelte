<script lang="ts">
  type Props = {
    percent: number;
    class?: string;
    children?: any;
    animate?: boolean;
  };
  let { percent, class: className, children, animate = true }: Props = $props();

  let normalizedPercent = $derived(
    Number.isNaN(percent) ? 0 : Math.max(0, Math.min(100, percent))
  );

  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = $derived(circumference * (1 - normalizedPercent / 100));
</script>

<div class="relative group {className}">
  <div
    class="flex justify-center items-center aspect-square h-full {animate ? "transition-all duration-300 ease-in-out group-hover:translate-y-full group-hover:opacity-0" : ""}"
  >
    <svg
      class="h-full"
      viewBox="0 0 {size} {size}"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- Background circle -->
      <circle
        class="stroke-zb-border"
        stroke-width={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
      ></circle>
      <!-- Progress circle -->
      <circle
        class={className}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        stroke-dasharray={circumference}
        stroke-dashoffset={strokeDashoffset}
        transform="rotate(-90 {size / 2} {size / 2})"
      ></circle>
    </svg>
    <div class="absolute inset-0 flex items-center justify-center">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>

  {#if animate}
    <span
      class="absolute inset-0 flex items-center justify-center text-md transform -translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
    >
      {normalizedPercent}%
    </span>
  {/if}
</div>

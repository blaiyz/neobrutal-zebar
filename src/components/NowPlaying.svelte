<script lang="ts">
  import type { GlazeWmOutput, MediaOutput } from "zebar";
  import Meter from "./Meter.svelte";

  let { glazewm, media }: { glazewm: GlazeWmOutput; media: MediaOutput } =
    $props();

  const secondsToHms = (d: number) => {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    return `${h > 0 ? h + ":" : ""}${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };
</script>

{#if glazewm?.allMonitors && glazewm?.currentMonitor?.id === glazewm.allMonitors[0]?.id && media?.currentSession}
  <div class="flex items-center gap-3">
    <button
      class="transition hover:text-zb-accent hover:scale-125 duration-300"
      aria-label="Previous"
      onclick={() => media.previous()}
    >
      <i class="ti ti-player-skip-back"></i>
    </button>
    <button
      class="relative gap-x-2 inline-flex items-center justify-center group transition duration-300 hover:text-zb-accent"
      aria-label="Toggle"
      onclick={() => media.togglePlayPause()}
    >
      <Meter
        animate={false}
        class="stroke-zb-accent h-8"
        percent={Math.round(
          (media.currentSession.position / media.currentSession.endTime) * 100
        )}
      >
        <i
          class="ti ti-{media.currentSession.isPlaying
            ? 'player-pause'
            : 'player-play'}
             transform group-hover:scale-125"
        ></i>
      </Meter>
      <div class="relative flex items-center justify-center min-w-24 max-w-md">
        <span
          class="transition duration-300 ease-in-out group-hover:translate-y-full group-hover:opacity-0"
        >
          <p class="truncate">
            {media.currentSession.title}
          </p>
        </span>
        <span
          class="absolute inset-0 inline-flex items-center justify-center transform -translate-y-full {media
            .currentSession.title
            ? 'opacity-0'
            : ''} transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          {secondsToHms(media.currentSession.position)}/{secondsToHms(
            media.currentSession.endTime
          )}
        </span>
      </div>
    </button>
    <button
      class="transition hover:text-zb-accent hover:scale-125 duration-300"
      aria-label="Next"
      onclick={() => media.next()}
    >
      <i class="ti ti-player-skip-forward"></i>
    </button>
  </div>
{/if}

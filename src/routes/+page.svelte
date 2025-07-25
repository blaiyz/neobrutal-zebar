<script lang="ts">
  import { onMount } from "svelte";
  import * as zebar from "zebar";
  import type {
    BatteryOutput,
    CpuOutput,
    GlazeWmOutput,
    MemoryOutput,
    DateOutput,
    NetworkOutput,
    WeatherOutput,
    MediaOutput,
  } from "zebar";

  import { Effect } from "@tauri-apps/api/window";

  import "../app.css";
  import Group from "../components/Group.svelte";
  import LeftGroup from "../components/LeftGroup.svelte";
  import RightGroup from "../components/RightGroup.svelte";
  import Workspaces from "../components/Workspaces.svelte";

  let battery = $state<BatteryOutput | null>();
  let cpu = $state<CpuOutput | null>();
  let date = $state<DateOutput | null>();
  let glazewm = $state<GlazeWmOutput | null>();
  let memory = $state<MemoryOutput | null>();
  let network = $state<NetworkOutput | null>();
  let weather = $state<WeatherOutput | null>();
  let media = $state<MediaOutput | null>();

  onMount(() => {
    const providers = zebar.createProviderGroup({
      battery: { type: "battery" },
      cpu: { type: "cpu", refreshInterval: 2000 },
      date: { type: "date", formatting: "HH:mm" },
      glazewm: { type: "glazewm" },
      memory: { type: "memory"},
      network: { type: "network", refreshInterval: 2000 },
      weather: { type: "weather" },
      media: { type: "media", refreshInterval: 1000 },
    });

    providers.onOutput(() => {
      battery = providers.outputMap.battery;
      cpu = providers.outputMap.cpu;
      date = providers.outputMap.date;
      glazewm = providers.outputMap.glazewm;
      memory = providers.outputMap.memory;
      network = providers.outputMap.network;
      weather = providers.outputMap.weather;
      media = providers.outputMap.media;
    });

/*     
    Found a way to set window effects
    Requires adding the following line to packages/desktop/capabilities/widget.json under permissions (zebar source code):
        "core:window:allow-set-effects"
    Then rebuild and install zebar.
    
    It is then possible to set window effects like so:
    const window = zebar?.currentWidget()?.window;
    window.tauri.setEffects({ effects: [Effect.Acrylic]})

    This is a temporary solution while waiting for https://github.com/glzr-io/zebar/pull/133 (one might say it's even better)
    I will come back to this later to play around with it.
 */
  });
</script>

<div
  class="grid grid-cols-3 items-center h-bar my-zby mx-zbx text-zb-text text-zb-size font-base"
>
  <Group class="justify-self-start">
    <LeftGroup battery={battery!} cpu={cpu!} memory={memory!} network={network!} glazewm={glazewm!} />
  </Group>
  <Group
    class="justify-self-center {glazewm?.currentMonitor.hasFocus
      ? '!border-zb-accent border-4'
      : ''}"
  >
    <Workspaces glazewm={glazewm!} />
  </Group>
  <Group class="justify-self-end">
    <RightGroup
      date={date!}
      glazewm={glazewm!}
      weather={weather!}
      media={media!}
    />
  </Group>
</div>


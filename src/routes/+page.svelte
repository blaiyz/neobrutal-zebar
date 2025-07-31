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
    MediaOutput
  } from "zebar";

  import { Effect } from "@tauri-apps/api/window";

  import "../app.css";
  import Group from "../components/Group.svelte";
  import LeftGroup from "../components/LeftGroup.svelte";
  import RightGroup from "../components/RightGroup.svelte";
  import Workspaces from "../components/Workspaces.svelte";
  import { isOnPrimaryMonitor } from "../utils/glazeWmUtils";
  import ProcessIcons from "../components/ProcessIcons.svelte";

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
      memory: { type: "memory" },
      network: { type: "network", refreshInterval: 2000 },
      weather: { type: "weather" },
      media: { type: "media", refreshInterval: 1000 }
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
    const window = zebar?.currentWidget()?.tauriWindow;
    window.setEffects({ effects: [Effect.Acrylic] });

    This is a temporary solution while waiting for https://github.com/glzr-io/zebar/pull/133 (one might say it's even better)
 */
    const window = zebar?.currentWidget()?.tauriWindow;
    window.setEffects({ effects: [Effect.Acrylic] });
  });
</script>

<div
  class="h-bar text-zb-text text-zb-size font-base transition-colors bg-gradient-to-t {glazewm
    ?.currentMonitor.hasFocus
    ? 'from-gray-400/40'
    : 'from-zb-base/40'} to-zb-base/0"
>
  <div class="my-zby h-full grid grid-cols-[1fr_auto_1fr] items-center">
    <Group
      leftCurve={false}
      class="justify-self-start h-full px-4 {isOnPrimaryMonitor(glazewm)
        ? 'pl-zlby'
        : ''}"
    >
      <LeftGroup
        battery={battery!}
        cpu={cpu!}
        memory={memory!}
        network={network!}
        glazewm={glazewm!}
      />
    </Group>
    <div class="h-full w-full grid grid-cols-[1fr_auto_1fr] items-center">
      <Group rightCurve={false} class="justify-self-end pl-3">
        <Workspaces glazewm={glazewm!} />
      </Group>
      <Group leftCurve={false} class="pr-4">
        <ProcessIcons glazewm={glazewm!} />
      </Group>
    </div>
    <Group
      rightCurve={false}
      class="justify-self-end px-4 {isOnPrimaryMonitor(glazewm)
        ? 'pr-zrby'
        : ''}"
    >
      <RightGroup
        date={date!}
        glazewm={glazewm!}
        weather={weather!}
        media={media!}
      />
    </Group>
  </div>
</div>

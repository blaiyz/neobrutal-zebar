<script lang="ts">
  import type { SplitContainer, Window } from "glazewm";
  import type { GlazeWmOutput } from "zebar";
  import type { Workspace } from "glazewm";

  import iconMap from "$lib/icon_map.json";
  import ignoredApps from "$lib/ignored_apps.json";

  import Button from "./Button.svelte";
  import { getWindows } from "../utils/glazeWmUtils";
  import { ArrowRightLeft } from "@lucide/svelte";

  const getProcessIcon = (child: Window) => {
    const possibleAppNames = [
      child.title.toLowerCase(),
      child.processName.toLowerCase()
    ];

    if (ignoredApps.find((app) => possibleAppNames.includes(app.name))) return;

    let entry = iconMap.find((entry) =>
      entry.appNames
        .map((name) => name.toLowerCase())
        .some((name) => possibleAppNames.includes(name))
    );

    return entry?.iconName ?? "ti-background";
  };
  let { glazewm }: { glazewm: GlazeWmOutput } = $props();

  const workspaceEquals = (ws1: Workspace, ws2: Workspace) => {
    return ws1.id === ws2.id;
  };

</script>

{#if glazewm}
  <div class="flex flex-row gap-2 items-center">
    {#each glazewm.allWorkspaces as workspace, i}
      {#if glazewm.currentWorkspaces.some( (ws) => workspaceEquals(ws, workspace) )}
        <Button
          class="box-border mx-1 px-6 text-zb-ws-{i} {workspace.isDisplayed
            ? `border-zb-ws-${i} hover:border-blend-80`
            : ''}"
          callback={() =>
            glazewm!.runCommand(`focus --workspace ${workspace.name}`)}
        >
          {workspace.name}
        </Button>
      {/if}
    {/each}
    <button
      aria-label="tiling-direction"
      class="flex items-center justify-center text-zb-tiling-direction"
      onclick={() => glazewm!.runCommand("toggle-tiling-direction")}
    >
        <ArrowRightLeft class="transform {glazewm?.tilingDirection === "vertical"
          ? "rotate-90"
          : "rotate-0"}" />
      <!-- <i class="ti ti-switch-{glazewm?.tilingDirection}"></i> -->
    </button>
    {#each glazewm.bindingModes as bindingMode, i}
      <div class="flex items-center">
        <button
          class="pb-[4px]"
          onclick={() => {
            switch (bindingMode.name.toLowerCase()) {
              case "pause":
                glazewm!.runCommand("wm-disable-binding-mode --name pause");
                break;

              case "resize":
                glazewm!.runCommand("wm-disable-binding-mode --name resize");
                break;

              default:
                break;
            }
          }}
        >
          {bindingMode.displayName ?? bindingMode.name}
        </button>
      </div>
    {/each}
    <div class="flex items-center gap-1">
      {#if glazewm.displayedWorkspace}
        {#each getWindows(glazewm.displayedWorkspace) as child}
          {@const icon = getProcessIcon(child as Window)}
          {#if icon}
            <span
              class="flex items-center text-xl {child.hasFocus
                ? "text-zb-focused-process"
                : "text-zb-process"}"
            >
              <i class="ti {icon}"></i>
            </span>
          {/if}
        {/each}
      {/if}
    </div>
  </div>
{/if}

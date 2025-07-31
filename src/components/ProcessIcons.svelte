<script lang="ts">
  import type { Monitor, SplitContainer, Window } from "glazewm";
  import type { GlazeWmOutput } from "zebar";
  import type { Workspace } from "glazewm";
  import { getWindows, isOnPrimaryMonitor } from "../utils/glazeWmUtils";

  type ProcessIconsProps = {
    glazewm: GlazeWmOutput;
  };

  let { glazewm }: ProcessIconsProps = $props();

  const uniqueWindows = (windows: Window[]) => {
    const seen = new Set();
    return windows.filter((window) => {
      const key = window.processName + window.className;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
  };

  const getWindowCount = (glazewm: GlazeWmOutput) => {
    const currentMonitor = glazewm.currentMonitor;
    if (!currentMonitor) return 0;

    if (isOnPrimaryMonitor(glazewm)) {
      return uniqueWindows(glazewm.allWindows).length;
    }

    const workspaces = currentMonitor.children;
    let windows: Window[] = [];
    for (const workspace of workspaces) {
      windows.push(...getWindows(workspace));
    }
    return uniqueWindows(windows).length;
  };
</script>

<div class="flex items-center">
  {#if glazewm}
    <div class="flex items-center" style="width: calc({getWindowCount(glazewm)} * var(--process-icon-width));"></div>
  {/if}
</div>

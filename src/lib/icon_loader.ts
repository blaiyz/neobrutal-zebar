import type { Icon as IconType } from "@tabler/icons-svelte";

const iconMap: { appNames: string[]; icon: IconType }[] = [];

// We are importing the icons statically for offline support and treeshaking.
import Terminal_2 from "@tabler/icons-svelte/icons/terminal-2";
iconMap.push({ appNames: ["alacritty", "wezterm", "wezterm-gui", "windowsterminal", "wt"], icon: Terminal_2 });

import BrandVscode from "@tabler/icons-svelte/icons/brand-vscode";
iconMap.push({ appNames: ["code"], icon: BrandVscode });

import BrandVisualStudio from "@tabler/icons-svelte/icons/brand-visual-studio";
iconMap.push({ appNames: ["devenv"], icon: BrandVisualStudio });

import BrandTeams from "@tabler/icons-svelte/icons/brand-teams";
iconMap.push({ appNames: ["ms-teams"], icon: BrandTeams });

import Mail from "@tabler/icons-svelte/icons/mail";
iconMap.push({ appNames: ["airmail", "olk"], icon: Mail });

import BrandArc from "@tabler/icons-svelte/icons/brand-arc";
iconMap.push({ appNames: ["arc"], icon: BrandArc });

import BrandChrome from "@tabler/icons-svelte/icons/brand-chrome";
iconMap.push({ appNames: ["chrome", "chromium", "thorium"], icon: BrandChrome });

import BrandFirefox from "@tabler/icons-svelte/icons/brand-firefox";
iconMap.push({ appNames: ["firefox"], icon: BrandFirefox });

import CircleLetterZ from "@tabler/icons-svelte/icons/circle-letter-z";
iconMap.push({ appNames: ["zen"], icon: CircleLetterZ });

import BrandEdge from "@tabler/icons-svelte/icons/brand-edge";
iconMap.push({ appNames: ["msedge"], icon: BrandEdge });

import BrandDiscord from "@tabler/icons-svelte/icons/brand-discord";
iconMap.push({ appNames: ["discord"], icon: BrandDiscord });

import BrandSpotify from "@tabler/icons-svelte/icons/brand-spotify";
iconMap.push({ appNames: ["spotify"], icon: BrandSpotify });

import Spy from "@tabler/icons-svelte/icons/spy";
iconMap.push({ appNames: ["azure vpn client", "AutoHotkey Window Spy", "ProtonVPN", "clash-verge"], icon: Spy });

import Screenshot from "@tabler/icons-svelte/icons/screenshot";
iconMap.push({ appNames: ["snippingtool"], icon: Screenshot });

import Settings from "@tabler/icons-svelte/icons/settings";
iconMap.push({ appNames: ["control panel", "settings", "FanControl"], icon: Settings });

import Folder from "@tabler/icons-svelte/icons/folder";
iconMap.push({ appNames: ["explorer", "dopus", "fpilot"], icon: Folder });

import Photo from "@tabler/icons-svelte/icons/photo";
iconMap.push({ appNames: ["photos"], icon: Photo });

import Headphones from "@tabler/icons-svelte/icons/headphones";
iconMap.push({ appNames: ["sound"], icon: Headphones });

import FileSpreadsheet from "@tabler/icons-svelte/icons/file-spreadsheet";
iconMap.push({ appNames: ["excel"], icon: FileSpreadsheet });

import Note from "@tabler/icons-svelte/icons/note";
iconMap.push({ appNames: ["onenote"], icon: Note });

import Presentation from "@tabler/icons-svelte/icons/presentation";
iconMap.push({ appNames: ["powerpnt"], icon: Presentation });

import FileWord from "@tabler/icons-svelte/icons/file-word";
iconMap.push({ appNames: ["winword"], icon: FileWord });

import Palette from "@tabler/icons-svelte/icons/palette";
iconMap.push({ appNames: ["mspaint"], icon: Palette });

import BrandSteam from "@tabler/icons-svelte/icons/brand-steam";
iconMap.push({ appNames: ["steam"], icon: BrandSteam });

import HexagonLetterV from "@tabler/icons-svelte/icons/hexagon-letter-v";
iconMap.push({ appNames: ["neovide", "gvim"], icon: HexagonLetterV });

import BrandDocker from "@tabler/icons-svelte/icons/brand-docker";
iconMap.push({ appNames: ["Docker Desktop"], icon: BrandDocker });

import BrandKotlin from "@tabler/icons-svelte/icons/brand-kotlin";
iconMap.push({ appNames: ["clion64", "idea64", "pycharm64", "webstorm64", "goland64", "rider64", "rustrover64"], icon: BrandKotlin });

import BrandTelegram from "@tabler/icons-svelte/icons/brand-telegram";
iconMap.push({ appNames: ["telegram", "unigram"], icon: BrandTelegram });

import BrandWechat from "@tabler/icons-svelte/icons/brand-wechat";
iconMap.push({ appNames: ["WeChat"], icon: BrandWechat });

import BrandQq from "@tabler/icons-svelte/icons/brand-qq";
iconMap.push({ appNames: ["QQ"], icon: BrandQq });

import BrandXbox from "@tabler/icons-svelte/icons/brand-xbox";
iconMap.push({ appNames: ["Xbox"], icon: BrandXbox });

import Check from "@tabler/icons-svelte/icons/check";
iconMap.push({ appNames: ["Microsoft To Do"], icon: Check });

import Music from "@tabler/icons-svelte/icons/music";
iconMap.push({ appNames: ["Media Player", "AppleMusic", "Cider"], icon: Music });

import Markdown from "@tabler/icons-svelte/icons/markdown";
iconMap.push({ appNames: ["Typora"], icon: Markdown });

import Notebook from "@tabler/icons-svelte/icons/notebook";
iconMap.push({ appNames: ["Obsidian", "zotero"], icon: Notebook });

import FileTypePdf from "@tabler/icons-svelte/icons/file-type-pdf";
iconMap.push({ appNames: ["SumatraPDF", "Acrobat Reader", "Foxit Reader", "sioyek"], icon: FileTypePdf });

import FileZip from "@tabler/icons-svelte/icons/file-zip";
iconMap.push({ appNames: ["7zFM", "WinRAR", "WinZip", "bandizip"], icon: FileZip });

import BrandAndroid from "@tabler/icons-svelte/icons/brand-android";
iconMap.push({ appNames: ["MuMuPlayer"], icon: BrandAndroid });

export default iconMap;
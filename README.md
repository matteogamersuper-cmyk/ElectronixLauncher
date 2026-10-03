# ElectronixLauncher

**ElectronixLauncher** is a modern, fast, cross-platform Minecraft launcher created by **matteogamersuper-cmyk**.

This project is based on the [official EML Template](https://github.com/Electron-Minecraft-Launcher/EML-Template), with its original Electron + Vite foundation and EML Lib integration.

Powered by <a href="https://github.com/Electron-Minecraft-Launcher/EML-Lib-v2"><b>EML Lib</b></a>

![ElectronixLauncher](./.github/assets/screenshot.png)

[<p align="center"><img src="https://img.shields.io/badge/Discord-EML-5561e6?&style=for-the-badge">](https://emlproject.com/discord/github)
[<img src="https://img.shields.io/badge/platforms-Windows,_macOS,_Linux-0077DA?style=for-the-badge&color=0077DA">](#platforms)
[<img src="https://img.shields.io/badge/version-1.2.0-orangered?style=for-the-badge&color=orangered">](package.json)</p>

---

## Introduction

ElectronixLauncher uses the official EML Template as its **Electron + Vite** foundation and uses **EML Lib** for Minecraft authentication and launching. It currently runs with local configuration and does not require EML AdminTool.

## Features

- **Next-gen performance**: Built on **Vite**, offering instant startup and Hot-Module-Replacement (HMR).
- **Microsoft authentication**: Full integration of the official authentication flow via EML Lib.
- **Asset management**: Smart downloading of game files (Java, libraries, assets, mods) with hash validation via EML Lib.
- **Skin & cape management**: View and equip skins and capes directly from the launcher.

## Installation & Development

### Prerequisites

Before starting, ensure you have installed:

- **Node.js** (v18 or higher recommended)
- **npm** (or Yarn/Pnpm)

### Setup

1.  From the ElectronixLauncher project folder, install dependencies:

    ```bash
    npm install
    ```

    _Note: This will automatically install `eml-lib` and build tools._

2.  Start in Development mode:

    ```bash
    npm run dev
    ```

    An Electron window will open with hot-reloading enabled.

## Configuration

### Launcher configuration

The default Minecraft version and static profile are defined in `electron/const.ts`. Change `MINECRAFT_VERSION` there to select a specific Minecraft release; it defaults to `latest_release`.

### Icon customization

To change the visual identity, replace the files in the `build/` folder:

- `icon.png`: Standard icon (512x512).
- `icon.ico`: For Windows.
- `icon.icns`: For macOS (Legacy & Liquid Glass fallback).
- `background.png`: DMG Installer background (macOS).

### Build (distribution)

To create the final executables for distribution:

| Platform | Command               | Output format               |
| -------- | --------------------- | --------------------------- |
| Windows  | `npm run release:win` | `.exe` (NSIS Installer)     |
| macOS    | `npm run release:mac` | `.dmg` (Disk Image)         |
| Linux    | `npm run release:lin` | `.AppImage`, `.deb`, `.rpm` |

Compiled files will be located in the `release/` folder.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Installation for users

### Installation
if you want to install the app go to releases and download the latest version

> For Now this Application is only for Windows, The upcoming v2 version will add official support for macOS and Linux, as well as bug fixes and new features.

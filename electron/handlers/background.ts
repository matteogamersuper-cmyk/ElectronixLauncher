import { ipcMain } from 'electron'

export function registerBackgroundHandlers() {
  ipcMain.handle('background:get', () => null)
}


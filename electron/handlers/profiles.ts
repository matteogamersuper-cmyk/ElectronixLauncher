import { ipcMain } from 'electron'
import { PROFILES } from '../const'

export function registerProfilesHandlers() {
  ipcMain.handle('profiles:get', () => PROFILES)
}

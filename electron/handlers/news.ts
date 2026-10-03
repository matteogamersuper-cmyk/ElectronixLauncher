import { ipcMain } from 'electron'
import type { INews } from 'eml-lib'

const news: INews[] = [
  {
    id: 'firstreleasenews',
    title: 'Benvenuti su ElectronixLauncher',
    content: '**Benvenuti su ElectronixLauncher!**\n\nSiamo entusiasti di presentare un Launcher per minecraft nuovo con interfaccia grafica Bella',
    author: { id: 'matteo', username: 'Owner of This Launcher | Matteo' },
    createdAt: new Date('2026-10-03T12:00:00Z'),
    tags: [{ title: 'Release', color: '#ff6b35' }]
  }
]

export function registerNewsHandlers() {
  ipcMain.handle('news:get_news', () => news)
  ipcMain.handle('news:get_categories', () => [])
}

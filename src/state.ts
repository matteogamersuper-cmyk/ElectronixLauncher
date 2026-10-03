import type { Account, IAvatar, ICape, ISkin } from 'eml-lib'
import logger from 'electron-log/renderer'
import shared from './shared'

export type ViewName = 'loading' | 'login' | 'home' | 'settings'
export type BlockingViewName = 'maintenance' | 'update'

export function getUser() {
  return shared.account
}

export async function setUser(account: Account, assets: { skins: ISkin[] | null; capes: ICape[] | null; avatar: IAvatar | null }) {
  shared.account = account
  shared.skins = assets.skins
  shared.capes = assets.capes
  shared.avatar = assets.avatar
  document.body.classList.remove('guest-mode')
  updateGuestControls(false)
  await updateUserInterface()
}

export function setGuestMode() {
  shared.account = null
  shared.skins = null
  shared.capes = null
  shared.avatar = null
  document.body.classList.add('guest-mode')
  updateGuestControls(true)

  const nameEl = document.getElementById('user-name')
  const rankEl = document.getElementById('user-rank')
  const avatarEl = document.getElementById('user-avatar') as HTMLImageElement | null
  if (nameEl) nameEl.innerText = 'Guest'
  if (rankEl) rankEl.innerText = 'Guest mode'
  if (avatarEl) avatarEl.src = '/src/static/images/logo.png'
}

export function logout() {
  shared.account = null
  shared.skins = null
  shared.capes = null
  shared.avatar = null
  document.body.classList.remove('guest-mode')
  updateGuestControls(false)
  const nameEl = document.getElementById('user-name')
  const rankEl = document.getElementById('user-rank')
  const avatarEl = document.getElementById('user-avatar') as HTMLImageElement | null
  if (nameEl) nameEl.innerText = 'Undefined'
  if (rankEl) rankEl.innerText = 'Member'
  if (avatarEl) avatarEl.removeAttribute('src')
}

function updateGuestControls(isGuest: boolean) {
  const playButton = document.getElementById('btn-play') as HTMLButtonElement | null
  if (playButton) {
    playButton.disabled = isGuest
    playButton.title = isGuest ? 'Sign in to launch Minecraft' : ''
  }
}

async function updateUserInterface() {
  if (!shared.account || !shared.skins) return

  logger.log('Updating UI for user:', shared.account.name)

  const nameEl = document.getElementById('user-name')
  const avatarEl = document.getElementById('user-avatar') as HTMLImageElement
  const nameSettingsEl = document.getElementById('settings-user-name')
  const uuidSettingsEl = document.getElementById('settings-user-uuid')
  const typeSettingsEl = document.getElementById('settings-user-type')
  const avatarSettingsEl = document.getElementById('settings-user-avatar') as HTMLImageElement

  if (nameEl) nameEl.innerText = shared.account.name
  if (avatarEl) avatarEl.src = shared.avatar?.url ?? 'https://minotar.net/avatar/steve/256.png'
  if (nameSettingsEl) nameSettingsEl.innerText = shared.account.name
  if (uuidSettingsEl) uuidSettingsEl.innerText = `UUID: ${shared.account.uuid}`
  if (typeSettingsEl) typeSettingsEl.innerHTML = getAccountIcon(shared.account.meta.type)
  if (avatarSettingsEl) avatarSettingsEl.src = shared.avatar?.url ?? 'https://minotar.net/avatar/steve/256.png'

  shared.resetMainView()
  shared.resetSkinViews()
  shared.resetCapesViews()
}

export function setView(view: ViewName) {
  const target = document.querySelector(`.view[data-view="${view}"]`) as HTMLElement
  if (!target) return logger.error(`View ${view} not found`)

  const isOverlay = target.classList.contains('overlay')

  if (view === 'settings') resetSettingsTab()

  if (!isOverlay) {
    document.querySelectorAll('.view').forEach((el) => {
      if (!el.classList.contains('overlay')) {
        el.classList.remove('active')
      }
    })
  }

  target.classList.add('active')
}

export function setBlockingView(view: BlockingViewName) {
  setTimeout(() => {
    document.querySelector('div#view-loading')?.classList.add('loaded')
  }, 400)
  setTimeout(() => {
    document.querySelector(`div#view-${view}`)?.classList.add('loaded')
  }, 200)
}

export function closeOverlay(view: ViewName) {
  const target = document.querySelector(`.view[data-view="${view}"]`)
  target?.classList.remove('active')
}

function getAccountIcon(type: 'msa' | 'yggdrasil' | 'azuriom' | 'crack') {
  switch (type) {
    case 'msa':
      return '<i class="fa-brands fa-microsoft"></i>Microsoft account'
    case 'yggdrasil':
      return '<i class="fa-solid fa-user"></i>Yggdrasil account'
    case 'azuriom':
      return '<i class="fa-brands fa-globe"></i>Azuriom account'
    case 'crack':
      return '<i class="fa-solid fa-user-slash"></i>Cracked account'
    default:
      return 'Unknown account type'
  }
}

function resetSettingsTab() {
  const tabButtons = document.querySelectorAll('.nav-btn')
  const tabContents = document.querySelectorAll('.tab-content')
  tabButtons.forEach((b) => b.classList.remove('active'))
  tabContents.forEach((content) => content.classList.remove('active'))

  tabButtons[0].classList.add('active')
  tabContents[0].classList.add('active')
}



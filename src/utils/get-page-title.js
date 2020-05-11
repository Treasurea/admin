import defaultSettings from '@/settings'

const title = defaultSettings.title || 'IAM用户管理'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

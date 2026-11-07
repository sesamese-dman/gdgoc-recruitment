import { useFetch } from './useFetch'

const API_URL = 'https://gdgoc-ugm-api.vercel.app/api/navigation'

const fallbackLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Overview', href: '/overview' },
  { label: 'Contact', href: '/contact' },
]

export function useNavigation() {
  const { data } = useFetch(API_URL)
  return data?.data?.length > 0 ? data.data : fallbackLinks
}
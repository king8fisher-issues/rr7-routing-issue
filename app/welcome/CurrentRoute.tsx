import { useLocation } from "react-router"

export default function CurrentRoute() {
  const location = useLocation()
  return (
    <div className="flex flex-row gap-px p-1 bg-white/5">
      <span>{location.pathname}</span>
      <span className="opacity-50">{location.search}</span>
      <span className="opacity-25">{location.hash}</span>
    </div>
  )
}

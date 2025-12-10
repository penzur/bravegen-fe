import { settingsNav } from "~/config/nav";
import { SideNav, type NavSection } from "./ui/nav";

const navs = Object.keys(settingsNav).reduce((s: Array<NavSection>, n) => {
  s = [...s, {
    title: n,
    items: settingsNav[n],
  }]

  return s
}, [])

export default function SettingsNav({ className }: { className?: string }) {
  return (
    <SideNav config={navs} className={`w-full ${className}`} />
  );
};

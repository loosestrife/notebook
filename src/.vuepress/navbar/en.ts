import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {text: "Java", icon: "java", link: "/java/"},
  {text: "Web", icon: "web", link: "/web/"},
  {text: "Python", icon: "python", link: "/python/"},

  {
    text: "Theme",
    icon: "book",
    link: "/tool/theme.md",
  },
]);

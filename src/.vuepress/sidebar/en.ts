import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
  ],
  "/cpp/": [
    {
      text: "C++",
      icon: "code",
      link: "/cpp/",
      children: "structure",
    },
  ],
  "/java/": [
    {
      text: "Java Programming",
      icon: "code",
      link: "/java/",
      children: "structure",
    },
  ],
  "/python/": [
    {
      text: "Python And AI",
      icon: "python",
      link: "/python/",
      children: "structure",
    },
  ],
  "/tool/": [
    {
      text: "常用软件和开发工具",
      icon: "application",
      link: "/tool/",
      children: "structure",
    },
  ],
  "/web/": [
    {
      text: "前端开发知识体系",
      icon: "application",
      link: "/web/",
      children: "structure",
    },
  ],
  "/interview/": [
    {
      text: "Java开发面试内容",
      icon: "java",
      link: "/interview/",
      children: "structure",
    },
  ]
});

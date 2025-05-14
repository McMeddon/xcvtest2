import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Landscape Designer McMeddons",
  subTitle: "Custom Worlds for your Adventure",
  brandTitle: "McMeddon",

  description: "Custom Minecraft Survival and Creative Worlds",

  site: "https://mcmeddon.com",
  base: "/mcmeddoncom2025/",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_features,
      href: "/features",
    },
        {
      nameKey: I18nKeys.nav_bar_world_dynmaps,
      href: "/world-dynmaps",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
   
    {
      nameKey: I18nKeys.nav_bar_pricing,
      href: "/commissions",
    },
  
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
  ],

  username: "McMeddon",
  sign: "Digital Enviroment Designer",
  avatarUrl: "./mcmeddonprofilepicture.gif",
  /* avatarUrl: "https://static.planetminecraft.com/files/avatar/1592432_7.jpg", */
  socialLinks: [
    {
      icon: "line-md:my-location",
      link: "https://www.planetminecraft.com/member/mcmeddon/",
    },
    {
      icon: "line-md:patreon",
      link: "https://www.patreon.com/c/mcmeddon",
    },
    {
      icon: "line-md:account",
      link: "https://www.tiktok.com/McMeddon",
    },
    {
      icon: "line-md:at",
      link: "https://www.twitter.com/McMeddon",
    },
    {
      icon: "line-md:discord",
      link: "http://discord.mcmeddon.com",
    },
    {
      icon: "line-md:instagram",
      link: "https://www.instagram.com/McMeddon",
    },
    {
      icon: "line-md:pixelfed",
      link: "https://www.pinterest.com/McMeddon",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://static.planetminecraft.com/files/image/minecraft/project/2025/560/18693660-zk_xl.webp",
  ],
/*   banners: [
    "https://static.planetminecraft.com/files/image/minecraft/project/2025/560/18693660-zk_xl.webp",
    "https://static.planetminecraft.com/files/image/minecraft/project/2025/560/18693672-f_xl.webp",
    "https://static.planetminecraft.com/files/image/minecraft/project/2025/228/18752337-o_xl.webp",
    "https://static.planetminecraft.com/files/image/minecraft/project/2024/843/17943122-lewothumb_xl.webp",
    "https://static.planetminecraft.com/files/image/minecraft/project/2025/228/18752338-p_xl.webp",
    "https://static.planetminecraft.com/files/image/minecraft/project/2025/228/18752343-e_xl.webp",
    "https://static.planetminecraft.com/files/image/minecraft/project/2025/105/18528661-e_xl.webp",
  ], */

  slugMode: "RAW", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP" // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;

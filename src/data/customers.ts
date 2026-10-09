/**
 * Only customers whose logo we can attribute with confidence are listed.
 * The previous wall carried ~30 files named `row9-4.jpg` with empty alt text;
 * those are intentionally dropped — 30 named logos carry more weight than
 * 60 half-anonymous ones, and empty alt text is an accessibility defect.
 *
 * `name` is used as the alt text, so it must be the real company name.
 */

export type CustomerGroup = 'top' | 'studio' | 'platform'

export interface Customer {
  name: string
  logo: string
  group: CustomerGroup
}

export const CUSTOMERS: Customer[] = [
  // ─── Leading publishers and studios ───
  { name: '腾讯游戏 Tencent Games', logo: '/images/logos/tencent.webp', group: 'top' },
  { name: '网易游戏 NetEase Games', logo: '/images/logos/netease.webp', group: 'top' },
  { name: '字节跳动 ByteDance', logo: '/images/logos/bytedance.webp', group: 'top' },
  { name: '叠纸游戏 Papergames', logo: '/images/logos/diezhi.webp', group: 'top' },
  { name: '莉莉丝游戏 Lilith Games', logo: '/images/logos/lilith.webp', group: 'top' },
  { name: 'FunPlus', logo: '/images/logos/funplus.webp', group: 'top' },
  { name: '哔哩哔哩 Bilibili', logo: '/images/logos/bilibili.webp', group: 'top' },
  { name: '完美世界 Perfect World', logo: '/images/logos/wanmei.webp', group: 'top' },
  { name: '巨人网络 Giant Network', logo: '/images/logos/juren.webp', group: 'top' },
  { name: '吉比特 G-bits', logo: '/images/logos/jibit.webp', group: 'top' },
  { name: '游族网络 Youzu Interactive', logo: '/images/logos/youzu.webp', group: 'top' },
  { name: '紫龙游戏 Zilong Games', logo: '/images/logos/zilong.webp', group: 'top' },

  // ─── Studios and development teams ───
  { name: '散爆网络 Sunborn', logo: '/images/logos/sanbao.webp', group: 'studio' },
  { name: '畅游 Changyou', logo: '/images/logos/changyou.webp', group: 'studio' },
  { name: '盛趣游戏 Shengqu Games', logo: '/images/logos/shengqu.webp', group: 'studio' },
  { name: '中手游 CMGE', logo: '/images/logos/zhongshouyou.webp', group: 'studio' },
  { name: '智明星通 Elex', logo: '/images/logos/zhimingxingtong.webp', group: 'studio' },
  { name: '大梦龙途 Loongcheer', logo: '/images/logos/damenglongtu.webp', group: 'studio' },
  { name: '心光流美 Xinguang Liumei', logo: '/images/logos/xinguangliumei.webp', group: 'studio' },
  { name: '假面科技 Jiamian', logo: '/images/logos/jiamian.webp', group: 'studio' },
  { name: '百易科技 Baiyi', logo: '/images/logos/baiyi.webp', group: 'studio' },
  { name: '魔瞳科技 Motong', logo: '/images/logos/motong.webp', group: 'studio' },
  { name: '唯乐游 Weileyou', logo: '/images/logos/weileyou.webp', group: 'studio' },
  { name: '利比科技 Libi', logo: '/images/logos/libi.webp', group: 'studio' },
  { name: '忽然科技 Huran', logo: '/images/logos/huran.webp', group: 'studio' },
  { name: '一点网络 Yidian', logo: '/images/logos/yidian.webp', group: 'studio' },

  // ─── Platforms and global publishing ───
  { name: 'IGG', logo: '/images/logos/igg.webp', group: 'platform' },
  { name: 'Tap4fun', logo: '/images/logos/tap4fun.webp', group: 'platform' },
  { name: 'Mico World', logo: '/images/logos/mico.webp', group: 'platform' },
  { name: 'JJ World', logo: '/images/logos/jjworld.webp', group: 'platform' },
  { name: 'BabyBus 宝宝巴士', logo: '/images/logos/babybus.webp', group: 'platform' },
  { name: '百度 VR Baidu VR', logo: '/images/logos/baiduvr.webp', group: 'platform' },
  { name: 'Playful Studios', logo: '/images/logos/row10-6.webp', group: 'platform' },
]

export const CUSTOMER_GROUPS: CustomerGroup[] = ['top', 'studio', 'platform']

export function customersInGroup(group: CustomerGroup): Customer[] {
  return CUSTOMERS.filter((c) => c.group === group)
}

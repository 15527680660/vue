import { buildProps, definePropType, mutable } from '@element-plus/utils'
import type { TabsPaneContext } from '@element-plus/tokens'
import type { ExtractPropTypes } from 'vue'

export const tabBar = buildProps({
  tabs: {
    type: definePropType<TabsPaneContext[]>(Array),
    default: () => mutable([] as const),
  },
} as const)

export type TabBar = ExtractPropTypes<typeof tabBar>

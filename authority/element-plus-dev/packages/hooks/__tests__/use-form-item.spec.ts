import { h, provide } from 'vue'
import { NOOP } from '@vue/shared'
import { mount } from '@vue/test-utils'
import { ElButton } from '@element-plus/components'
import {
  elFormKey,
  elFormItemKey,
  buttonGroupContextKey,
} from '@element-plus/tokens'

import type {
  ElFormContext,
  ElFormItemContext,
  ButtonGroupContext,
} from '@element-plus/tokens'

const AXIOM = 'Rem is the best girl'

const Component = {
  render() {
    return h(ElButton, this.$attrs, {
      default: () => [AXIOM],
    })
  },
}

const mountComponent = (setup = NOOP, options = {}) => {
  return mount(
    {
      ...Component,
      setup,
    },
    options
  )
}

describe('use-form-item', () => {
  it('should return local value', () => {
    const wrapper = mountComponent()
    expect(wrapper.find('.el-button--default').exists()).toBe(true)
  })

  it('should return props.size instead of injected.size', () => {
    const propSize = 'small'
    const wrapper = mountComponent(
      () => {
        provide(elFormItemKey, {
          size: 'large',
        } as ElFormItemContext)
      },
      {
        props: {
          size: propSize,
        },
      }
    )

    expect(wrapper.find(`.el-button--${propSize}`).exists()).toBe(true)
  })

  it('should return fallback.size instead inject.size', () => {
    const fallbackSize = 'small'
    const wrapper = mountComponent(() => {
      provide(buttonGroupContextKey, {
        size: fallbackSize,
      } as ButtonGroupContext)

      provide(elFormItemKey, {
        size: 'large',
      } as ElFormItemContext)
    })

    expect(wrapper.find(`.el-button--${fallbackSize}`).exists()).toBe(true)
  })

  it('should return formItem.size instead form.size', () => {
    const itemSize = 'small'
    const wrapper = mountComponent(() => {
      provide(elFormItemKey, {
        size: itemSize,
      } as ElFormItemContext)

      provide(elFormKey, {
        size: 'large',
      } as ElFormContext)
    })

    expect(wrapper.find(`.el-button--${itemSize}`).exists()).toBe(true)
  })
})

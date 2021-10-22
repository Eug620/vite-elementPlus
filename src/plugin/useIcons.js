import * as ElementPlusIcons from '@element-plus/icons'

// 初始化所有icon
export const useInitIcons = (app) => {
  for(var icon in ElementPlusIcons) {
    app.component(icon, ElementPlusIcons[icon])
  }
}

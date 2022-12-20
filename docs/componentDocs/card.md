# Card

卡片组件

### 示例

<!-- 这个是部署到github下的lollipope-ui仓库下 所以添加lollipope-ui  -->
<l-card imgSrc='lollopope-ui/001.jpg' summary='card component'/>

### 代码

```html
<l-card imgSrc="/001.jpg" summary="card component" />
```

### Attributes

| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
| --------- | ------------ | ----------- | -------- | ------ |
| width     | 卡片的宽度   | Number      | false    | -      |
| imgUrl    | 图片资源地址 | String      | true     | -      |
| imgHeight | 图片高度     | Number      | false    | -      |
| summary   | 图片概要     | String/Slot | false    | -      |
| footer    | 卡片底部     | Slot        | false    | -      |

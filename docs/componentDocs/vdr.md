# Vdr

拖拽组件

### 示例

<!-- 这个是部署到github下的lollipope-ui仓库下 所以添加lollipope-ui  -->

<div style="width:100%; height:300px; border:1px dashed #ccc ; position:relative;">
<h1 style="padding:0;margin:0;width:100%;height:100%;line-height:300px; position:absolute; top:0;left:0; text-align:center;font-size:30px;font-weight:bold;">父容器</h1>
    <l-vdr
    style='background:#82fbf9'
        :w="200"
        :h="200"
        :parent="true"
        :min-width="20"
        :min-height="20"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="20"
        >可拖拽组件
    </l-vdr>
</div>

### 代码

```html
<vdr
  :w="200"
  :h="200"
  :min-width="20"
  :min-height="20"
  :isConflictCheck="true"
  :snap="true"
  :snapTolerance="20"
>
</vdr>
```

### Attributes

| 参数            | 说明                                                           | 类型    | 是否必要 | 默认值 |
| --------------- | -------------------------------------------------------------- | ------- | -------- | :----: |
| w               | 宽度                                                           | Number  | false    |  200   |
| h               | 高度                                                           | Number  | false    |  200   |
| min-width       | 最小宽度                                                       | Number  | false    |   0    |
| min-height      | 最小高度                                                       | Number  | false    |   0    |
| isConflictCheck | 定义组件是否开启冲突检测                                       | Boolean | false    | false  |
| snap            | 定义组件是否开启冲突检测                                       | Boolean | false    | false  |
| snapTolerance   | 当调用 snap 时，定义组件与元素之间的对齐距离，以像素(px)为单位 | Number  | false    |   5    |

> 其他属性 参考 [vue-draggable-resizable-lollipope](https://www.npmjs.com/package/vue-draggable-resizable-lollipope)

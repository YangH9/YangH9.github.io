<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="人生进度表" :hoverable="true">
      <MainDom></MainDom>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { computed, reactive, inject } from 'vue'

const dayjs = inject('dayjs')

const formData = reactive({
  nowDay: dayjs(),
  birthday: null,
  maxYear: 80,
  degree: null,
  unit: 12
})
const dayTypeList = [
  { label: '出生', color: '#a1a1aa', year: 3 },
  { label: '幼儿园', color: '#dc2626', year: 3 },
  { label: '小学', color: '#fb923c', year: 6 },
  { label: '初中', color: '#facc15', year: 3 },
  { label: '高中', color: '#fb7185', year: 3 },
  { label: '大学专科', color: '#c084fc', year: 3 },
  { label: '大学本科', color: '#22d3ee', year: 4 },
  { label: '硕士', color: '#f472b6', year: 3 },
  { label: '博士', color: '#a3e635', year: 4 },
  { label: '平凡的一天', color: '#bbf7d0' },
  { label: '今天', color: '#0284c7' }
]
const degreeOption = {
  1: { value: 1, day: [5], label: '专科' },
  2: { value: 2, day: [6], label: '本科' },
  3: { value: 3, day: [6, 7], label: '硕士' },
  4: { value: 4, day: [6, 7, 8], label: '博士' }
}
const unitOption = {
  1: { value: 1, day: 365, label: '年', key: 'year' },
  12: { value: 12, day: 30, label: '月', key: 'month' },
  52: { value: 52, day: 7, label: '周', key: 'week' },
  365: { value: 365, day: 1, label: '日', key: 'day' }
}
// 校准 0 的日期，对比今天与生日日期
const firstDay = computed(() => dayjs.min(formData.nowDay, formData.birthday))
const dayArray = computed(() => {
  const { nowDay, birthday, unit, degree } = formData
  // 今天
  const toDayIdx = Math.abs(firstDay.value.diff(nowDay, unitOption[unit].key))
  const birthdayIdx = Math.abs(firstDay.value.diff(birthday, unitOption[unit].key))
  const arr = dayTypeList
    .filter((_, i) => i < 5 || degreeOption[degree]?.day.includes(i))
    .reduce(
      (total, item) => [
        ...total,
        {
          ...item,
          start: total.at(-1)?.end + 1 || 0,
          end: (total.at(-1)?.end || -1) + item.year * unit
        }
      ],
      []
    )
  arr.push({
    ...dayTypeList.at(-2),
    start: arr.at(-1).end,
    end: toDayIdx - 1
  })
  arr.push({
    ...dayTypeList.at(-1),
    start: toDayIdx,
    end: toDayIdx
  })
  if (birthdayIdx) {
    arr.length = 0
    arr[0] = {
      ...dayTypeList.at(-1),
      start: toDayIdx,
      end: toDayIdx
    }
    arr[1] = {
      ...dayTypeList[0],
      start: birthdayIdx,
      end: birthdayIdx
    }
  }
  console.log(arr)
  return arr
})

const MainDom = () => (
  <>
    <a-form model={formData}>
      <a-row gutter={24}>
        <a-col span={24} md={12}>
          <a-form-item label="生日">
            <a-date-picker v-model:value={formData.birthday} placeholder="生日" class="w_100" />
          </a-form-item>
        </a-col>
        <a-col span={24} md={12}>
          <a-form-item label="预计寿命">
            <a-input-number v-model:value={formData.maxYear} min={1} max={200} class="w_100" />
          </a-form-item>
        </a-col>
        <a-col span={24} md={12}>
          <a-form-item label="最高学历">
            <a-select v-model:value={formData.degree} allowClear placeholder="最高学历" class="grow">
              {Object.values(degreeOption).map(item => (
                <a-select-option value={item.value}>{item.label}</a-select-option>
              ))}
            </a-select>
          </a-form-item>
        </a-col>
        <a-col span={24} md={12}>
          <a-form-item label="显示粒度" class="grow">
            <a-radio-group v-model:value={formData.unit}>
              {Object.values(unitOption).map(item => (
                <a-radio value={item.value}>{item.label}</a-radio>
              ))}
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-divider class="my_4" />
    <a-space align="center" wrap>
      {dayTypeList.map(item => (
        <div class="d_flex center gap_1">
          <div style={{ backgroundColor: item.color }} class="square"></div>
          {item.label}
        </div>
      ))}
    </a-space>
    {formData.birthday && (
      <>
        <a-divider class="my_4" />
        <a-space size={4} wrap>
          <p>你的生日：{formData.birthday.format('YYYY-MM-DD')}</p>
          <p>预计寿命：{formData.maxYear}岁</p>
          {formData.nowDay.diff(formData.birthday, unitOption[formData.unit].key) > 0 ? (
            <>
              <p>
                已经存活
                {formData.nowDay.diff(formData.birthday, unitOption[formData.unit].key)}
                {unitOption[formData.unit].label}
              </p>
              <p>
                还剩
                {formData.birthday.add(formData.maxYear, 'year').diff(formData.nowDay, unitOption[formData.unit].key)}
                {unitOption[formData.unit].label}
              </p>
            </>
          ) : (
            <p>
              还有
              {formData.birthday.diff(formData.nowDay, unitOption[formData.unit].key)}
              {unitOption[formData.unit].label}
              出生
            </p>
          )}
          <p>祝大家长命百岁</p>
        </a-space>
      </>
    )}
    {formData.maxYear ? (
      <>
        <a-divider class="my_4" />
        <a-space size={4} wrap>
          {Array.from({ length: formData.unit * formData.maxYear }, (_, index) => {
            const item =
              (index === dayArray.value.at(-1).end
                ? dayArray.value.at(-1)
                : index < dayArray.value.at(-1).end
                  ? dayArray.value.find(i => i.start <= index && i.end >= index)
                  : null) || {}
            const date = firstDay.value?.add(index, unitOption[formData.unit].key)
            const attribute = {
              style: { backgroundColor: item?.color },
              data: `${item?.label || ''} ${date.format('YYYY年MM月DD日')}`
            }
            return (
              <a-tooltip v-slots={{ title: () => `${item?.label || ''} ${date.format('YYYY年MM月DD日')}` }}>
                <div class="square" {...attribute}></div>
              </a-tooltip>
            )
          })}
        </a-space>
      </>
    ) : (
      ''
    )}
  </>
)
</script>

<style scoped lang="scss">
:deep(.square) {
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border-width: 0;
  position: relative;
  background-color: #ebedf0;
}
</style>

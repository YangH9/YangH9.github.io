<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-layout-content>
      <MyTable :data="tableData" :columns="columnData" :cellStyle="cellStyle"></MyTable>
      <div class="my_3">
        <el-button class="mx_2" @click="setColumn">修改显示列</el-button>
        <el-button class="mx_2" @click="printView">导出预览</el-button>
      </div>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { computed, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import Breadcrumb from '@/components/Breadcrumb.vue'
import '@/utils/grhtml5-6.8-min.js'
import data1 from './data/data1.json'
import data2 from './data/data2.json'

const config = {
  lineSize: 4, // 单行最大数
  pagesize: 10 // 单页最大数
}

const columnObject = {
  HAD: { HADh: '列表1', HADd: '列表2', HADa: '列表3' },
  HHAD: { HHADh: '列表4', HHADd: '列表5', HHADa: '列表6' },
  crsList: {
    s00s00: '0.0',
    s00s01: '0.1',
    s00s02: '0.2',
    s00s03: '0.3',
    s00s04: '0.4',
    s00s05: '0.5',
    s01s00: '1.0',
    s01s01: '1.1',
    s01s02: '1.2',
    s01s03: '1.3',
    s01s04: '1.4',
    s01s05: '1.5',
    s02s00: '2.0',
    s02s01: '2.1',
    s02s02: '2.2',
    s02s03: '2.3',
    s02s04: '2.4',
    s02s05: '2.5',
    s03s00: '3.0',
    s03s01: '3.1',
    s03s02: '3.2',
    s03s03: '3.3',
    s04s00: '4.0',
    s04s01: '4.1',
    s04s02: '4.2',
    s05s00: '5.0',
    s05s01: '5.1',
    s05s02: '5.2',
    's-1sh': 'a其他',
    's-1sd': 'b其他',
    's-1sa': 'c其他'
  },
  hafuList: { hh: 'aa', hd: 'ab', ha: 'ac', dh: 'ba', dd: 'bb', da: 'bc', ah: 'ca', ad: 'cb', aa: 'cc' },
  ttgList: { s0: '00', s1: '01', s2: '02', s3: '03', s4: '04', s5: '05', s6: '06', s7: '07' }
}

const defaultColumn = [
  { prop: 'matchNumStr', label: '编号', group: 0, minWidth: 100, disabled: true, fixed: 'left', color: true },
  { prop: 'matchDate', label: '时间', group: 0, minWidth: 120, disabled: true, fixed: 'left' },
  { prop: 'allName', label: '菜系', group: 0, minWidth: 120 },
  ...Object.entries(columnObject)
    .map(([key, value]) =>
      Object.entries(value).map(([k, v]) => ({ prop: k, label: v, group: key, minWidth: 85, checkbox: true }))
    )
    .flat(1)
]

const getData = () =>
  new Promise((resolve, reject) => {
    // axios.get('url').then((res) => {
    //   resolve(data1)
    // })
    setTimeout(() => {
      resolve(data1)
    }, 300)
  })
const getData1 = dataObj =>
  new Promise((resolve, reject) => {
    // axios.get('url', { params: { dataObj } }).then((res) => {
    //   resolve(data2)
    // })
    setTimeout(() => {
      resolve(data2)
    }, 300)
  })
const columnData = ref([])
const tableData = ref([])

const init = async () => {
  // 获取主要数据
  const {
    value: { matchInfoList }
  } = await getData()

  const mapRes = matchInfoList
    .flatMap(i => i.subMatchList)
    .filter(i => i.matchStatus === 'Selling')
    .map(
      i =>
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (resolve, reject) => {
          const obj = {
            matchId: i.matchId,
            matchNumStr: i.matchNumStr,
            matchDate: i.matchDate,
            homeTeamAllName: i.homeTeamAllName,
            leagueAllName: i.leagueAllName,
            backColor: i.backColor
          }
          i.oddsList.forEach(j => {
            if (['HAD', 'HHAD'].includes(j.poolCode)) {
              obj[`${j.poolCode}a`] = { value: j.a, prop: `${j.poolCode}a`, checked: false }
              obj[`${j.poolCode}d`] = { value: j.d, prop: `${j.poolCode}d`, checked: false }
              obj[`${j.poolCode}h`] = { value: j.h, prop: `${j.poolCode}h`, checked: false }
            }
          })
          // 按matchId查询数据
          const {
            value: { oddsHistory: detailData }
          } = await getData1({ matchId: obj.matchId })
          // eslint-disable-next-line semi-style
          ;['crsList', 'hafuList', 'ttgList'].forEach(key => {
            const detail = detailData[key]?.reduce(
              (total, item) =>
                new Date(`${total.updateDate} ${total.updateTime}`) < new Date(`${item.updateDate} ${item.updateTime}`)
                  ? item
                  : total,
              { updateDate: '1970', updateTime: '0:0' }
            )
            Object.keys(detail).forEach(key => {
              obj[key] = { value: detail[key], prop: key, checked: false }
            })
          })
          resolve(obj)
        })
    )
  const data = await Promise.all(mapRes)
  columnData.value = defaultColumn.map(i => ({
    ...i,
    align: 'center',
    active: i.active ?? i.disabled ?? true,
    render: ({ row, column }) =>
      i.checkbox && row[column.property] ? (
        <el-checkbox v-model={row[column.property].checked}>{row[column.property].value}</el-checkbox>
      ) : column.property === 'allName' ? (
        `${row.homeTeamAllName} ${row.leagueAllName}`
      ) : (
        row[column.property]
      )
  }))
  tableData.value = data
}
init()

const setColumn = () => {
  const column = ref(columnData.value.map(i => ({ ...i, value: i.prop })))
  const defaultActiveList = column.value.filter(i => i.disabled).map(i => i.value)
  const activeList = ref(column.value.filter(i => i.active).map(i => i.value))
  const checkAll = computed(() => activeList.value.length === column.value.length)
  const indeterminate = computed(() => activeList.value.length > 0 && activeList.value.length < column.value.length)
  const groupOption = computed(() => {
    const active = activeList.value
    const colum = column.value
    const obj = {}
    Object.keys(columnObject).forEach(key => {
      const col = colum.filter(i => i.group === key)
      const act = active.filter(i => col.find(a => i === a.prop))
      obj[key] = {
        checkAll: act.length === col.length,
        indeterminate: act.length > 0 && act.length < col.length
      }
    })
    return obj
  })
  console.log(column.value)
  ElMessageBox({
    customStyle: {
      maxWidth: '60%'
    },
    message: () => (
      <>
        <div>
          <el-checkbox
            model-value={checkAll.value}
            indeterminate={indeterminate.value}
            onChange={() =>
              checkAll.value
                ? (activeList.value = JSON.parse(JSON.stringify(defaultActiveList)))
                : (activeList.value = column.value.filter(i => i.active).map(i => i.value))
            }
          >
            全选
          </el-checkbox>
          {Object.keys(columnObject).map(key => (
            <el-checkbox
              model-value={groupOption.value[key].checkAll}
              indeterminate={groupOption.value[key].indeterminate}
              onChange={() =>
                !groupOption.value[key].checkAll
                  ? (activeList.value = [
                      ...new Set([...activeList.value, ...column.value.filter(i => i.group === key).map(i => i.prop)])
                    ])
                  : (activeList.value = activeList.value.filter(
                      i => column.value.find(a => a.prop === i)?.group !== key
                    ))
              }
            >
              {key}
            </el-checkbox>
          ))}
        </div>
        <el-divider class="my_3" />
        <el-checkbox-group v-model={activeList.value}>
          {column.value.map(item => (
            <el-checkbox label={item.value} disabled={item.disabled}>
              {item.label}
            </el-checkbox>
          ))}
        </el-checkbox-group>
      </>
    )
  }).then(() => {
    const list = activeList.value
    columnData.value.forEach(i => (i.active = list.includes(i.prop)))
  })
}

const cellStyle = ({ row, column }) =>
  column.property === 'matchNumStr' && { backgroundColor: `#${row.backColor}`, color: '#fff' }

const getCheckData = () => {
  const column = JSON.parse(JSON.stringify(columnData.value))
  const data = tableData.value
    .filter(i => Object.values(i).find(i => i?.checked && column.find(j => j.prop === i?.prop)?.active))
    .map(item => ({
      matchDate: item.matchDate,
      matchId: item.matchId,
      matchNumStr: item.matchNumStr,
      checkList: column.filter(i => item[i.prop]?.checked && i?.active).map(i => item[i.prop])
    }))
  return data
}

const printView = () => {
  const checkData = getCheckData()
  const reportURL = './file/table1Grf.grf'
  const data = {
    Table: [
      {
        MemoBox3: checkData
          .map(i => [
            i.matchNumStr,
            ...i.checkList.reduce((total, item, index) => {
              let list = total
              index % config.lineSize
                ? (list[list.length - 1] += `+${item.value}`)
                : list
                  ? (list[list.length] = `+${item.value}`)
                  : (list = [item.value])
              return list
            }, '')
          ])
          .concat(Array.from({ length: config.pagesize }, () => 'xxx'))
          .flat()
          .slice(0, config.pagesize)
          .join('</br>'),
        MemoBox6: '标题内容',
        MemoBox11: new Date().toFormat('YYYY/MM/DD')
      }
    ]
  }
  ElMessageBox({
    customStyle: {
      maxWidth: '80%'
    },
    center: true,
    message: () => <div id="report_holder" class="d_inline_block border_all"></div>,
    confirmButtonText: '打印'
  }).then(() => {
    const dom = document.querySelector('#report_holder')
    const css = document.querySelectorAll('[id^="_gridcss"]')
    const printContentHtml = dom.outerHTML
    const iframe = document.createElement('iframe')
    document.body.appendChild(iframe)
    iframe.contentDocument.write([...css].map(i => i.outerHTML).join(''))
    iframe.contentDocument.write('<style media="print">@page{size:auto;margin:0;}</style>')
    iframe.contentDocument.write(printContentHtml)
    iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;')
    iframe.contentDocument.body.setAttribute('style', 'margin:0px')
    iframe.contentDocument.close()
    iframe.contentWindow.print()
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 1000)
  })
  window.rubylong.grhtml5.insertReportViewer('report_holder', reportURL, data).start()
}

const MyTable = ({ data, columns, cellStyle }) => (
  <el-table data={data} cellStyle={cellStyle} border stripe>
    {
      computed(() =>
        columns
          .filter(i => i.active)
          .map(col => <el-table-column {...col} v-slots={{ default: col.render }}></el-table-column>)
      ).value
    }
  </el-table>
)
</script>

<style scoped lang="scss">
.ant-layout-content {
  text-align: center;
}
</style>

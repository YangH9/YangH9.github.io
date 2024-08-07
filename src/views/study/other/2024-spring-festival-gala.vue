<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="2024春晚刘谦魔术揭秘" :hoverable="true">
      <template #extra>约瑟夫环</template>
      <div v-html="text"></div>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref } from 'vue'

const text = ref('')

// 定义一个函数，用于把牌堆顶n张牌移动到末尾
function moveCardBack(n, arr) {
  // 循环n次，把队列第一张牌放到队列末尾
  for (let i = 0; i < n; i++) {
    const moveCard = arr.shift() // 弹出队头元素，即第一张牌
    arr.push(moveCard) // 把原队头元素插入到序列末尾
  }
  return arr
}

// 定义一个函数，用于把牌堆顶n张牌移动到中间的任意位置
function moveCardMiddleRandom(n, arr) {
  // 插入在arr中的的位置，随机生成一个idx
  // 这个位置必须是在n+1到arr.length-1之间
  const idx = Math.floor(Math.random() * (arr.length - n - 1)) + n + 1
  // 执行插入操作
  const newArr = arr.slice(n, idx).concat(arr.slice(0, n)).concat(arr.slice(idx))
  return newArr
}

// 步骤1：初始化8张牌，假设为"ABCDABCD"
let arr = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']
text.value += `<p>步骤1：拿出4张牌，对折撕成8张，按顺序叠放。</p>`
text.value += `<p>此时序列为：${arr.join('')}</p><p>---</p>`
console.log('步骤1：拿出4张牌，对折撕成8张，按顺序叠放。')
console.log(`此时序列为：${arr.join('')}\n---`)

// 步骤2（无关步骤）：名字长度随机选取，这里取2到5（其实任意整数都行）
const nameLen = Math.floor(Math.random() * 4) + 2
// 把nameLen张牌移动到序列末尾
arr = moveCardBack(nameLen, arr)
text.value += `<p>步骤2：随机选取名字长度为${nameLen}，把第1张牌放到末尾，操作${nameLen}次。</p>`
text.value += `<p>此时序列为：${arr.join('')}</p><p>---</p>`
console.log(`步骤2：随机选取名字长度为${nameLen}，把第1张牌放到末尾，操作${nameLen}次。`)
console.log(`此时序列为：${arr.join('')}\n---`)

// 步骤3（关键步骤）：把牌堆顶三张放到中间任意位置
arr = moveCardMiddleRandom(3, arr)
text.value += `<p>步骤3：把牌堆顶3张放到中间的随机位置。</p>`
text.value += `<p>此时序列为：${arr.join('')}</p><p>---</p>`
console.log(`步骤3：把牌堆顶3张放到中间的随机位置。`)
console.log(`此时序列为：${arr.join('')}\n---`)

// 步骤4（关键步骤）：把最顶上的牌拿走
const restCard = arr.shift() // 弹出队头元素
text.value += `<p>步骤4：把最顶上的牌拿走，放在一边。</p>`
text.value += `<p>拿走的牌为：<span class="text_danger">${restCard}</span></p>`
text.value += `<p>此时序列为：${arr.join('')}</p><p>---</p>`
console.log(`步骤4：把最顶上的牌拿走，放在一边。`)
console.log(`拿走的牌为：${restCard}`)
console.log(`此时序列为：${arr.join('')}\n---`)

// 步骤5（无关步骤）：根据南方人/北方人/不确定，把顶上的1/2/3张牌插入到中间任意位置
// 随机选择1、2、3中的任意一个数字
const moveNum = Math.floor(Math.random() * 3) + 1
arr = moveCardMiddleRandom(moveNum, arr)
text.value += `<p>步骤5：我${
  moveNum === 1 ? '是南方人' : moveNum === 2 ? '是北方人' : '不确定自己是哪里人'
}，把${moveNum}张牌插入到中间的随机位置。</p>`
text.value += `<p>此时序列为：${arr.join('')}</p><p>---</p>`
console.log(
  `步骤5：我${
    moveNum === 1 ? '是南方人' : moveNum === 2 ? '是北方人' : '不确定自己是哪里人'
  }，把${moveNum}张牌插入到中间的随机位置。`
)
console.log(`此时序列为：${arr.join('')}\n---`)

// 步骤6（关键步骤）：根据性别男或女，移除牌堆顶的1或2张牌
const maleNum = Math.floor(Math.random() * 2) + 1 // 随机选择1或2
for (let i = 0; i < maleNum; i++) {
  // 循环maleNum次，移除牌堆顶的牌
  arr.shift()
}
text.value += `<p>步骤6：我是${maleNum === 1 ? '男' : '女'}生，移除牌堆顶的${maleNum}张牌。</p>`
text.value += `<p>此时序列为：${arr.join('')}</p><p>---</p>`
console.log(`步骤6：我是${maleNum === 1 ? '男' : '女'}生，移除牌堆顶的${maleNum}张牌。`)
console.log(`此时序列为：${arr.join('')}\n---`)

// 步骤7（关键步骤）：把顶部的牌移动到末尾，执行7次
arr = moveCardBack(7, arr)
text.value += `<p>步骤7：把顶部的牌移动到末尾，执行7次</p>`
text.value += `<p>此时序列为：${arr.join('')}</p><p>---</p>`
console.log(`步骤7：把顶部的牌移动到末尾，执行7次`)
console.log(`此时序列为：${arr.join('')}\n---`)

// 步骤8（关键步骤）：执行约瑟夫环过程。把牌堆顶一张牌放到末尾，再移除一张牌，直到只剩下一张牌。
text.value += `<p>步骤8：把牌堆顶一张牌放到末尾，再移除一张牌，直到只剩下一张牌。</p>`
console.log(`步骤8：把牌堆顶一张牌放到末尾，再移除一张牌，直到只剩下一张牌。`)
while (arr.length > 1) {
  const luck = arr.shift() // 好运留下来
  arr.push(luck)
  text.value += `<p>好运留下来：${luck} 此时序列为：${arr.join('')}</p>`
  console.log(`好运留下来：${luck}\t\t此时序列为：${arr.join('')}`)
  const sadness = arr.shift() // 烦恼都丢掉
  text.value += `<p>烦恼都丢掉：${sadness} 此时序列为：${arr.join('')}</p>`
  console.log(`烦恼都丢掉：${sadness}\t\t此时序列为：${arr.join('')}`)
}
text.value += `<p>---</p><p>最终结果：剩下的牌为<span class="text_danger">${arr[0]}</span>，步骤4中留下来的牌也是<span class="text_danger">${restCard}</span></p>`
console.log(`---\n最终结果：剩下的牌为${arr[0]}，步骤4中留下来的牌也是${restCard}`)
</script>

<style scoped lang="scss"></style>

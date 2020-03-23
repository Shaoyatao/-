import Vue from 'vue'
import format from 'date-fns/format'

Vue.filter('date-format',(value,formatStr)=>{
  return format(value,formatStr || 'yyyy-MM-dd HH:mm:ss')
})

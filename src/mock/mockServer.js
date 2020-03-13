import Mock from "mockjs"
import apiData from "./data"

Mock.mock("/goods",{code:0,data:apiData.goods})
Mock.mock("/info",{code:0,data:apiData.info})
Mock.mock("/ratings",{code:0,data:apiData.ratings})


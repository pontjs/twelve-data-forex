/**
 * @title Adjust Enum 数据结构
 * @description Adjust Enum 字段。
 */
export type AdjustEnum = 'all' | 'splits' | 'dividends' | 'none'

/**
 * @title Api Bad Request Error Response Body 数据结构
 * @description Api Bad Request Error Response Body 字段。
 */
export type ApiBadRequestErrorResponseBody = {
  /**
   * @title code 值
   * @description 上游错误或状态代码。
   */
  code: number;
  /**
   * @title message 值
   * @description 上游返回的说明消息。
   */
  message: string;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Api Forbidden Error Response Body 数据结构
 * @description Api Forbidden Error Response Body 字段。
 */
export type ApiForbiddenErrorResponseBody = {
  /**
   * @title code 值
   * @description 上游错误或状态代码。
   */
  code: number;
  /**
   * @title message 值
   * @description 上游返回的说明消息。
   */
  message: string;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Api Internal Server Error Response Body 数据结构
 * @description Api Internal Server Error Response Body 字段。
 */
export type ApiInternalServerErrorResponseBody = {
  /**
   * @title code 值
   * @description 上游错误或状态代码。
   */
  code: number;
  /**
   * @title message 值
   * @description 上游返回的说明消息。
   */
  message: string;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Api Not Found Error Response Body 数据结构
 * @description Api Not Found Error Response Body 字段。
 */
export type ApiNotFoundErrorResponseBody = {
  /**
   * @title code 值
   * @description 上游错误或状态代码。
   */
  code: number;
  /**
   * @title message 值
   * @description 上游返回的说明消息。
   */
  message: string;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Api Parameter Too Long Error Response Body 数据结构
 * @description Api Parameter Too Long Error Response Body 字段。
 */
export type ApiParameterTooLongErrorResponseBody = {
  /**
   * @title code 值
   * @description 上游错误或状态代码。
   */
  code: number;
  /**
   * @title message 值
   * @description 上游返回的说明消息。
   */
  message: string;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Api Too Many Requests Error Response Body 数据结构
 * @description Api Too Many Requests Error Response Body 字段。
 */
export type ApiTooManyRequestsErrorResponseBody = {
  /**
   * @title code 值
   * @description 上游错误或状态代码。
   */
  code: number;
  /**
   * @title message 值
   * @description 上游返回的说明消息。
   */
  message: string;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Api Unauthorized Error Response Body 数据结构
 * @description Api Unauthorized Error Response Body 字段。
 */
export type ApiUnauthorizedErrorResponseBody = {
  /**
   * @title code 值
   * @description 上游错误或状态代码。
   */
  code: number;
  /**
   * @title message 值
   * @description 上游返回的说明消息。
   */
  message: string;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Forex Response Item 数据结构
 * @description Forex Response Item 字段。
 */
export type ForexResponseItem = {
  /**
   * @title currency base 值
   * @description 基准货币代码。
   */
  currency_base: string;
  /**
   * @title currency group 值
   * @description currency group 字段。
   */
  currency_group: string;
  /**
   * @title currency quote 值
   * @description 报价货币代码。
   */
  currency_quote: string;
  /**
   * @title symbol 值
   * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
   */
  symbol: string;
}

/**
 * @title Format Enum 数据结构
 * @description Format Enum 字段。
 */
export type FormatEnum = 'JSON' | 'CSV'

/**
 * @title Get Currency Conversion 200 response 数据结构
 * @description Get Currency Conversion 200 response 字段。
 */
export type GetCurrencyConversion_200_response = {
  /**
   * @title amount 值
   * @description 需要换算的金额。
   */
  amount?: number;
  /**
   * @title rate 值
   * @description 外汇汇率数值。
   */
  rate: number;
  /**
   * @title symbol 值
   * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
   */
  symbol: string;
  /**
   * @title timestamp 值
   * @description 上游返回的时间标识。
   */
  timestamp: number;
}

/**
 * @title Get Eod 200 response 数据结构
 * @description Get Eod 200 response 字段。
 */
export type GetEod_200_response = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close: string;
  /**
   * @title currency 值
   * @description 货币代码。
   */
  currency?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title exchange 值
   * @description 上游返回的交易场所名称。
   */
  exchange: string;
  /**
   * @title mic code 值
   * @description mic code 字段。
   */
  mic_code?: string;
  /**
   * @title symbol 值
   * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
   */
  symbol: string;
}

/**
 * @title Get Exchange Rate 200 response 数据结构
 * @description Get Exchange Rate 200 response 字段。
 */
export type GetExchangeRate_200_response = {
  /**
   * @title rate 值
   * @description 外汇汇率数值。
   */
  rate: number;
  /**
   * @title symbol 值
   * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
   */
  symbol: string;
  /**
   * @title timestamp 值
   * @description 上游返回的时间标识。
   */
  timestamp: number;
}

/**
 * @title Get Forex Pairs 200 response 数据结构
 * @description Get Forex Pairs 200 response 字段。
 */
export type GetForexPairs_200_response = {
  /**
   * @title count 值
   * @description count 字段。
   */
  count: number;
  /**
   * @title data 值
   * @description 上游返回的数据集合。
   */
  data: Array<ForexResponseItem>;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Get Intervals 200 response 数据结构
 * @description Get Intervals 200 response 字段。
 */
export type GetIntervals_200_response = {
  /**
   * @title data 值
   * @description 上游返回的数据集合。
   */
  data: Array<string>;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Get Price 200 response 数据结构
 * @description Get Price 200 response 字段。
 */
export type GetPrice_200_response = {
  /**
   * @title price 值
   * @description 外汇价格数值。
   */
  price: string;
}

/**
 * @title Get Quote 200 response 数据结构
 * @description Get Quote 200 response 字段。
 */
export type GetQuote_200_response = {
  /**
   * @title average volume 值
   * @description average volume 字段。
   */
  average_volume?: string;
  /**
   * @title change 值
   * @description 价格变动值。
   */
  change: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close: string;
  /**
   * @title currency 值
   * @description 货币代码。
   */
  currency?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title exchange 值
   * @description 上游返回的交易场所名称。
   */
  exchange?: string;
  /**
   * @title extended change 值
   * @description extended change 字段。
   */
  extended_change?: string;
  /**
   * @title extended percent change 值
   * @description extended percent change 字段。
   */
  extended_percent_change?: string;
  /**
   * @title extended price 值
   * @description extended price 字段。
   */
  extended_price?: string;
  /**
   * @title extended timestamp 值
   * @description extended timestamp 字段。
   */
  extended_timestamp?: number;
  fifty_two_week: GetQuote_200_response_fifty_two_week;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high: string;
  /**
   * @title is market open 值
   * @description 市场是否处于开放状态。
   */
  is_market_open: boolean;
  /**
   * @title last quote at 值
   * @description last quote at 字段。
   */
  last_quote_at?: number;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low: string;
  /**
   * @title mic code 值
   * @description mic code 字段。
   */
  mic_code?: string;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open: string;
  /**
   * @title percent change 值
   * @description 价格变动百分比。
   */
  percent_change: string;
  /**
   * @title previous close 值
   * @description 前一收盘价格。
   */
  previous_close: string;
  /**
   * @title rolling 1d change 值
   * @description rolling 1d change 字段。
   */
  rolling_1d_change?: string;
  /**
   * @title rolling 7d change 值
   * @description rolling 7d change 字段。
   */
  rolling_7d_change?: string;
  /**
   * @title rolling change 值
   * @description rolling change 字段。
   */
  rolling_change?: string;
  /**
   * @title symbol 值
   * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
   */
  symbol: string;
  /**
   * @title timestamp 值
   * @description 上游返回的时间标识。
   */
  timestamp: number;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Quote 200 response fifty two week 数据结构
 * @description Get Quote 200 response fifty two week 字段。
 */
export type GetQuote_200_response_fifty_two_week = {
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title high change 值
   * @description high change 字段。
   */
  high_change?: string;
  /**
   * @title high change percent 值
   * @description high change percent 字段。
   */
  high_change_percent?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title low change 值
   * @description low change 字段。
   */
  low_change?: string;
  /**
   * @title low change percent 值
   * @description low change percent 字段。
   */
  low_change_percent?: string;
  /**
   * @title range 值
   * @description range 字段。
   */
  range?: string;
}

/**
 * @title Get Technical Indicators 200 response 数据结构
 * @description Get Technical Indicators 200 response 字段。
 */
export type GetTechnicalIndicators_200_response = {
  /**
   * @title data 值
   * @description 上游返回的数据集合。
   */
  data: Record<any, GetTechnicalIndicators_200_response_data_value>;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
}

/**
 * @title Get Technical Indicators 200 response data value 数据结构
 * @description Get Technical Indicators 200 response data value 字段。
 */
export type GetTechnicalIndicators_200_response_data_value = {
  /**
   * @title description 值
   * @description description 字段。
   */
  description: string;
  /**
   * @title enable 值
   * @description enable 字段。
   */
  enable: boolean;
  /**
   * @title full name 值
   * @description full name 字段。
   */
  full_name: string;
  output_values?: TechnicalIndicatorsResponseMacdOutputValues;
  /**
   * @title overlay 值
   * @description overlay 字段。
   */
  overlay: boolean;
  parameters?: TechnicalIndicatorsResponseMacdParameters;
  tinting?: TechnicalIndicatorsResponseMacdTinting;
  /**
   * @title type 值
   * @description 金融工具类型。
   */
  type: string;
}

/**
 * @title Get Time Series Ad Osc 200 response 数据结构
 * @description Get Time Series Ad Osc 200 response 字段。
 */
export type GetTimeSeriesAdOsc_200_response = {
  meta: GetTimeSeriesAdOsc_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAdOsc_200_response_values_inner>;
}

/**
 * @title Get Time Series Ad Osc 200 response meta 数据结构
 * @description Get Time Series Ad Osc 200 response meta 字段。
 */
export type GetTimeSeriesAdOsc_200_response_meta = any

/**
 * @title Get Time Series Ad Osc 200 response meta indicator 数据结构
 * @description Get Time Series Ad Osc 200 response meta indicator 字段。
 */
export type GetTimeSeriesAdOsc_200_response_meta_indicator = {
  /**
   * @title fast period 值
   * @description 技术指标 fast period 配置项。
   */
  fast_period: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title slow period 值
   * @description 技术指标 slow period 配置项。
   */
  slow_period: number;
}

/**
 * @title Get Time Series Ad Osc 200 response values inner 数据结构
 * @description Get Time Series Ad Osc 200 response values inner 字段。
 */
export type GetTimeSeriesAdOsc_200_response_values_inner = {
  /**
   * @title adosc 值
   * @description adosc 字段。
   */
  adosc: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ad 200 response 数据结构
 * @description Get Time Series Ad 200 response 字段。
 */
export type GetTimeSeriesAd_200_response = {
  meta: GetTimeSeriesAd_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAd_200_response_values_inner>;
}

/**
 * @title Get Time Series Ad 200 response meta 数据结构
 * @description Get Time Series Ad 200 response meta 字段。
 */
export type GetTimeSeriesAd_200_response_meta = any

/**
 * @title Get Time Series Ad 200 response meta indicator 数据结构
 * @description Get Time Series Ad 200 response meta indicator 字段。
 */
export type GetTimeSeriesAd_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Ad 200 response values inner 数据结构
 * @description Get Time Series Ad 200 response values inner 字段。
 */
export type GetTimeSeriesAd_200_response_values_inner = {
  /**
   * @title ad 值
   * @description ad 字段。
   */
  ad: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Add 200 response 数据结构
 * @description Get Time Series Add 200 response 字段。
 */
export type GetTimeSeriesAdd_200_response = {
  meta: GetTimeSeriesAdd_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAdd_200_response_values_inner>;
}

/**
 * @title Get Time Series Add 200 response meta 数据结构
 * @description Get Time Series Add 200 response meta 字段。
 */
export type GetTimeSeriesAdd_200_response_meta = any

/**
 * @title Get Time Series Add 200 response meta indicator 数据结构
 * @description Get Time Series Add 200 response meta indicator 字段。
 */
export type GetTimeSeriesAdd_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 1 值
   * @description 技术指标 series type 1 配置项。
   */
  series_type_1: string;
  /**
   * @title series type 2 值
   * @description 技术指标 series type 2 配置项。
   */
  series_type_2: string;
}

/**
 * @title Get Time Series Add 200 response values inner 数据结构
 * @description Get Time Series Add 200 response values inner 字段。
 */
export type GetTimeSeriesAdd_200_response_values_inner = {
  /**
   * @title add 值
   * @description add 字段。
   */
  add: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Adx 200 response 数据结构
 * @description Get Time Series Adx 200 response 字段。
 */
export type GetTimeSeriesAdx_200_response = {
  meta: GetTimeSeriesAdx_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAdx_200_response_values_inner>;
}

/**
 * @title Get Time Series Adx 200 response meta 数据结构
 * @description Get Time Series Adx 200 response meta 字段。
 */
export type GetTimeSeriesAdx_200_response_meta = any

/**
 * @title Get Time Series Adx 200 response meta indicator 数据结构
 * @description Get Time Series Adx 200 response meta indicator 字段。
 */
export type GetTimeSeriesAdx_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Adx 200 response values inner 数据结构
 * @description Get Time Series Adx 200 response values inner 字段。
 */
export type GetTimeSeriesAdx_200_response_values_inner = {
  /**
   * @title adx 值
   * @description adx 字段。
   */
  adx: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Adxr 200 response 数据结构
 * @description Get Time Series Adxr 200 response 字段。
 */
export type GetTimeSeriesAdxr_200_response = {
  meta: GetTimeSeriesAdxr_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAdxr_200_response_values_inner>;
}

/**
 * @title Get Time Series Adxr 200 response meta 数据结构
 * @description Get Time Series Adxr 200 response meta 字段。
 */
export type GetTimeSeriesAdxr_200_response_meta = any

/**
 * @title Get Time Series Adxr 200 response meta indicator 数据结构
 * @description Get Time Series Adxr 200 response meta indicator 字段。
 */
export type GetTimeSeriesAdxr_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Adxr 200 response values inner 数据结构
 * @description Get Time Series Adxr 200 response values inner 字段。
 */
export type GetTimeSeriesAdxr_200_response_values_inner = {
  /**
   * @title adxr 值
   * @description adxr 字段。
   */
  adxr: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Apo 200 response 数据结构
 * @description Get Time Series Apo 200 response 字段。
 */
export type GetTimeSeriesApo_200_response = {
  meta: GetTimeSeriesApo_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesApo_200_response_values_inner>;
}

/**
 * @title Get Time Series Apo 200 response meta 数据结构
 * @description Get Time Series Apo 200 response meta 字段。
 */
export type GetTimeSeriesApo_200_response_meta = any

/**
 * @title Get Time Series Apo 200 response meta indicator 数据结构
 * @description Get Time Series Apo 200 response meta indicator 字段。
 */
export type GetTimeSeriesApo_200_response_meta_indicator = {
  /**
   * @title fast period 值
   * @description 技术指标 fast period 配置项。
   */
  fast_period: number;
  /**
   * @title ma type 值
   * @description 技术指标 ma type 配置项。
   */
  ma_type: string;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title slow period 值
   * @description 技术指标 slow period 配置项。
   */
  slow_period: number;
}

/**
 * @title Get Time Series Apo 200 response values inner 数据结构
 * @description Get Time Series Apo 200 response values inner 字段。
 */
export type GetTimeSeriesApo_200_response_values_inner = {
  /**
   * @title apo 值
   * @description apo 字段。
   */
  apo: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Aroon Osc 200 response 数据结构
 * @description Get Time Series Aroon Osc 200 response 字段。
 */
export type GetTimeSeriesAroonOsc_200_response = {
  meta: GetTimeSeriesAroonOsc_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAroonOsc_200_response_values_inner>;
}

/**
 * @title Get Time Series Aroon Osc 200 response meta 数据结构
 * @description Get Time Series Aroon Osc 200 response meta 字段。
 */
export type GetTimeSeriesAroonOsc_200_response_meta = any

/**
 * @title Get Time Series Aroon Osc 200 response meta indicator 数据结构
 * @description Get Time Series Aroon Osc 200 response meta indicator 字段。
 */
export type GetTimeSeriesAroonOsc_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Aroon Osc 200 response values inner 数据结构
 * @description Get Time Series Aroon Osc 200 response values inner 字段。
 */
export type GetTimeSeriesAroonOsc_200_response_values_inner = {
  /**
   * @title aroonosc 值
   * @description aroonosc 字段。
   */
  aroonosc: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Aroon 200 response 数据结构
 * @description Get Time Series Aroon 200 response 字段。
 */
export type GetTimeSeriesAroon_200_response = {
  meta: GetTimeSeriesAroon_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAroon_200_response_values_inner>;
}

/**
 * @title Get Time Series Aroon 200 response meta 数据结构
 * @description Get Time Series Aroon 200 response meta 字段。
 */
export type GetTimeSeriesAroon_200_response_meta = any

/**
 * @title Get Time Series Aroon 200 response meta indicator 数据结构
 * @description Get Time Series Aroon 200 response meta indicator 字段。
 */
export type GetTimeSeriesAroon_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Aroon 200 response values inner 数据结构
 * @description Get Time Series Aroon 200 response values inner 字段。
 */
export type GetTimeSeriesAroon_200_response_values_inner = {
  /**
   * @title aroon down 值
   * @description aroon down 字段。
   */
  aroon_down: string;
  /**
   * @title aroon up 值
   * @description aroon up 字段。
   */
  aroon_up: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Atr 200 response 数据结构
 * @description Get Time Series Atr 200 response 字段。
 */
export type GetTimeSeriesAtr_200_response = {
  meta: GetTimeSeriesAtr_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAtr_200_response_values_inner>;
}

/**
 * @title Get Time Series Atr 200 response meta 数据结构
 * @description Get Time Series Atr 200 response meta 字段。
 */
export type GetTimeSeriesAtr_200_response_meta = any

/**
 * @title Get Time Series Atr 200 response meta indicator 数据结构
 * @description Get Time Series Atr 200 response meta indicator 字段。
 */
export type GetTimeSeriesAtr_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Atr 200 response values inner 数据结构
 * @description Get Time Series Atr 200 response values inner 字段。
 */
export type GetTimeSeriesAtr_200_response_values_inner = {
  /**
   * @title atr 值
   * @description atr 字段。
   */
  atr: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Avg Price 200 response 数据结构
 * @description Get Time Series Avg Price 200 response 字段。
 */
export type GetTimeSeriesAvgPrice_200_response = {
  meta: GetTimeSeriesAvgPrice_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAvgPrice_200_response_values_inner>;
}

/**
 * @title Get Time Series Avg Price 200 response meta 数据结构
 * @description Get Time Series Avg Price 200 response meta 字段。
 */
export type GetTimeSeriesAvgPrice_200_response_meta = any

/**
 * @title Get Time Series Avg Price 200 response meta indicator 数据结构
 * @description Get Time Series Avg Price 200 response meta indicator 字段。
 */
export type GetTimeSeriesAvgPrice_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Avg Price 200 response values inner 数据结构
 * @description Get Time Series Avg Price 200 response values inner 字段。
 */
export type GetTimeSeriesAvgPrice_200_response_values_inner = {
  /**
   * @title avgprice 值
   * @description avgprice 字段。
   */
  avgprice: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Avg 200 response 数据结构
 * @description Get Time Series Avg 200 response 字段。
 */
export type GetTimeSeriesAvg_200_response = {
  meta: GetTimeSeriesAvg_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesAvg_200_response_values_inner>;
}

/**
 * @title Get Time Series Avg 200 response meta 数据结构
 * @description Get Time Series Avg 200 response meta 字段。
 */
export type GetTimeSeriesAvg_200_response_meta = any

/**
 * @title Get Time Series Avg 200 response meta indicator 数据结构
 * @description Get Time Series Avg 200 response meta indicator 字段。
 */
export type GetTimeSeriesAvg_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Avg 200 response values inner 数据结构
 * @description Get Time Series Avg 200 response values inner 字段。
 */
export type GetTimeSeriesAvg_200_response_values_inner = {
  /**
   * @title avg 值
   * @description avg 字段。
   */
  avg: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series BBands 200 response 数据结构
 * @description Get Time Series BBands 200 response 字段。
 */
export type GetTimeSeriesBBands_200_response = {
  meta: GetTimeSeriesBBands_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesBBands_200_response_values_inner>;
}

/**
 * @title Get Time Series BBands 200 response meta 数据结构
 * @description Get Time Series BBands 200 response meta 字段。
 */
export type GetTimeSeriesBBands_200_response_meta = any

/**
 * @title Get Time Series BBands 200 response meta indicator 数据结构
 * @description Get Time Series BBands 200 response meta indicator 字段。
 */
export type GetTimeSeriesBBands_200_response_meta_indicator = {
  /**
   * @title ma type 值
   * @description 技术指标 ma type 配置项。
   */
  ma_type: string;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title sd 值
   * @description 技术指标 sd 配置项。
   */
  sd: number;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series BBands 200 response values inner 数据结构
 * @description Get Time Series BBands 200 response values inner 字段。
 */
export type GetTimeSeriesBBands_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title lower band 值
   * @description lower band 字段。
   */
  lower_band: string;
  /**
   * @title middle band 值
   * @description middle band 字段。
   */
  middle_band: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title upper band 值
   * @description upper band 字段。
   */
  upper_band: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Beta 200 response 数据结构
 * @description Get Time Series Beta 200 response 字段。
 */
export type GetTimeSeriesBeta_200_response = {
  meta: GetTimeSeriesBeta_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesBeta_200_response_values_inner>;
}

/**
 * @title Get Time Series Beta 200 response meta 数据结构
 * @description Get Time Series Beta 200 response meta 字段。
 */
export type GetTimeSeriesBeta_200_response_meta = any

/**
 * @title Get Time Series Beta 200 response meta indicator 数据结构
 * @description Get Time Series Beta 200 response meta indicator 字段。
 */
export type GetTimeSeriesBeta_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 1 值
   * @description 技术指标 series type 1 配置项。
   */
  series_type_1: string;
  /**
   * @title series type 2 值
   * @description 技术指标 series type 2 配置项。
   */
  series_type_2: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Beta 200 response values inner 数据结构
 * @description Get Time Series Beta 200 response values inner 字段。
 */
export type GetTimeSeriesBeta_200_response_values_inner = {
  /**
   * @title beta 值
   * @description beta 字段。
   */
  beta: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Bop 200 response 数据结构
 * @description Get Time Series Bop 200 response 字段。
 */
export type GetTimeSeriesBop_200_response = {
  meta: GetTimeSeriesBop_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesBop_200_response_values_inner>;
}

/**
 * @title Get Time Series Bop 200 response meta 数据结构
 * @description Get Time Series Bop 200 response meta 字段。
 */
export type GetTimeSeriesBop_200_response_meta = any

/**
 * @title Get Time Series Bop 200 response meta indicator 数据结构
 * @description Get Time Series Bop 200 response meta indicator 字段。
 */
export type GetTimeSeriesBop_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Bop 200 response values inner 数据结构
 * @description Get Time Series Bop 200 response values inner 字段。
 */
export type GetTimeSeriesBop_200_response_values_inner = {
  /**
   * @title bop 值
   * @description bop 字段。
   */
  bop: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Cci 200 response 数据结构
 * @description Get Time Series Cci 200 response 字段。
 */
export type GetTimeSeriesCci_200_response = {
  meta: GetTimeSeriesCci_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesCci_200_response_values_inner>;
}

/**
 * @title Get Time Series Cci 200 response meta 数据结构
 * @description Get Time Series Cci 200 response meta 字段。
 */
export type GetTimeSeriesCci_200_response_meta = any

/**
 * @title Get Time Series Cci 200 response meta indicator 数据结构
 * @description Get Time Series Cci 200 response meta indicator 字段。
 */
export type GetTimeSeriesCci_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Cci 200 response values inner 数据结构
 * @description Get Time Series Cci 200 response values inner 字段。
 */
export type GetTimeSeriesCci_200_response_values_inner = {
  /**
   * @title cci 值
   * @description cci 字段。
   */
  cci: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ceil 200 response 数据结构
 * @description Get Time Series Ceil 200 response 字段。
 */
export type GetTimeSeriesCeil_200_response = {
  meta: GetTimeSeriesCeil_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesCeil_200_response_values_inner>;
}

/**
 * @title Get Time Series Ceil 200 response meta 数据结构
 * @description Get Time Series Ceil 200 response meta 字段。
 */
export type GetTimeSeriesCeil_200_response_meta = any

/**
 * @title Get Time Series Ceil 200 response meta indicator 数据结构
 * @description Get Time Series Ceil 200 response meta indicator 字段。
 */
export type GetTimeSeriesCeil_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Ceil 200 response values inner 数据结构
 * @description Get Time Series Ceil 200 response values inner 字段。
 */
export type GetTimeSeriesCeil_200_response_values_inner = {
  /**
   * @title ceil 值
   * @description ceil 字段。
   */
  ceil: string;
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Cmo 200 response 数据结构
 * @description Get Time Series Cmo 200 response 字段。
 */
export type GetTimeSeriesCmo_200_response = {
  meta: GetTimeSeriesCmo_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesCmo_200_response_values_inner>;
}

/**
 * @title Get Time Series Cmo 200 response meta 数据结构
 * @description Get Time Series Cmo 200 response meta 字段。
 */
export type GetTimeSeriesCmo_200_response_meta = any

/**
 * @title Get Time Series Cmo 200 response meta indicator 数据结构
 * @description Get Time Series Cmo 200 response meta indicator 字段。
 */
export type GetTimeSeriesCmo_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Cmo 200 response values inner 数据结构
 * @description Get Time Series Cmo 200 response values inner 字段。
 */
export type GetTimeSeriesCmo_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title cmo 值
   * @description cmo 字段。
   */
  cmo: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Coppock 200 response 数据结构
 * @description Get Time Series Coppock 200 response 字段。
 */
export type GetTimeSeriesCoppock_200_response = {
  meta: GetTimeSeriesCoppock_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesCoppock_200_response_values_inner>;
}

/**
 * @title Get Time Series Coppock 200 response meta 数据结构
 * @description Get Time Series Coppock 200 response meta 字段。
 */
export type GetTimeSeriesCoppock_200_response_meta = any

/**
 * @title Get Time Series Coppock 200 response meta indicator 数据结构
 * @description Get Time Series Coppock 200 response meta indicator 字段。
 */
export type GetTimeSeriesCoppock_200_response_meta_indicator = {
  /**
   * @title long roc period 值
   * @description long roc period 字段。
   */
  long_roc_period: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title short roc period 值
   * @description short roc period 字段。
   */
  short_roc_period: number;
  /**
   * @title wma period 值
   * @description 技术指标 wma period 配置项。
   */
  wma_period: number;
}

/**
 * @title Get Time Series Coppock 200 response values inner 数据结构
 * @description Get Time Series Coppock 200 response values inner 字段。
 */
export type GetTimeSeriesCoppock_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title coppock 值
   * @description coppock 字段。
   */
  coppock: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Correl 200 response 数据结构
 * @description Get Time Series Correl 200 response 字段。
 */
export type GetTimeSeriesCorrel_200_response = {
  meta: GetTimeSeriesCorrel_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesCorrel_200_response_values_inner>;
}

/**
 * @title Get Time Series Correl 200 response meta 数据结构
 * @description Get Time Series Correl 200 response meta 字段。
 */
export type GetTimeSeriesCorrel_200_response_meta = any

/**
 * @title Get Time Series Correl 200 response meta indicator 数据结构
 * @description Get Time Series Correl 200 response meta indicator 字段。
 */
export type GetTimeSeriesCorrel_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 1 值
   * @description 技术指标 series type 1 配置项。
   */
  series_type_1: string;
  /**
   * @title series type 2 值
   * @description 技术指标 series type 2 配置项。
   */
  series_type_2: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Correl 200 response values inner 数据结构
 * @description Get Time Series Correl 200 response values inner 字段。
 */
export type GetTimeSeriesCorrel_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title correl 值
   * @description correl 字段。
   */
  correl: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Crsi 200 response 数据结构
 * @description Get Time Series Crsi 200 response 字段。
 */
export type GetTimeSeriesCrsi_200_response = {
  meta: GetTimeSeriesCrsi_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesCrsi_200_response_values_inner>;
}

/**
 * @title Get Time Series Crsi 200 response meta 数据结构
 * @description Get Time Series Crsi 200 response meta 字段。
 */
export type GetTimeSeriesCrsi_200_response_meta = any

/**
 * @title Get Time Series Crsi 200 response meta indicator 数据结构
 * @description Get Time Series Crsi 200 response meta indicator 字段。
 */
export type GetTimeSeriesCrsi_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title percent rank period 值
   * @description percent rank period 字段。
   */
  percent_rank_period: number;
  /**
   * @title rsi period 值
   * @description 技术指标 rsi period 配置项。
   */
  rsi_period: number;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title up down length 值
   * @description up down length 字段。
   */
  up_down_length: number;
}

/**
 * @title Get Time Series Crsi 200 response values inner 数据结构
 * @description Get Time Series Crsi 200 response values inner 字段。
 */
export type GetTimeSeriesCrsi_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title crsi 值
   * @description crsi 字段。
   */
  crsi: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Dema 200 response 数据结构
 * @description Get Time Series Dema 200 response 字段。
 */
export type GetTimeSeriesDema_200_response = {
  meta: GetTimeSeriesDema_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesDema_200_response_values_inner>;
}

/**
 * @title Get Time Series Dema 200 response meta 数据结构
 * @description Get Time Series Dema 200 response meta 字段。
 */
export type GetTimeSeriesDema_200_response_meta = any

/**
 * @title Get Time Series Dema 200 response meta indicator 数据结构
 * @description Get Time Series Dema 200 response meta indicator 字段。
 */
export type GetTimeSeriesDema_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Dema 200 response values inner 数据结构
 * @description Get Time Series Dema 200 response values inner 字段。
 */
export type GetTimeSeriesDema_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title dema 值
   * @description dema 字段。
   */
  dema: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Div 200 response 数据结构
 * @description Get Time Series Div 200 response 字段。
 */
export type GetTimeSeriesDiv_200_response = {
  meta: GetTimeSeriesDiv_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesDiv_200_response_values_inner>;
}

/**
 * @title Get Time Series Div 200 response meta 数据结构
 * @description Get Time Series Div 200 response meta 字段。
 */
export type GetTimeSeriesDiv_200_response_meta = any

/**
 * @title Get Time Series Div 200 response meta indicator 数据结构
 * @description Get Time Series Div 200 response meta indicator 字段。
 */
export type GetTimeSeriesDiv_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 1 值
   * @description 技术指标 series type 1 配置项。
   */
  series_type_1: string;
  /**
   * @title series type 2 值
   * @description 技术指标 series type 2 配置项。
   */
  series_type_2: string;
}

/**
 * @title Get Time Series Div 200 response values inner 数据结构
 * @description Get Time Series Div 200 response values inner 字段。
 */
export type GetTimeSeriesDiv_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title div 值
   * @description div 字段。
   */
  div: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Dpo 200 response 数据结构
 * @description Get Time Series Dpo 200 response 字段。
 */
export type GetTimeSeriesDpo_200_response = {
  meta: GetTimeSeriesDpo_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesDpo_200_response_values_inner>;
}

/**
 * @title Get Time Series Dpo 200 response meta 数据结构
 * @description Get Time Series Dpo 200 response meta 字段。
 */
export type GetTimeSeriesDpo_200_response_meta = any

/**
 * @title Get Time Series Dpo 200 response meta indicator 数据结构
 * @description Get Time Series Dpo 200 response meta indicator 字段。
 */
export type GetTimeSeriesDpo_200_response_meta_indicator = {
  /**
   * @title centered 值
   * @description centered 字段。
   */
  centered: boolean;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Dpo 200 response values inner 数据结构
 * @description Get Time Series Dpo 200 response values inner 字段。
 */
export type GetTimeSeriesDpo_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title dpo 值
   * @description dpo 字段。
   */
  dpo: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Dx 200 response 数据结构
 * @description Get Time Series Dx 200 response 字段。
 */
export type GetTimeSeriesDx_200_response = {
  meta: GetTimeSeriesDx_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesDx_200_response_values_inner>;
}

/**
 * @title Get Time Series Dx 200 response meta 数据结构
 * @description Get Time Series Dx 200 response meta 字段。
 */
export type GetTimeSeriesDx_200_response_meta = any

/**
 * @title Get Time Series Dx 200 response meta indicator 数据结构
 * @description Get Time Series Dx 200 response meta indicator 字段。
 */
export type GetTimeSeriesDx_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Dx 200 response values inner 数据结构
 * @description Get Time Series Dx 200 response values inner 字段。
 */
export type GetTimeSeriesDx_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title dx 值
   * @description dx 字段。
   */
  dx: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ema 200 response 数据结构
 * @description Get Time Series Ema 200 response 字段。
 */
export type GetTimeSeriesEma_200_response = {
  meta: GetTimeSeriesEma_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesEma_200_response_values_inner>;
}

/**
 * @title Get Time Series Ema 200 response meta 数据结构
 * @description Get Time Series Ema 200 response meta 字段。
 */
export type GetTimeSeriesEma_200_response_meta = any

/**
 * @title Get Time Series Ema 200 response meta indicator 数据结构
 * @description Get Time Series Ema 200 response meta indicator 字段。
 */
export type GetTimeSeriesEma_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Ema 200 response values inner 数据结构
 * @description Get Time Series Ema 200 response values inner 字段。
 */
export type GetTimeSeriesEma_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title ema 值
   * @description ema 字段。
   */
  ema: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Exp 200 response 数据结构
 * @description Get Time Series Exp 200 response 字段。
 */
export type GetTimeSeriesExp_200_response = {
  meta: GetTimeSeriesExp_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesExp_200_response_values_inner>;
}

/**
 * @title Get Time Series Exp 200 response meta 数据结构
 * @description Get Time Series Exp 200 response meta 字段。
 */
export type GetTimeSeriesExp_200_response_meta = any

/**
 * @title Get Time Series Exp 200 response meta indicator 数据结构
 * @description Get Time Series Exp 200 response meta indicator 字段。
 */
export type GetTimeSeriesExp_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Exp 200 response values inner 数据结构
 * @description Get Time Series Exp 200 response values inner 字段。
 */
export type GetTimeSeriesExp_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title exp 值
   * @description exp 字段。
   */
  exp: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Floor 200 response 数据结构
 * @description Get Time Series Floor 200 response 字段。
 */
export type GetTimeSeriesFloor_200_response = {
  meta: GetTimeSeriesFloor_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesFloor_200_response_values_inner>;
}

/**
 * @title Get Time Series Floor 200 response meta 数据结构
 * @description Get Time Series Floor 200 response meta 字段。
 */
export type GetTimeSeriesFloor_200_response_meta = any

/**
 * @title Get Time Series Floor 200 response meta indicator 数据结构
 * @description Get Time Series Floor 200 response meta indicator 字段。
 */
export type GetTimeSeriesFloor_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Floor 200 response values inner 数据结构
 * @description Get Time Series Floor 200 response values inner 字段。
 */
export type GetTimeSeriesFloor_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title floor 值
   * @description floor 字段。
   */
  floor: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Heikinashi Candles 200 response 数据结构
 * @description Get Time Series Heikinashi Candles 200 response 字段。
 */
export type GetTimeSeriesHeikinashiCandles_200_response = {
  meta: GetTimeSeriesHeikinashiCandles_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesHeikinashiCandles_200_response_values_inner>;
}

/**
 * @title Get Time Series Heikinashi Candles 200 response meta 数据结构
 * @description Get Time Series Heikinashi Candles 200 response meta 字段。
 */
export type GetTimeSeriesHeikinashiCandles_200_response_meta = any

/**
 * @title Get Time Series Heikinashi Candles 200 response meta indicator 数据结构
 * @description Get Time Series Heikinashi Candles 200 response meta indicator 字段。
 */
export type GetTimeSeriesHeikinashiCandles_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Heikinashi Candles 200 response values inner 数据结构
 * @description Get Time Series Heikinashi Candles 200 response values inner 字段。
 */
export type GetTimeSeriesHeikinashiCandles_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title heikincloses 值
   * @description heikincloses 字段。
   */
  heikincloses: string;
  /**
   * @title heikinhighs 值
   * @description heikinhighs 字段。
   */
  heikinhighs: string;
  /**
   * @title heikinlows 值
   * @description heikinlows 字段。
   */
  heikinlows: string;
  /**
   * @title heikinopens 值
   * @description heikinopens 字段。
   */
  heikinopens: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Hlc3 200 response 数据结构
 * @description Get Time Series Hlc3 200 response 字段。
 */
export type GetTimeSeriesHlc3_200_response = {
  meta: GetTimeSeriesHlc3_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesHlc3_200_response_values_inner>;
}

/**
 * @title Get Time Series Hlc3 200 response meta 数据结构
 * @description Get Time Series Hlc3 200 response meta 字段。
 */
export type GetTimeSeriesHlc3_200_response_meta = any

/**
 * @title Get Time Series Hlc3 200 response meta indicator 数据结构
 * @description Get Time Series Hlc3 200 response meta indicator 字段。
 */
export type GetTimeSeriesHlc3_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Hlc3 200 response values inner 数据结构
 * @description Get Time Series Hlc3 200 response values inner 字段。
 */
export type GetTimeSeriesHlc3_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title hlc3 值
   * @description hlc3 字段。
   */
  hlc3: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ht Dc Period 200 response 数据结构
 * @description Get Time Series Ht Dc Period 200 response 字段。
 */
export type GetTimeSeriesHtDcPeriod_200_response = {
  meta: GetTimeSeriesHtDcPeriod_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesHtDcPeriod_200_response_values_inner>;
}

/**
 * @title Get Time Series Ht Dc Period 200 response meta 数据结构
 * @description Get Time Series Ht Dc Period 200 response meta 字段。
 */
export type GetTimeSeriesHtDcPeriod_200_response_meta = any

/**
 * @title Get Time Series Ht Dc Period 200 response meta indicator 数据结构
 * @description Get Time Series Ht Dc Period 200 response meta indicator 字段。
 */
export type GetTimeSeriesHtDcPeriod_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Ht Dc Period 200 response values inner 数据结构
 * @description Get Time Series Ht Dc Period 200 response values inner 字段。
 */
export type GetTimeSeriesHtDcPeriod_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title ht dcperiod 值
   * @description ht dcperiod 字段。
   */
  ht_dcperiod: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ht Dc Phase 200 response 数据结构
 * @description Get Time Series Ht Dc Phase 200 response 字段。
 */
export type GetTimeSeriesHtDcPhase_200_response = {
  meta: GetTimeSeriesHtDcPhase_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesHtDcPhase_200_response_values_inner>;
}

/**
 * @title Get Time Series Ht Dc Phase 200 response meta 数据结构
 * @description Get Time Series Ht Dc Phase 200 response meta 字段。
 */
export type GetTimeSeriesHtDcPhase_200_response_meta = any

/**
 * @title Get Time Series Ht Dc Phase 200 response meta indicator 数据结构
 * @description Get Time Series Ht Dc Phase 200 response meta indicator 字段。
 */
export type GetTimeSeriesHtDcPhase_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Ht Dc Phase 200 response values inner 数据结构
 * @description Get Time Series Ht Dc Phase 200 response values inner 字段。
 */
export type GetTimeSeriesHtDcPhase_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title ht dcphase 值
   * @description ht dcphase 字段。
   */
  ht_dcphase: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ht Phasor 200 response 数据结构
 * @description Get Time Series Ht Phasor 200 response 字段。
 */
export type GetTimeSeriesHtPhasor_200_response = {
  meta: GetTimeSeriesHtPhasor_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesHtPhasor_200_response_values_inner>;
}

/**
 * @title Get Time Series Ht Phasor 200 response meta 数据结构
 * @description Get Time Series Ht Phasor 200 response meta 字段。
 */
export type GetTimeSeriesHtPhasor_200_response_meta = any

/**
 * @title Get Time Series Ht Phasor 200 response meta indicator 数据结构
 * @description Get Time Series Ht Phasor 200 response meta indicator 字段。
 */
export type GetTimeSeriesHtPhasor_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Ht Phasor 200 response values inner 数据结构
 * @description Get Time Series Ht Phasor 200 response values inner 字段。
 */
export type GetTimeSeriesHtPhasor_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title in phase 值
   * @description in phase 字段。
   */
  in_phase: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title quadrature 值
   * @description quadrature 字段。
   */
  quadrature: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ht Sine 200 response 数据结构
 * @description Get Time Series Ht Sine 200 response 字段。
 */
export type GetTimeSeriesHtSine_200_response = {
  meta: GetTimeSeriesHtSine_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesHtSine_200_response_values_inner>;
}

/**
 * @title Get Time Series Ht Sine 200 response meta 数据结构
 * @description Get Time Series Ht Sine 200 response meta 字段。
 */
export type GetTimeSeriesHtSine_200_response_meta = any

/**
 * @title Get Time Series Ht Sine 200 response meta indicator 数据结构
 * @description Get Time Series Ht Sine 200 response meta indicator 字段。
 */
export type GetTimeSeriesHtSine_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Ht Sine 200 response values inner 数据结构
 * @description Get Time Series Ht Sine 200 response values inner 字段。
 */
export type GetTimeSeriesHtSine_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title ht leadsine 值
   * @description ht leadsine 字段。
   */
  ht_leadsine: string;
  /**
   * @title ht sine 值
   * @description ht sine 字段。
   */
  ht_sine: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ht Trend Mode 200 response 数据结构
 * @description Get Time Series Ht Trend Mode 200 response 字段。
 */
export type GetTimeSeriesHtTrendMode_200_response = {
  meta: GetTimeSeriesHtTrendMode_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesHtTrendMode_200_response_values_inner>;
}

/**
 * @title Get Time Series Ht Trend Mode 200 response meta 数据结构
 * @description Get Time Series Ht Trend Mode 200 response meta 字段。
 */
export type GetTimeSeriesHtTrendMode_200_response_meta = any

/**
 * @title Get Time Series Ht Trend Mode 200 response meta indicator 数据结构
 * @description Get Time Series Ht Trend Mode 200 response meta indicator 字段。
 */
export type GetTimeSeriesHtTrendMode_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Ht Trend Mode 200 response values inner 数据结构
 * @description Get Time Series Ht Trend Mode 200 response values inner 字段。
 */
export type GetTimeSeriesHtTrendMode_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title ht trendmode 值
   * @description ht trendmode 字段。
   */
  ht_trendmode: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ht Trendline 200 response 数据结构
 * @description Get Time Series Ht Trendline 200 response 字段。
 */
export type GetTimeSeriesHtTrendline_200_response = {
  meta: GetTimeSeriesHtTrendline_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesHtTrendline_200_response_values_inner>;
}

/**
 * @title Get Time Series Ht Trendline 200 response meta 数据结构
 * @description Get Time Series Ht Trendline 200 response meta 字段。
 */
export type GetTimeSeriesHtTrendline_200_response_meta = any

/**
 * @title Get Time Series Ht Trendline 200 response meta indicator 数据结构
 * @description Get Time Series Ht Trendline 200 response meta indicator 字段。
 */
export type GetTimeSeriesHtTrendline_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Ht Trendline 200 response values inner 数据结构
 * @description Get Time Series Ht Trendline 200 response values inner 字段。
 */
export type GetTimeSeriesHtTrendline_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title ht trendline 值
   * @description ht trendline 字段。
   */
  ht_trendline: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ichimoku 200 response 数据结构
 * @description Get Time Series Ichimoku 200 response 字段。
 */
export type GetTimeSeriesIchimoku_200_response = {
  meta: GetTimeSeriesIchimoku_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesIchimoku_200_response_values_inner>;
}

/**
 * @title Get Time Series Ichimoku 200 response meta 数据结构
 * @description Get Time Series Ichimoku 200 response meta 字段。
 */
export type GetTimeSeriesIchimoku_200_response_meta = any

/**
 * @title Get Time Series Ichimoku 200 response meta indicator 数据结构
 * @description Get Time Series Ichimoku 200 response meta indicator 字段。
 */
export type GetTimeSeriesIchimoku_200_response_meta_indicator = {
  /**
   * @title base line period 值
   * @description base line period 字段。
   */
  base_line_period: number;
  /**
   * @title conversion line period 值
   * @description conversion line period 字段。
   */
  conversion_line_period: number;
  /**
   * @title include ahead span period 值
   * @description include ahead span period 字段。
   */
  include_ahead_span_period: boolean;
  /**
   * @title lagging span period 值
   * @description lagging span period 字段。
   */
  lagging_span_period: number;
  /**
   * @title leading span b period 值
   * @description leading span b period 字段。
   */
  leading_span_b_period: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Ichimoku 200 response values inner 数据结构
 * @description Get Time Series Ichimoku 200 response values inner 字段。
 */
export type GetTimeSeriesIchimoku_200_response_values_inner = {
  /**
   * @title chikou span 值
   * @description chikou span 字段。
   */
  chikou_span?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title kijun sen 值
   * @description kijun sen 字段。
   */
  kijun_sen?: string;
  /**
   * @title senkou span a 值
   * @description senkou span a 字段。
   */
  senkou_span_a: string;
  /**
   * @title senkou span b 值
   * @description senkou span b 字段。
   */
  senkou_span_b: string;
  /**
   * @title tenkan sen 值
   * @description tenkan sen 字段。
   */
  tenkan_sen?: string;
}

/**
 * @title Get Time Series Kama 200 response 数据结构
 * @description Get Time Series Kama 200 response 字段。
 */
export type GetTimeSeriesKama_200_response = {
  meta: GetTimeSeriesKama_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesKama_200_response_values_inner>;
}

/**
 * @title Get Time Series Kama 200 response meta 数据结构
 * @description Get Time Series Kama 200 response meta 字段。
 */
export type GetTimeSeriesKama_200_response_meta = any

/**
 * @title Get Time Series Kama 200 response meta indicator 数据结构
 * @description Get Time Series Kama 200 response meta indicator 字段。
 */
export type GetTimeSeriesKama_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Kama 200 response values inner 数据结构
 * @description Get Time Series Kama 200 response values inner 字段。
 */
export type GetTimeSeriesKama_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title kama 值
   * @description kama 字段。
   */
  kama: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Keltner 200 response 数据结构
 * @description Get Time Series Keltner 200 response 字段。
 */
export type GetTimeSeriesKeltner_200_response = {
  meta: GetTimeSeriesKeltner_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesKeltner_200_response_values_inner>;
}

/**
 * @title Get Time Series Keltner 200 response meta 数据结构
 * @description Get Time Series Keltner 200 response meta 字段。
 */
export type GetTimeSeriesKeltner_200_response_meta = any

/**
 * @title Get Time Series Keltner 200 response meta indicator 数据结构
 * @description Get Time Series Keltner 200 response meta indicator 字段。
 */
export type GetTimeSeriesKeltner_200_response_meta_indicator = {
  /**
   * @title atr time period 值
   * @description atr time period 字段。
   */
  atr_time_period: number;
  /**
   * @title ma type 值
   * @description 技术指标 ma type 配置项。
   */
  ma_type: string;
  /**
   * @title multiplier 值
   * @description 技术指标 multiplier 配置项。
   */
  multiplier: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Keltner 200 response values inner 数据结构
 * @description Get Time Series Keltner 200 response values inner 字段。
 */
export type GetTimeSeriesKeltner_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title lower line 值
   * @description lower line 字段。
   */
  lower_line: string;
  /**
   * @title middle line 值
   * @description middle line 字段。
   */
  middle_line: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title upper line 值
   * @description upper line 字段。
   */
  upper_line: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Kst 200 response 数据结构
 * @description Get Time Series Kst 200 response 字段。
 */
export type GetTimeSeriesKst_200_response = {
  meta: GetTimeSeriesKst_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesKst_200_response_values_inner>;
}

/**
 * @title Get Time Series Kst 200 response meta 数据结构
 * @description Get Time Series Kst 200 response meta 字段。
 */
export type GetTimeSeriesKst_200_response_meta = any

/**
 * @title Get Time Series Kst 200 response meta indicator 数据结构
 * @description Get Time Series Kst 200 response meta indicator 字段。
 */
export type GetTimeSeriesKst_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title roc period 1 值
   * @description roc period 1 字段。
   */
  roc_period_1: number;
  /**
   * @title roc period 2 值
   * @description roc period 2 字段。
   */
  roc_period_2: number;
  /**
   * @title roc period 3 值
   * @description roc period 3 字段。
   */
  roc_period_3: number;
  /**
   * @title roc period 4 值
   * @description roc period 4 字段。
   */
  roc_period_4: number;
  /**
   * @title signal period 值
   * @description signal period 字段。
   */
  signal_period: number;
  /**
   * @title sma period 1 值
   * @description sma period 1 字段。
   */
  sma_period_1: number;
  /**
   * @title sma period 2 值
   * @description sma period 2 字段。
   */
  sma_period_2: number;
  /**
   * @title sma period 3 值
   * @description sma period 3 字段。
   */
  sma_period_3: number;
  /**
   * @title sma period 4 值
   * @description sma period 4 字段。
   */
  sma_period_4: number;
}

/**
 * @title Get Time Series Kst 200 response values inner 数据结构
 * @description Get Time Series Kst 200 response values inner 字段。
 */
export type GetTimeSeriesKst_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title kst 值
   * @description kst 字段。
   */
  kst: string;
  /**
   * @title kst signal 值
   * @description kst signal 字段。
   */
  kst_signal: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Linear Reg Angle 200 response 数据结构
 * @description Get Time Series Linear Reg Angle 200 response 字段。
 */
export type GetTimeSeriesLinearRegAngle_200_response = {
  meta: GetTimeSeriesLinearRegAngle_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesLinearRegAngle_200_response_values_inner>;
}

/**
 * @title Get Time Series Linear Reg Angle 200 response meta 数据结构
 * @description Get Time Series Linear Reg Angle 200 response meta 字段。
 */
export type GetTimeSeriesLinearRegAngle_200_response_meta = any

/**
 * @title Get Time Series Linear Reg Angle 200 response meta indicator 数据结构
 * @description Get Time Series Linear Reg Angle 200 response meta indicator 字段。
 */
export type GetTimeSeriesLinearRegAngle_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Linear Reg Angle 200 response values inner 数据结构
 * @description Get Time Series Linear Reg Angle 200 response values inner 字段。
 */
export type GetTimeSeriesLinearRegAngle_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title linearregangle 值
   * @description linearregangle 字段。
   */
  linearregangle: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Linear Reg Intercept 200 response 数据结构
 * @description Get Time Series Linear Reg Intercept 200 response 字段。
 */
export type GetTimeSeriesLinearRegIntercept_200_response = {
  meta: GetTimeSeriesLinearRegIntercept_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesLinearRegIntercept_200_response_values_inner>;
}

/**
 * @title Get Time Series Linear Reg Intercept 200 response meta 数据结构
 * @description Get Time Series Linear Reg Intercept 200 response meta 字段。
 */
export type GetTimeSeriesLinearRegIntercept_200_response_meta = any

/**
 * @title Get Time Series Linear Reg Intercept 200 response meta indicator 数据结构
 * @description Get Time Series Linear Reg Intercept 200 response meta indicator 字段。
 */
export type GetTimeSeriesLinearRegIntercept_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Linear Reg Intercept 200 response values inner 数据结构
 * @description Get Time Series Linear Reg Intercept 200 response values inner 字段。
 */
export type GetTimeSeriesLinearRegIntercept_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title linearregintercept 值
   * @description linearregintercept 字段。
   */
  linearregintercept: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Linear Reg Slope 200 response 数据结构
 * @description Get Time Series Linear Reg Slope 200 response 字段。
 */
export type GetTimeSeriesLinearRegSlope_200_response = {
  meta: GetTimeSeriesLinearRegSlope_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesLinearRegSlope_200_response_values_inner>;
}

/**
 * @title Get Time Series Linear Reg Slope 200 response meta 数据结构
 * @description Get Time Series Linear Reg Slope 200 response meta 字段。
 */
export type GetTimeSeriesLinearRegSlope_200_response_meta = any

/**
 * @title Get Time Series Linear Reg Slope 200 response meta indicator 数据结构
 * @description Get Time Series Linear Reg Slope 200 response meta indicator 字段。
 */
export type GetTimeSeriesLinearRegSlope_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Linear Reg Slope 200 response values inner 数据结构
 * @description Get Time Series Linear Reg Slope 200 response values inner 字段。
 */
export type GetTimeSeriesLinearRegSlope_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title linearregslope 值
   * @description linearregslope 字段。
   */
  linearregslope: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Linear Reg 200 response 数据结构
 * @description Get Time Series Linear Reg 200 response 字段。
 */
export type GetTimeSeriesLinearReg_200_response = {
  meta: GetTimeSeriesLinearReg_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesLinearReg_200_response_values_inner>;
}

/**
 * @title Get Time Series Linear Reg 200 response meta 数据结构
 * @description Get Time Series Linear Reg 200 response meta 字段。
 */
export type GetTimeSeriesLinearReg_200_response_meta = any

/**
 * @title Get Time Series Linear Reg 200 response meta indicator 数据结构
 * @description Get Time Series Linear Reg 200 response meta indicator 字段。
 */
export type GetTimeSeriesLinearReg_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Linear Reg 200 response values inner 数据结构
 * @description Get Time Series Linear Reg 200 response values inner 字段。
 */
export type GetTimeSeriesLinearReg_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title linearreg 值
   * @description linearreg 字段。
   */
  linearreg: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ln 200 response 数据结构
 * @description Get Time Series Ln 200 response 字段。
 */
export type GetTimeSeriesLn_200_response = {
  meta: GetTimeSeriesLn_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesLn_200_response_values_inner>;
}

/**
 * @title Get Time Series Ln 200 response meta 数据结构
 * @description Get Time Series Ln 200 response meta 字段。
 */
export type GetTimeSeriesLn_200_response_meta = any

/**
 * @title Get Time Series Ln 200 response meta indicator 数据结构
 * @description Get Time Series Ln 200 response meta indicator 字段。
 */
export type GetTimeSeriesLn_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Ln 200 response values inner 数据结构
 * @description Get Time Series Ln 200 response values inner 字段。
 */
export type GetTimeSeriesLn_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title ln 值
   * @description ln 字段。
   */
  ln: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Log10 200 response 数据结构
 * @description Get Time Series Log10 200 response 字段。
 */
export type GetTimeSeriesLog10_200_response = {
  meta: GetTimeSeriesLog10_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesLog10_200_response_values_inner>;
}

/**
 * @title Get Time Series Log10 200 response meta 数据结构
 * @description Get Time Series Log10 200 response meta 字段。
 */
export type GetTimeSeriesLog10_200_response_meta = any

/**
 * @title Get Time Series Log10 200 response meta indicator 数据结构
 * @description Get Time Series Log10 200 response meta indicator 字段。
 */
export type GetTimeSeriesLog10_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Log10 200 response values inner 数据结构
 * @description Get Time Series Log10 200 response values inner 字段。
 */
export type GetTimeSeriesLog10_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title log10 值
   * @description log10 字段。
   */
  log10: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ma 200 response 数据结构
 * @description Get Time Series Ma 200 response 字段。
 */
export type GetTimeSeriesMa_200_response = {
  meta: GetTimeSeriesMa_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMa_200_response_values_inner>;
}

/**
 * @title Get Time Series Ma 200 response meta 数据结构
 * @description Get Time Series Ma 200 response meta 字段。
 */
export type GetTimeSeriesMa_200_response_meta = any

/**
 * @title Get Time Series Ma 200 response meta indicator 数据结构
 * @description Get Time Series Ma 200 response meta indicator 字段。
 */
export type GetTimeSeriesMa_200_response_meta_indicator = {
  /**
   * @title ma type 值
   * @description 技术指标 ma type 配置项。
   */
  ma_type: string;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Ma 200 response values inner 数据结构
 * @description Get Time Series Ma 200 response values inner 字段。
 */
export type GetTimeSeriesMa_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title ma 值
   * @description ma 字段。
   */
  ma: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Macd Ext 200 response 数据结构
 * @description Get Time Series Macd Ext 200 response 字段。
 */
export type GetTimeSeriesMacdExt_200_response = {
  meta: GetTimeSeriesMacdExt_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMacdExt_200_response_values_inner>;
}

/**
 * @title Get Time Series Macd Ext 200 response meta 数据结构
 * @description Get Time Series Macd Ext 200 response meta 字段。
 */
export type GetTimeSeriesMacdExt_200_response_meta = any

/**
 * @title Get Time Series Macd Ext 200 response meta indicator 数据结构
 * @description Get Time Series Macd Ext 200 response meta indicator 字段。
 */
export type GetTimeSeriesMacdExt_200_response_meta_indicator = {
  /**
   * @title fast ma type 值
   * @description fast ma type 字段。
   */
  fast_ma_type: string;
  /**
   * @title fast period 值
   * @description 技术指标 fast period 配置项。
   */
  fast_period: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title signal ma type 值
   * @description signal ma type 字段。
   */
  signal_ma_type: string;
  /**
   * @title signal period 值
   * @description signal period 字段。
   */
  signal_period: number;
  /**
   * @title slow ma type 值
   * @description slow ma type 字段。
   */
  slow_ma_type: string;
  /**
   * @title slow period 值
   * @description 技术指标 slow period 配置项。
   */
  slow_period: number;
}

/**
 * @title Get Time Series Macd Ext 200 response values inner 数据结构
 * @description Get Time Series Macd Ext 200 response values inner 字段。
 */
export type GetTimeSeriesMacdExt_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title macd 值
   * @description macd 字段。
   */
  macd: string;
  /**
   * @title macd hist 值
   * @description macd hist 字段。
   */
  macd_hist: string;
  /**
   * @title macd signal 值
   * @description macd signal 字段。
   */
  macd_signal: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Macd Slope 200 response 数据结构
 * @description Get Time Series Macd Slope 200 response 字段。
 */
export type GetTimeSeriesMacdSlope_200_response = {
  meta: GetTimeSeriesMacdSlope_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMacdSlope_200_response_values_inner>;
}

/**
 * @title Get Time Series Macd Slope 200 response meta 数据结构
 * @description Get Time Series Macd Slope 200 response meta 字段。
 */
export type GetTimeSeriesMacdSlope_200_response_meta = any

/**
 * @title Get Time Series Macd Slope 200 response meta indicator 数据结构
 * @description Get Time Series Macd Slope 200 response meta indicator 字段。
 */
export type GetTimeSeriesMacdSlope_200_response_meta_indicator = {
  /**
   * @title fast period 值
   * @description 技术指标 fast period 配置项。
   */
  fast_period: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title signal period 值
   * @description signal period 字段。
   */
  signal_period: number;
  /**
   * @title slow period 值
   * @description 技术指标 slow period 配置项。
   */
  slow_period: number;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Macd Slope 200 response values inner 数据结构
 * @description Get Time Series Macd Slope 200 response values inner 字段。
 */
export type GetTimeSeriesMacdSlope_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title macd hist slope 值
   * @description macd hist slope 字段。
   */
  macd_hist_slope: string;
  /**
   * @title macd signal slope 值
   * @description macd signal slope 字段。
   */
  macd_signal_slope: string;
  /**
   * @title macd slope 值
   * @description macd slope 字段。
   */
  macd_slope: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Macd 200 response 数据结构
 * @description Get Time Series Macd 200 response 字段。
 */
export type GetTimeSeriesMacd_200_response = {
  meta: GetTimeSeriesMacd_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMacd_200_response_values_inner>;
}

/**
 * @title Get Time Series Macd 200 response meta 数据结构
 * @description Get Time Series Macd 200 response meta 字段。
 */
export type GetTimeSeriesMacd_200_response_meta = any

/**
 * @title Get Time Series Macd 200 response meta indicator 数据结构
 * @description Get Time Series Macd 200 response meta indicator 字段。
 */
export type GetTimeSeriesMacd_200_response_meta_indicator = {
  /**
   * @title fast period 值
   * @description 技术指标 fast period 配置项。
   */
  fast_period: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title signal period 值
   * @description signal period 字段。
   */
  signal_period: number;
  /**
   * @title slow period 值
   * @description 技术指标 slow period 配置项。
   */
  slow_period: number;
}

/**
 * @title Get Time Series Macd 200 response values inner 数据结构
 * @description Get Time Series Macd 200 response values inner 字段。
 */
export type GetTimeSeriesMacd_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title macd 值
   * @description macd 字段。
   */
  macd: string;
  /**
   * @title macd hist 值
   * @description macd hist 字段。
   */
  macd_hist: string;
  /**
   * @title macd signal 值
   * @description macd signal 字段。
   */
  macd_signal: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Mama 200 response 数据结构
 * @description Get Time Series Mama 200 response 字段。
 */
export type GetTimeSeriesMama_200_response = {
  meta: GetTimeSeriesMama_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMama_200_response_values_inner>;
}

/**
 * @title Get Time Series Mama 200 response meta 数据结构
 * @description Get Time Series Mama 200 response meta 字段。
 */
export type GetTimeSeriesMama_200_response_meta = any

/**
 * @title Get Time Series Mama 200 response meta indicator 数据结构
 * @description Get Time Series Mama 200 response meta indicator 字段。
 */
export type GetTimeSeriesMama_200_response_meta_indicator = {
  /**
   * @title fast limit 值
   * @description fast limit 字段。
   */
  fast_limit: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title slow limit 值
   * @description slow limit 字段。
   */
  slow_limit: number;
}

/**
 * @title Get Time Series Mama 200 response values inner 数据结构
 * @description Get Time Series Mama 200 response values inner 字段。
 */
export type GetTimeSeriesMama_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title fama 值
   * @description fama 字段。
   */
  fama: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title mama 值
   * @description mama 字段。
   */
  mama: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Max Index 200 response 数据结构
 * @description Get Time Series Max Index 200 response 字段。
 */
export type GetTimeSeriesMaxIndex_200_response = {
  meta: GetTimeSeriesMaxIndex_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMaxIndex_200_response_values_inner>;
}

/**
 * @title Get Time Series Max Index 200 response meta 数据结构
 * @description Get Time Series Max Index 200 response meta 字段。
 */
export type GetTimeSeriesMaxIndex_200_response_meta = any

/**
 * @title Get Time Series Max Index 200 response meta indicator 数据结构
 * @description Get Time Series Max Index 200 response meta indicator 字段。
 */
export type GetTimeSeriesMaxIndex_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Max Index 200 response values inner 数据结构
 * @description Get Time Series Max Index 200 response values inner 字段。
 */
export type GetTimeSeriesMaxIndex_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title maxidx 值
   * @description maxidx 字段。
   */
  maxidx: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Max 200 response 数据结构
 * @description Get Time Series Max 200 response 字段。
 */
export type GetTimeSeriesMax_200_response = {
  meta: GetTimeSeriesMax_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMax_200_response_values_inner>;
}

/**
 * @title Get Time Series Max 200 response meta 数据结构
 * @description Get Time Series Max 200 response meta 字段。
 */
export type GetTimeSeriesMax_200_response_meta = any

/**
 * @title Get Time Series Max 200 response meta indicator 数据结构
 * @description Get Time Series Max 200 response meta indicator 字段。
 */
export type GetTimeSeriesMax_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Max 200 response values inner 数据结构
 * @description Get Time Series Max 200 response values inner 字段。
 */
export type GetTimeSeriesMax_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title max 值
   * @description max 字段。
   */
  max: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Mc Ginley Dynamic 200 response 数据结构
 * @description Get Time Series Mc Ginley Dynamic 200 response 字段。
 */
export type GetTimeSeriesMcGinleyDynamic_200_response = {
  meta: GetTimeSeriesMcGinleyDynamic_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMcGinleyDynamic_200_response_values_inner>;
}

/**
 * @title Get Time Series Mc Ginley Dynamic 200 response meta 数据结构
 * @description Get Time Series Mc Ginley Dynamic 200 response meta 字段。
 */
export type GetTimeSeriesMcGinleyDynamic_200_response_meta = any

/**
 * @title Get Time Series Mc Ginley Dynamic 200 response meta indicator 数据结构
 * @description Get Time Series Mc Ginley Dynamic 200 response meta indicator 字段。
 */
export type GetTimeSeriesMcGinleyDynamic_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Mc Ginley Dynamic 200 response values inner 数据结构
 * @description Get Time Series Mc Ginley Dynamic 200 response values inner 字段。
 */
export type GetTimeSeriesMcGinleyDynamic_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title mcginley dynamic 值
   * @description mcginley dynamic 字段。
   */
  mcginley_dynamic: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Med Price 200 response 数据结构
 * @description Get Time Series Med Price 200 response 字段。
 */
export type GetTimeSeriesMedPrice_200_response = {
  meta: GetTimeSeriesMedPrice_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMedPrice_200_response_values_inner>;
}

/**
 * @title Get Time Series Med Price 200 response meta 数据结构
 * @description Get Time Series Med Price 200 response meta 字段。
 */
export type GetTimeSeriesMedPrice_200_response_meta = any

/**
 * @title Get Time Series Med Price 200 response meta indicator 数据结构
 * @description Get Time Series Med Price 200 response meta indicator 字段。
 */
export type GetTimeSeriesMedPrice_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Med Price 200 response values inner 数据结构
 * @description Get Time Series Med Price 200 response values inner 字段。
 */
export type GetTimeSeriesMedPrice_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title medprice 值
   * @description medprice 字段。
   */
  medprice: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Mfi 200 response 数据结构
 * @description Get Time Series Mfi 200 response 字段。
 */
export type GetTimeSeriesMfi_200_response = {
  meta: GetTimeSeriesMfi_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMfi_200_response_values_inner>;
}

/**
 * @title Get Time Series Mfi 200 response meta 数据结构
 * @description Get Time Series Mfi 200 response meta 字段。
 */
export type GetTimeSeriesMfi_200_response_meta = any

/**
 * @title Get Time Series Mfi 200 response meta indicator 数据结构
 * @description Get Time Series Mfi 200 response meta indicator 字段。
 */
export type GetTimeSeriesMfi_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Mfi 200 response values inner 数据结构
 * @description Get Time Series Mfi 200 response values inner 字段。
 */
export type GetTimeSeriesMfi_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title mfi 值
   * @description mfi 字段。
   */
  mfi: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Mid Point 200 response 数据结构
 * @description Get Time Series Mid Point 200 response 字段。
 */
export type GetTimeSeriesMidPoint_200_response = {
  meta: GetTimeSeriesMidPoint_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMidPoint_200_response_values_inner>;
}

/**
 * @title Get Time Series Mid Point 200 response meta 数据结构
 * @description Get Time Series Mid Point 200 response meta 字段。
 */
export type GetTimeSeriesMidPoint_200_response_meta = any

/**
 * @title Get Time Series Mid Point 200 response meta indicator 数据结构
 * @description Get Time Series Mid Point 200 response meta indicator 字段。
 */
export type GetTimeSeriesMidPoint_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Mid Point 200 response values inner 数据结构
 * @description Get Time Series Mid Point 200 response values inner 字段。
 */
export type GetTimeSeriesMidPoint_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title midpoint 值
   * @description midpoint 字段。
   */
  midpoint: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Mid Price 200 response 数据结构
 * @description Get Time Series Mid Price 200 response 字段。
 */
export type GetTimeSeriesMidPrice_200_response = {
  meta: GetTimeSeriesMidPrice_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMidPrice_200_response_values_inner>;
}

/**
 * @title Get Time Series Mid Price 200 response meta 数据结构
 * @description Get Time Series Mid Price 200 response meta 字段。
 */
export type GetTimeSeriesMidPrice_200_response_meta = any

/**
 * @title Get Time Series Mid Price 200 response meta indicator 数据结构
 * @description Get Time Series Mid Price 200 response meta indicator 字段。
 */
export type GetTimeSeriesMidPrice_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Mid Price 200 response values inner 数据结构
 * @description Get Time Series Mid Price 200 response values inner 字段。
 */
export type GetTimeSeriesMidPrice_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title midprice 值
   * @description midprice 字段。
   */
  midprice: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Min Index 200 response 数据结构
 * @description Get Time Series Min Index 200 response 字段。
 */
export type GetTimeSeriesMinIndex_200_response = {
  meta: GetTimeSeriesMinIndex_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMinIndex_200_response_values_inner>;
}

/**
 * @title Get Time Series Min Index 200 response meta 数据结构
 * @description Get Time Series Min Index 200 response meta 字段。
 */
export type GetTimeSeriesMinIndex_200_response_meta = any

/**
 * @title Get Time Series Min Index 200 response meta indicator 数据结构
 * @description Get Time Series Min Index 200 response meta indicator 字段。
 */
export type GetTimeSeriesMinIndex_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Min Index 200 response values inner 数据结构
 * @description Get Time Series Min Index 200 response values inner 字段。
 */
export type GetTimeSeriesMinIndex_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title minidx 值
   * @description minidx 字段。
   */
  minidx: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Min Max Index 200 response 数据结构
 * @description Get Time Series Min Max Index 200 response 字段。
 */
export type GetTimeSeriesMinMaxIndex_200_response = {
  meta: GetTimeSeriesMinMaxIndex_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMinMaxIndex_200_response_values_inner>;
}

/**
 * @title Get Time Series Min Max Index 200 response meta 数据结构
 * @description Get Time Series Min Max Index 200 response meta 字段。
 */
export type GetTimeSeriesMinMaxIndex_200_response_meta = any

/**
 * @title Get Time Series Min Max Index 200 response meta indicator 数据结构
 * @description Get Time Series Min Max Index 200 response meta indicator 字段。
 */
export type GetTimeSeriesMinMaxIndex_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Min Max Index 200 response values inner 数据结构
 * @description Get Time Series Min Max Index 200 response values inner 字段。
 */
export type GetTimeSeriesMinMaxIndex_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title maxidx 值
   * @description maxidx 字段。
   */
  maxidx: string;
  /**
   * @title minidx 值
   * @description minidx 字段。
   */
  minidx: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Min Max 200 response 数据结构
 * @description Get Time Series Min Max 200 response 字段。
 */
export type GetTimeSeriesMinMax_200_response = {
  meta: GetTimeSeriesMinMax_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMinMax_200_response_values_inner>;
}

/**
 * @title Get Time Series Min Max 200 response meta 数据结构
 * @description Get Time Series Min Max 200 response meta 字段。
 */
export type GetTimeSeriesMinMax_200_response_meta = any

/**
 * @title Get Time Series Min Max 200 response meta indicator 数据结构
 * @description Get Time Series Min Max 200 response meta indicator 字段。
 */
export type GetTimeSeriesMinMax_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Min Max 200 response values inner 数据结构
 * @description Get Time Series Min Max 200 response values inner 字段。
 */
export type GetTimeSeriesMinMax_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title max 值
   * @description max 字段。
   */
  max: string;
  /**
   * @title min 值
   * @description min 字段。
   */
  min: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Min 200 response 数据结构
 * @description Get Time Series Min 200 response 字段。
 */
export type GetTimeSeriesMin_200_response = {
  meta: GetTimeSeriesMin_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMin_200_response_values_inner>;
}

/**
 * @title Get Time Series Min 200 response meta 数据结构
 * @description Get Time Series Min 200 response meta 字段。
 */
export type GetTimeSeriesMin_200_response_meta = any

/**
 * @title Get Time Series Min 200 response meta indicator 数据结构
 * @description Get Time Series Min 200 response meta indicator 字段。
 */
export type GetTimeSeriesMin_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Min 200 response values inner 数据结构
 * @description Get Time Series Min 200 response values inner 字段。
 */
export type GetTimeSeriesMin_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title min 值
   * @description min 字段。
   */
  min: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Minus DI 200 response 数据结构
 * @description Get Time Series Minus DI 200 response 字段。
 */
export type GetTimeSeriesMinusDI_200_response = {
  meta: GetTimeSeriesMinusDI_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMinusDI_200_response_values_inner>;
}

/**
 * @title Get Time Series Minus DI 200 response meta 数据结构
 * @description Get Time Series Minus DI 200 response meta 字段。
 */
export type GetTimeSeriesMinusDI_200_response_meta = any

/**
 * @title Get Time Series Minus DI 200 response meta indicator 数据结构
 * @description Get Time Series Minus DI 200 response meta indicator 字段。
 */
export type GetTimeSeriesMinusDI_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Minus DI 200 response values inner 数据结构
 * @description Get Time Series Minus DI 200 response values inner 字段。
 */
export type GetTimeSeriesMinusDI_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title minus di 值
   * @description minus di 字段。
   */
  minus_di: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Minus DM 200 response 数据结构
 * @description Get Time Series Minus DM 200 response 字段。
 */
export type GetTimeSeriesMinusDM_200_response = {
  meta: GetTimeSeriesMinusDM_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMinusDM_200_response_values_inner>;
}

/**
 * @title Get Time Series Minus DM 200 response meta 数据结构
 * @description Get Time Series Minus DM 200 response meta 字段。
 */
export type GetTimeSeriesMinusDM_200_response_meta = any

/**
 * @title Get Time Series Minus DM 200 response meta indicator 数据结构
 * @description Get Time Series Minus DM 200 response meta indicator 字段。
 */
export type GetTimeSeriesMinusDM_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Minus DM 200 response values inner 数据结构
 * @description Get Time Series Minus DM 200 response values inner 字段。
 */
export type GetTimeSeriesMinusDM_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title minus dm 值
   * @description minus dm 字段。
   */
  minus_dm: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Mom 200 response 数据结构
 * @description Get Time Series Mom 200 response 字段。
 */
export type GetTimeSeriesMom_200_response = {
  meta: GetTimeSeriesMom_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMom_200_response_values_inner>;
}

/**
 * @title Get Time Series Mom 200 response meta 数据结构
 * @description Get Time Series Mom 200 response meta 字段。
 */
export type GetTimeSeriesMom_200_response_meta = any

/**
 * @title Get Time Series Mom 200 response meta indicator 数据结构
 * @description Get Time Series Mom 200 response meta indicator 字段。
 */
export type GetTimeSeriesMom_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Mom 200 response values inner 数据结构
 * @description Get Time Series Mom 200 response values inner 字段。
 */
export type GetTimeSeriesMom_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title mom 值
   * @description mom 字段。
   */
  mom: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Mult 200 response 数据结构
 * @description Get Time Series Mult 200 response 字段。
 */
export type GetTimeSeriesMult_200_response = {
  meta: GetTimeSeriesMult_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesMult_200_response_values_inner>;
}

/**
 * @title Get Time Series Mult 200 response meta 数据结构
 * @description Get Time Series Mult 200 response meta 字段。
 */
export type GetTimeSeriesMult_200_response_meta = any

/**
 * @title Get Time Series Mult 200 response meta indicator 数据结构
 * @description Get Time Series Mult 200 response meta indicator 字段。
 */
export type GetTimeSeriesMult_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 1 值
   * @description 技术指标 series type 1 配置项。
   */
  series_type_1: string;
  /**
   * @title series type 2 值
   * @description 技术指标 series type 2 配置项。
   */
  series_type_2: string;
}

/**
 * @title Get Time Series Mult 200 response values inner 数据结构
 * @description Get Time Series Mult 200 response values inner 字段。
 */
export type GetTimeSeriesMult_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title mult 值
   * @description mult 字段。
   */
  mult: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Natr 200 response 数据结构
 * @description Get Time Series Natr 200 response 字段。
 */
export type GetTimeSeriesNatr_200_response = {
  meta: GetTimeSeriesNatr_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesNatr_200_response_values_inner>;
}

/**
 * @title Get Time Series Natr 200 response meta 数据结构
 * @description Get Time Series Natr 200 response meta 字段。
 */
export type GetTimeSeriesNatr_200_response_meta = any

/**
 * @title Get Time Series Natr 200 response meta indicator 数据结构
 * @description Get Time Series Natr 200 response meta indicator 字段。
 */
export type GetTimeSeriesNatr_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Natr 200 response values inner 数据结构
 * @description Get Time Series Natr 200 response values inner 字段。
 */
export type GetTimeSeriesNatr_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title natr 值
   * @description natr 字段。
   */
  natr: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Obv 200 response 数据结构
 * @description Get Time Series Obv 200 response 字段。
 */
export type GetTimeSeriesObv_200_response = {
  meta: GetTimeSeriesObv_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesObv_200_response_values_inner>;
}

/**
 * @title Get Time Series Obv 200 response meta 数据结构
 * @description Get Time Series Obv 200 response meta 字段。
 */
export type GetTimeSeriesObv_200_response_meta = any

/**
 * @title Get Time Series Obv 200 response meta indicator 数据结构
 * @description Get Time Series Obv 200 response meta indicator 字段。
 */
export type GetTimeSeriesObv_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Obv 200 response values inner 数据结构
 * @description Get Time Series Obv 200 response values inner 字段。
 */
export type GetTimeSeriesObv_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title obv 值
   * @description obv 字段。
   */
  obv: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Percent B 200 response 数据结构
 * @description Get Time Series Percent B 200 response 字段。
 */
export type GetTimeSeriesPercent_B_200_response = {
  meta: GetTimeSeriesPercent_B_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesPercent_B_200_response_values_inner>;
}

/**
 * @title Get Time Series Percent B 200 response meta 数据结构
 * @description Get Time Series Percent B 200 response meta 字段。
 */
export type GetTimeSeriesPercent_B_200_response_meta = any

/**
 * @title Get Time Series Percent B 200 response meta indicator 数据结构
 * @description Get Time Series Percent B 200 response meta indicator 字段。
 */
export type GetTimeSeriesPercent_B_200_response_meta_indicator = {
  /**
   * @title ma type 值
   * @description 技术指标 ma type 配置项。
   */
  ma_type: string;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title sd 值
   * @description 技术指标 sd 配置项。
   */
  sd: number;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Percent B 200 response values inner 数据结构
 * @description Get Time Series Percent B 200 response values inner 字段。
 */
export type GetTimeSeriesPercent_B_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title percent b 值
   * @description percent b 字段。
   */
  percent_b: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Pivot Points HL 200 response 数据结构
 * @description Get Time Series Pivot Points HL 200 response 字段。
 */
export type GetTimeSeriesPivotPointsHL_200_response = {
  meta: GetTimeSeriesPivotPointsHL_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesPivotPointsHL_200_response_values_inner>;
}

/**
 * @title Get Time Series Pivot Points HL 200 response meta 数据结构
 * @description Get Time Series Pivot Points HL 200 response meta 字段。
 */
export type GetTimeSeriesPivotPointsHL_200_response_meta = any

/**
 * @title Get Time Series Pivot Points HL 200 response meta indicator 数据结构
 * @description Get Time Series Pivot Points HL 200 response meta indicator 字段。
 */
export type GetTimeSeriesPivotPointsHL_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Pivot Points HL 200 response values inner 数据结构
 * @description Get Time Series Pivot Points HL 200 response values inner 字段。
 */
export type GetTimeSeriesPivotPointsHL_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title pivot point h 值
   * @description pivot point h 字段。
   */
  pivot_point_h: number;
  /**
   * @title pivot point l 值
   * @description pivot point l 字段。
   */
  pivot_point_l: number;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Plus DI 200 response 数据结构
 * @description Get Time Series Plus DI 200 response 字段。
 */
export type GetTimeSeriesPlusDI_200_response = {
  meta: GetTimeSeriesPlusDI_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesPlusDI_200_response_values_inner>;
}

/**
 * @title Get Time Series Plus DI 200 response meta 数据结构
 * @description Get Time Series Plus DI 200 response meta 字段。
 */
export type GetTimeSeriesPlusDI_200_response_meta = any

/**
 * @title Get Time Series Plus DI 200 response meta indicator 数据结构
 * @description Get Time Series Plus DI 200 response meta indicator 字段。
 */
export type GetTimeSeriesPlusDI_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Plus DI 200 response values inner 数据结构
 * @description Get Time Series Plus DI 200 response values inner 字段。
 */
export type GetTimeSeriesPlusDI_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title plus di 值
   * @description plus di 字段。
   */
  plus_di: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Plus DM 200 response 数据结构
 * @description Get Time Series Plus DM 200 response 字段。
 */
export type GetTimeSeriesPlusDM_200_response = {
  meta: GetTimeSeriesPlusDM_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesPlusDM_200_response_values_inner>;
}

/**
 * @title Get Time Series Plus DM 200 response meta 数据结构
 * @description Get Time Series Plus DM 200 response meta 字段。
 */
export type GetTimeSeriesPlusDM_200_response_meta = any

/**
 * @title Get Time Series Plus DM 200 response meta indicator 数据结构
 * @description Get Time Series Plus DM 200 response meta indicator 字段。
 */
export type GetTimeSeriesPlusDM_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Plus DM 200 response values inner 数据结构
 * @description Get Time Series Plus DM 200 response values inner 字段。
 */
export type GetTimeSeriesPlusDM_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title plus dm 值
   * @description plus dm 字段。
   */
  plus_dm: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ppo 200 response 数据结构
 * @description Get Time Series Ppo 200 response 字段。
 */
export type GetTimeSeriesPpo_200_response = {
  meta: GetTimeSeriesPpo_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesPpo_200_response_values_inner>;
}

/**
 * @title Get Time Series Ppo 200 response meta 数据结构
 * @description Get Time Series Ppo 200 response meta 字段。
 */
export type GetTimeSeriesPpo_200_response_meta = any

/**
 * @title Get Time Series Ppo 200 response meta indicator 数据结构
 * @description Get Time Series Ppo 200 response meta indicator 字段。
 */
export type GetTimeSeriesPpo_200_response_meta_indicator = {
  /**
   * @title fast period 值
   * @description 技术指标 fast period 配置项。
   */
  fast_period: number;
  /**
   * @title ma type 值
   * @description 技术指标 ma type 配置项。
   */
  ma_type: string;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title slow period 值
   * @description 技术指标 slow period 配置项。
   */
  slow_period: number;
}

/**
 * @title Get Time Series Ppo 200 response values inner 数据结构
 * @description Get Time Series Ppo 200 response values inner 字段。
 */
export type GetTimeSeriesPpo_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title ppo 值
   * @description ppo 字段。
   */
  ppo: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Roc 200 response 数据结构
 * @description Get Time Series Roc 200 response 字段。
 */
export type GetTimeSeriesRoc_200_response = {
  meta: GetTimeSeriesRoc_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesRoc_200_response_values_inner>;
}

/**
 * @title Get Time Series Roc 200 response meta 数据结构
 * @description Get Time Series Roc 200 response meta 字段。
 */
export type GetTimeSeriesRoc_200_response_meta = any

/**
 * @title Get Time Series Roc 200 response meta indicator 数据结构
 * @description Get Time Series Roc 200 response meta indicator 字段。
 */
export type GetTimeSeriesRoc_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Roc 200 response values inner 数据结构
 * @description Get Time Series Roc 200 response values inner 字段。
 */
export type GetTimeSeriesRoc_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title roc 值
   * @description roc 字段。
   */
  roc: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Rocp 200 response 数据结构
 * @description Get Time Series Rocp 200 response 字段。
 */
export type GetTimeSeriesRocp_200_response = {
  meta: GetTimeSeriesRocp_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesRocp_200_response_values_inner>;
}

/**
 * @title Get Time Series Rocp 200 response meta 数据结构
 * @description Get Time Series Rocp 200 response meta 字段。
 */
export type GetTimeSeriesRocp_200_response_meta = any

/**
 * @title Get Time Series Rocp 200 response meta indicator 数据结构
 * @description Get Time Series Rocp 200 response meta indicator 字段。
 */
export type GetTimeSeriesRocp_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Rocp 200 response values inner 数据结构
 * @description Get Time Series Rocp 200 response values inner 字段。
 */
export type GetTimeSeriesRocp_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title rocp 值
   * @description rocp 字段。
   */
  rocp: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Rocr100 200 response 数据结构
 * @description Get Time Series Rocr100 200 response 字段。
 */
export type GetTimeSeriesRocr100_200_response = {
  meta: GetTimeSeriesRocr100_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesRocr100_200_response_values_inner>;
}

/**
 * @title Get Time Series Rocr100 200 response meta 数据结构
 * @description Get Time Series Rocr100 200 response meta 字段。
 */
export type GetTimeSeriesRocr100_200_response_meta = any

/**
 * @title Get Time Series Rocr100 200 response meta indicator 数据结构
 * @description Get Time Series Rocr100 200 response meta indicator 字段。
 */
export type GetTimeSeriesRocr100_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Rocr100 200 response values inner 数据结构
 * @description Get Time Series Rocr100 200 response values inner 字段。
 */
export type GetTimeSeriesRocr100_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title rocr100 值
   * @description rocr100 字段。
   */
  rocr100: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Rocr 200 response 数据结构
 * @description Get Time Series Rocr 200 response 字段。
 */
export type GetTimeSeriesRocr_200_response = {
  meta: GetTimeSeriesRocr_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesRocr_200_response_values_inner>;
}

/**
 * @title Get Time Series Rocr 200 response meta 数据结构
 * @description Get Time Series Rocr 200 response meta 字段。
 */
export type GetTimeSeriesRocr_200_response_meta = any

/**
 * @title Get Time Series Rocr 200 response meta indicator 数据结构
 * @description Get Time Series Rocr 200 response meta indicator 字段。
 */
export type GetTimeSeriesRocr_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Rocr 200 response values inner 数据结构
 * @description Get Time Series Rocr 200 response values inner 字段。
 */
export type GetTimeSeriesRocr_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title rocr 值
   * @description rocr 字段。
   */
  rocr: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Rsi 200 response 数据结构
 * @description Get Time Series Rsi 200 response 字段。
 */
export type GetTimeSeriesRsi_200_response = {
  meta: GetTimeSeriesRsi_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesRsi_200_response_values_inner>;
}

/**
 * @title Get Time Series Rsi 200 response meta 数据结构
 * @description Get Time Series Rsi 200 response meta 字段。
 */
export type GetTimeSeriesRsi_200_response_meta = any

/**
 * @title Get Time Series Rsi 200 response meta indicator 数据结构
 * @description Get Time Series Rsi 200 response meta indicator 字段。
 */
export type GetTimeSeriesRsi_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Rsi 200 response values inner 数据结构
 * @description Get Time Series Rsi 200 response values inner 字段。
 */
export type GetTimeSeriesRsi_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title rsi 值
   * @description rsi 字段。
   */
  rsi: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Rvol 200 response 数据结构
 * @description Get Time Series Rvol 200 response 字段。
 */
export type GetTimeSeriesRvol_200_response = {
  meta: GetTimeSeriesRvol_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesRvol_200_response_values_inner>;
}

/**
 * @title Get Time Series Rvol 200 response meta 数据结构
 * @description Get Time Series Rvol 200 response meta 字段。
 */
export type GetTimeSeriesRvol_200_response_meta = any

/**
 * @title Get Time Series Rvol 200 response meta indicator 数据结构
 * @description Get Time Series Rvol 200 response meta indicator 字段。
 */
export type GetTimeSeriesRvol_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Rvol 200 response values inner 数据结构
 * @description Get Time Series Rvol 200 response values inner 字段。
 */
export type GetTimeSeriesRvol_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title rvol 值
   * @description rvol 字段。
   */
  rvol: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Sar Ext 200 response 数据结构
 * @description Get Time Series Sar Ext 200 response 字段。
 */
export type GetTimeSeriesSarExt_200_response = {
  meta: GetTimeSeriesSarExt_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesSarExt_200_response_values_inner>;
}

/**
 * @title Get Time Series Sar Ext 200 response meta 数据结构
 * @description Get Time Series Sar Ext 200 response meta 字段。
 */
export type GetTimeSeriesSarExt_200_response_meta = any

/**
 * @title Get Time Series Sar Ext 200 response meta indicator 数据结构
 * @description Get Time Series Sar Ext 200 response meta indicator 字段。
 */
export type GetTimeSeriesSarExt_200_response_meta_indicator = {
  /**
   * @title acceleration limit long 值
   * @description acceleration limit long 字段。
   */
  acceleration_limit_long: number;
  /**
   * @title acceleration limit short 值
   * @description acceleration limit short 字段。
   */
  acceleration_limit_short: number;
  /**
   * @title acceleration long 值
   * @description acceleration long 字段。
   */
  acceleration_long: number;
  /**
   * @title acceleration max long 值
   * @description acceleration max long 字段。
   */
  acceleration_max_long: number;
  /**
   * @title acceleration max short 值
   * @description acceleration max short 字段。
   */
  acceleration_max_short: number;
  /**
   * @title acceleration short 值
   * @description acceleration short 字段。
   */
  acceleration_short: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title offset on reverse 值
   * @description offset on reverse 字段。
   */
  offset_on_reverse: number;
  /**
   * @title start value 值
   * @description start value 字段。
   */
  start_value: number;
}

/**
 * @title Get Time Series Sar Ext 200 response values inner 数据结构
 * @description Get Time Series Sar Ext 200 response values inner 字段。
 */
export type GetTimeSeriesSarExt_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title sarext 值
   * @description sarext 字段。
   */
  sarext: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Sar 200 response 数据结构
 * @description Get Time Series Sar 200 response 字段。
 */
export type GetTimeSeriesSar_200_response = {
  meta: GetTimeSeriesSar_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesSar_200_response_values_inner>;
}

/**
 * @title Get Time Series Sar 200 response meta 数据结构
 * @description Get Time Series Sar 200 response meta 字段。
 */
export type GetTimeSeriesSar_200_response_meta = any

/**
 * @title Get Time Series Sar 200 response meta indicator 数据结构
 * @description Get Time Series Sar 200 response meta indicator 字段。
 */
export type GetTimeSeriesSar_200_response_meta_indicator = {
  /**
   * @title acceleration 值
   * @description acceleration 字段。
   */
  acceleration: number;
  /**
   * @title maximum 值
   * @description maximum 字段。
   */
  maximum: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Sar 200 response values inner 数据结构
 * @description Get Time Series Sar 200 response values inner 字段。
 */
export type GetTimeSeriesSar_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title sar 值
   * @description sar 字段。
   */
  sar: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Sma 200 response 数据结构
 * @description Get Time Series Sma 200 response 字段。
 */
export type GetTimeSeriesSma_200_response = {
  meta: GetTimeSeriesSma_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesSma_200_response_values_inner>;
}

/**
 * @title Get Time Series Sma 200 response meta 数据结构
 * @description Get Time Series Sma 200 response meta 字段。
 */
export type GetTimeSeriesSma_200_response_meta = any

/**
 * @title Get Time Series Sma 200 response meta indicator 数据结构
 * @description Get Time Series Sma 200 response meta indicator 字段。
 */
export type GetTimeSeriesSma_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Sma 200 response values inner 数据结构
 * @description Get Time Series Sma 200 response values inner 字段。
 */
export type GetTimeSeriesSma_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title sma 值
   * @description sma 字段。
   */
  sma: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Sqrt 200 response 数据结构
 * @description Get Time Series Sqrt 200 response 字段。
 */
export type GetTimeSeriesSqrt_200_response = {
  meta: GetTimeSeriesSqrt_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesSqrt_200_response_values_inner>;
}

/**
 * @title Get Time Series Sqrt 200 response meta 数据结构
 * @description Get Time Series Sqrt 200 response meta 字段。
 */
export type GetTimeSeriesSqrt_200_response_meta = any

/**
 * @title Get Time Series Sqrt 200 response meta indicator 数据结构
 * @description Get Time Series Sqrt 200 response meta indicator 字段。
 */
export type GetTimeSeriesSqrt_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
}

/**
 * @title Get Time Series Sqrt 200 response values inner 数据结构
 * @description Get Time Series Sqrt 200 response values inner 字段。
 */
export type GetTimeSeriesSqrt_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title sqrt 值
   * @description sqrt 字段。
   */
  sqrt: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Std Dev 200 response 数据结构
 * @description Get Time Series Std Dev 200 response 字段。
 */
export type GetTimeSeriesStdDev_200_response = {
  meta: GetTimeSeriesStdDev_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesStdDev_200_response_values_inner>;
}

/**
 * @title Get Time Series Std Dev 200 response meta 数据结构
 * @description Get Time Series Std Dev 200 response meta 字段。
 */
export type GetTimeSeriesStdDev_200_response_meta = any

/**
 * @title Get Time Series Std Dev 200 response meta indicator 数据结构
 * @description Get Time Series Std Dev 200 response meta indicator 字段。
 */
export type GetTimeSeriesStdDev_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title sd 值
   * @description 技术指标 sd 配置项。
   */
  sd: number;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Std Dev 200 response values inner 数据结构
 * @description Get Time Series Std Dev 200 response values inner 字段。
 */
export type GetTimeSeriesStdDev_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title stddev 值
   * @description stddev 字段。
   */
  stddev: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Stoch F 200 response 数据结构
 * @description Get Time Series Stoch F 200 response 字段。
 */
export type GetTimeSeriesStochF_200_response = {
  meta: GetTimeSeriesStochF_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesStochF_200_response_values_inner>;
}

/**
 * @title Get Time Series Stoch F 200 response meta 数据结构
 * @description Get Time Series Stoch F 200 response meta 字段。
 */
export type GetTimeSeriesStochF_200_response_meta = any

/**
 * @title Get Time Series Stoch F 200 response meta indicator 数据结构
 * @description Get Time Series Stoch F 200 response meta indicator 字段。
 */
export type GetTimeSeriesStochF_200_response_meta_indicator = {
  /**
   * @title fast d period 值
   * @description 技术指标 fast d period 配置项。
   */
  fast_d_period: number;
  /**
   * @title fast dma type 值
   * @description 技术指标 fast dma type 配置项。
   */
  fast_dma_type: string;
  /**
   * @title fast k period 值
   * @description 技术指标 fast k period 配置项。
   */
  fast_k_period: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Stoch F 200 response values inner 数据结构
 * @description Get Time Series Stoch F 200 response values inner 字段。
 */
export type GetTimeSeriesStochF_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title fast d 值
   * @description fast d 字段。
   */
  fast_d: string;
  /**
   * @title fast k 值
   * @description fast k 字段。
   */
  fast_k: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Stoch Rsi 200 response 数据结构
 * @description Get Time Series Stoch Rsi 200 response 字段。
 */
export type GetTimeSeriesStochRsi_200_response = {
  meta: GetTimeSeriesStochRsi_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesStochRsi_200_response_values_inner>;
}

/**
 * @title Get Time Series Stoch Rsi 200 response meta 数据结构
 * @description Get Time Series Stoch Rsi 200 response meta 字段。
 */
export type GetTimeSeriesStochRsi_200_response_meta = any

/**
 * @title Get Time Series Stoch Rsi 200 response meta indicator 数据结构
 * @description Get Time Series Stoch Rsi 200 response meta indicator 字段。
 */
export type GetTimeSeriesStochRsi_200_response_meta_indicator = {
  /**
   * @title d period 值
   * @description 技术指标 d period 配置项。
   */
  d_period: number;
  /**
   * @title k period 值
   * @description 技术指标 k period 配置项。
   */
  k_period: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title rsi length 值
   * @description 技术指标 rsi length 配置项。
   */
  rsi_length: number;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title stoch length 值
   * @description 技术指标 stoch length 配置项。
   */
  stoch_length: number;
}

/**
 * @title Get Time Series Stoch Rsi 200 response values inner 数据结构
 * @description Get Time Series Stoch Rsi 200 response values inner 字段。
 */
export type GetTimeSeriesStochRsi_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title d 值
   * @description d 字段。
   */
  d: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title k 值
   * @description k 字段。
   */
  k: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Stoch 200 response 数据结构
 * @description Get Time Series Stoch 200 response 字段。
 */
export type GetTimeSeriesStoch_200_response = {
  meta: GetTimeSeriesStoch_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesStoch_200_response_values_inner>;
}

/**
 * @title Get Time Series Stoch 200 response meta 数据结构
 * @description Get Time Series Stoch 200 response meta 字段。
 */
export type GetTimeSeriesStoch_200_response_meta = any

/**
 * @title Get Time Series Stoch 200 response meta indicator 数据结构
 * @description Get Time Series Stoch 200 response meta indicator 字段。
 */
export type GetTimeSeriesStoch_200_response_meta_indicator = {
  /**
   * @title fast k period 值
   * @description 技术指标 fast k period 配置项。
   */
  fast_k_period: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title slow d period 值
   * @description 技术指标 slow d period 配置项。
   */
  slow_d_period: number;
  /**
   * @title slow dma type 值
   * @description 技术指标 slow dma type 配置项。
   */
  slow_dma_type: string;
  /**
   * @title slow k period 值
   * @description 技术指标 slow k period 配置项。
   */
  slow_k_period: number;
  /**
   * @title slow kma type 值
   * @description 技术指标 slow kma type 配置项。
   */
  slow_kma_type: string;
}

/**
 * @title Get Time Series Stoch 200 response values inner 数据结构
 * @description Get Time Series Stoch 200 response values inner 字段。
 */
export type GetTimeSeriesStoch_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title slow d 值
   * @description slow d 字段。
   */
  slow_d: string;
  /**
   * @title slow k 值
   * @description slow k 字段。
   */
  slow_k: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Sub 200 response 数据结构
 * @description Get Time Series Sub 200 response 字段。
 */
export type GetTimeSeriesSub_200_response = {
  meta: GetTimeSeriesSub_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesSub_200_response_values_inner>;
}

/**
 * @title Get Time Series Sub 200 response meta 数据结构
 * @description Get Time Series Sub 200 response meta 字段。
 */
export type GetTimeSeriesSub_200_response_meta = any

/**
 * @title Get Time Series Sub 200 response meta indicator 数据结构
 * @description Get Time Series Sub 200 response meta indicator 字段。
 */
export type GetTimeSeriesSub_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 1 值
   * @description 技术指标 series type 1 配置项。
   */
  series_type_1: string;
  /**
   * @title series type 2 值
   * @description 技术指标 series type 2 配置项。
   */
  series_type_2: string;
}

/**
 * @title Get Time Series Sub 200 response values inner 数据结构
 * @description Get Time Series Sub 200 response values inner 字段。
 */
export type GetTimeSeriesSub_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title sub 值
   * @description sub 字段。
   */
  sub: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Sum 200 response 数据结构
 * @description Get Time Series Sum 200 response 字段。
 */
export type GetTimeSeriesSum_200_response = {
  meta: GetTimeSeriesSum_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesSum_200_response_values_inner>;
}

/**
 * @title Get Time Series Sum 200 response meta 数据结构
 * @description Get Time Series Sum 200 response meta 字段。
 */
export type GetTimeSeriesSum_200_response_meta = any

/**
 * @title Get Time Series Sum 200 response meta indicator 数据结构
 * @description Get Time Series Sum 200 response meta indicator 字段。
 */
export type GetTimeSeriesSum_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Sum 200 response values inner 数据结构
 * @description Get Time Series Sum 200 response values inner 字段。
 */
export type GetTimeSeriesSum_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title sum 值
   * @description sum 字段。
   */
  sum: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Super Trend Heikin Ashi Candles 200 response 数据结构
 * @description Get Time Series Super Trend Heikin Ashi Candles 200 response 字段。
 */
export type GetTimeSeriesSuperTrendHeikinAshiCandles_200_response = {
  meta: GetTimeSeriesSuperTrendHeikinAshiCandles_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesSuperTrendHeikinAshiCandles_200_response_values_inner>;
}

/**
 * @title Get Time Series Super Trend Heikin Ashi Candles 200 response meta 数据结构
 * @description Get Time Series Super Trend Heikin Ashi Candles 200 response meta 字段。
 */
export type GetTimeSeriesSuperTrendHeikinAshiCandles_200_response_meta = any

/**
 * @title Get Time Series Super Trend Heikin Ashi Candles 200 response meta indicator 数据结构
 * @description Get Time Series Super Trend Heikin Ashi Candles 200 response meta indicator 字段。
 */
export type GetTimeSeriesSuperTrendHeikinAshiCandles_200_response_meta_indicator = {
  /**
   * @title multiplier 值
   * @description 技术指标 multiplier 配置项。
   */
  multiplier: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title period 值
   * @description 技术指标 period 配置项。
   */
  period: number;
}

/**
 * @title Get Time Series Super Trend Heikin Ashi Candles 200 response values inner 数据结构
 * @description Get Time Series Super Trend Heikin Ashi Candles 200 response values inner 字段。
 */
export type GetTimeSeriesSuperTrendHeikinAshiCandles_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title heikincloses 值
   * @description heikincloses 字段。
   */
  heikincloses: string;
  /**
   * @title heikinhighs 值
   * @description heikinhighs 字段。
   */
  heikinhighs: string;
  /**
   * @title heikinlows 值
   * @description heikinlows 字段。
   */
  heikinlows: string;
  /**
   * @title heikinopens 值
   * @description heikinopens 字段。
   */
  heikinopens: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title supertrend 值
   * @description supertrend 字段。
   */
  supertrend: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Super Trend 200 response 数据结构
 * @description Get Time Series Super Trend 200 response 字段。
 */
export type GetTimeSeriesSuperTrend_200_response = {
  meta: GetTimeSeriesSuperTrend_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesSuperTrend_200_response_values_inner>;
}

/**
 * @title Get Time Series Super Trend 200 response meta 数据结构
 * @description Get Time Series Super Trend 200 response meta 字段。
 */
export type GetTimeSeriesSuperTrend_200_response_meta = any

/**
 * @title Get Time Series Super Trend 200 response meta indicator 数据结构
 * @description Get Time Series Super Trend 200 response meta indicator 字段。
 */
export type GetTimeSeriesSuperTrend_200_response_meta_indicator = {
  /**
   * @title multiplier 值
   * @description 技术指标 multiplier 配置项。
   */
  multiplier: number;
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title period 值
   * @description 技术指标 period 配置项。
   */
  period: number;
}

/**
 * @title Get Time Series Super Trend 200 response values inner 数据结构
 * @description Get Time Series Super Trend 200 response values inner 字段。
 */
export type GetTimeSeriesSuperTrend_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title supertrend 值
   * @description supertrend 字段。
   */
  supertrend: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series T3ma 200 response 数据结构
 * @description Get Time Series T3ma 200 response 字段。
 */
export type GetTimeSeriesT3ma_200_response = {
  meta: GetTimeSeriesT3ma_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesT3ma_200_response_values_inner>;
}

/**
 * @title Get Time Series T3ma 200 response meta 数据结构
 * @description Get Time Series T3ma 200 response meta 字段。
 */
export type GetTimeSeriesT3ma_200_response_meta = any

/**
 * @title Get Time Series T3ma 200 response meta indicator 数据结构
 * @description Get Time Series T3ma 200 response meta indicator 字段。
 */
export type GetTimeSeriesT3ma_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
  /**
   * @title v factor 值
   * @description 技术指标 v factor 配置项。
   */
  v_factor: number;
}

/**
 * @title Get Time Series T3ma 200 response values inner 数据结构
 * @description Get Time Series T3ma 200 response values inner 字段。
 */
export type GetTimeSeriesT3ma_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title t3ma 值
   * @description t3ma 字段。
   */
  t3ma: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series TRange 200 response 数据结构
 * @description Get Time Series TRange 200 response 字段。
 */
export type GetTimeSeriesTRange_200_response = {
  meta: GetTimeSeriesTRange_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesTRange_200_response_values_inner>;
}

/**
 * @title Get Time Series TRange 200 response meta 数据结构
 * @description Get Time Series TRange 200 response meta 字段。
 */
export type GetTimeSeriesTRange_200_response_meta = any

/**
 * @title Get Time Series TRange 200 response meta indicator 数据结构
 * @description Get Time Series TRange 200 response meta indicator 字段。
 */
export type GetTimeSeriesTRange_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series TRange 200 response values inner 数据结构
 * @description Get Time Series TRange 200 response values inner 字段。
 */
export type GetTimeSeriesTRange_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title trange 值
   * @description trange 字段。
   */
  trange: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Tema 200 response 数据结构
 * @description Get Time Series Tema 200 response 字段。
 */
export type GetTimeSeriesTema_200_response = {
  meta: GetTimeSeriesTema_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesTema_200_response_values_inner>;
}

/**
 * @title Get Time Series Tema 200 response meta 数据结构
 * @description Get Time Series Tema 200 response meta 字段。
 */
export type GetTimeSeriesTema_200_response_meta = any

/**
 * @title Get Time Series Tema 200 response meta indicator 数据结构
 * @description Get Time Series Tema 200 response meta indicator 字段。
 */
export type GetTimeSeriesTema_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Tema 200 response values inner 数据结构
 * @description Get Time Series Tema 200 response values inner 字段。
 */
export type GetTimeSeriesTema_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title tema 值
   * @description tema 字段。
   */
  tema: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Trima 200 response 数据结构
 * @description Get Time Series Trima 200 response 字段。
 */
export type GetTimeSeriesTrima_200_response = {
  meta: GetTimeSeriesTrima_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesTrima_200_response_values_inner>;
}

/**
 * @title Get Time Series Trima 200 response meta 数据结构
 * @description Get Time Series Trima 200 response meta 字段。
 */
export type GetTimeSeriesTrima_200_response_meta = any

/**
 * @title Get Time Series Trima 200 response meta indicator 数据结构
 * @description Get Time Series Trima 200 response meta indicator 字段。
 */
export type GetTimeSeriesTrima_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Trima 200 response values inner 数据结构
 * @description Get Time Series Trima 200 response values inner 字段。
 */
export type GetTimeSeriesTrima_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title trima 值
   * @description trima 字段。
   */
  trima: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Tsf 200 response 数据结构
 * @description Get Time Series Tsf 200 response 字段。
 */
export type GetTimeSeriesTsf_200_response = {
  meta: GetTimeSeriesTsf_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesTsf_200_response_values_inner>;
}

/**
 * @title Get Time Series Tsf 200 response meta 数据结构
 * @description Get Time Series Tsf 200 response meta 字段。
 */
export type GetTimeSeriesTsf_200_response_meta = any

/**
 * @title Get Time Series Tsf 200 response meta indicator 数据结构
 * @description Get Time Series Tsf 200 response meta indicator 字段。
 */
export type GetTimeSeriesTsf_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Tsf 200 response values inner 数据结构
 * @description Get Time Series Tsf 200 response values inner 字段。
 */
export type GetTimeSeriesTsf_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title tsf 值
   * @description tsf 字段。
   */
  tsf: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Typ Price 200 response 数据结构
 * @description Get Time Series Typ Price 200 response 字段。
 */
export type GetTimeSeriesTypPrice_200_response = {
  meta: GetTimeSeriesTypPrice_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesTypPrice_200_response_values_inner>;
}

/**
 * @title Get Time Series Typ Price 200 response meta 数据结构
 * @description Get Time Series Typ Price 200 response meta 字段。
 */
export type GetTimeSeriesTypPrice_200_response_meta = any

/**
 * @title Get Time Series Typ Price 200 response meta indicator 数据结构
 * @description Get Time Series Typ Price 200 response meta indicator 字段。
 */
export type GetTimeSeriesTypPrice_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Typ Price 200 response values inner 数据结构
 * @description Get Time Series Typ Price 200 response values inner 字段。
 */
export type GetTimeSeriesTypPrice_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title typprice 值
   * @description typprice 字段。
   */
  typprice: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Ult Osc 200 response 数据结构
 * @description Get Time Series Ult Osc 200 response 字段。
 */
export type GetTimeSeriesUltOsc_200_response = {
  meta: GetTimeSeriesUltOsc_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesUltOsc_200_response_values_inner>;
}

/**
 * @title Get Time Series Ult Osc 200 response meta 数据结构
 * @description Get Time Series Ult Osc 200 response meta 字段。
 */
export type GetTimeSeriesUltOsc_200_response_meta = any

/**
 * @title Get Time Series Ult Osc 200 response meta indicator 数据结构
 * @description Get Time Series Ult Osc 200 response meta indicator 字段。
 */
export type GetTimeSeriesUltOsc_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 1 值
   * @description 技术指标 time period 1 配置项。
   */
  time_period_1: number;
  /**
   * @title time period 2 值
   * @description 技术指标 time period 2 配置项。
   */
  time_period_2: number;
  /**
   * @title time period 3 值
   * @description 技术指标 time period 3 配置项。
   */
  time_period_3: number;
}

/**
 * @title Get Time Series Ult Osc 200 response values inner 数据结构
 * @description Get Time Series Ult Osc 200 response values inner 字段。
 */
export type GetTimeSeriesUltOsc_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title ultosc 值
   * @description ultosc 字段。
   */
  ultosc: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Var 200 response 数据结构
 * @description Get Time Series Var 200 response 字段。
 */
export type GetTimeSeriesVar_200_response = {
  meta: GetTimeSeriesVar_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesVar_200_response_values_inner>;
}

/**
 * @title Get Time Series Var 200 response meta 数据结构
 * @description Get Time Series Var 200 response meta 字段。
 */
export type GetTimeSeriesVar_200_response_meta = any

/**
 * @title Get Time Series Var 200 response meta indicator 数据结构
 * @description Get Time Series Var 200 response meta indicator 字段。
 */
export type GetTimeSeriesVar_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Var 200 response values inner 数据结构
 * @description Get Time Series Var 200 response values inner 字段。
 */
export type GetTimeSeriesVar_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title var 值
   * @description var 字段。
   */
  var: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Get Time Series Vwap 200 response 数据结构
 * @description Get Time Series Vwap 200 response 字段。
 */
export type GetTimeSeriesVwap_200_response = {
  meta: GetTimeSeriesVwap_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesVwap_200_response_values_inner>;
}

/**
 * @title Get Time Series Vwap 200 response meta 数据结构
 * @description Get Time Series Vwap 200 response meta 字段。
 */
export type GetTimeSeriesVwap_200_response_meta = any

/**
 * @title Get Time Series Vwap 200 response meta indicator 数据结构
 * @description Get Time Series Vwap 200 response meta indicator 字段。
 */
export type GetTimeSeriesVwap_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title sd 值
   * @description 技术指标 sd 配置项。
   */
  sd?: number;
  /**
   * @title sd time period 值
   * @description sd time period 字段。
   */
  sd_time_period?: number;
}

/**
 * @title Get Time Series Vwap 200 response values inner 数据结构
 * @description Get Time Series Vwap 200 response values inner 字段。
 */
export type GetTimeSeriesVwap_200_response_values_inner = {
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title vwap 值
   * @description vwap 字段。
   */
  vwap: string;
  /**
   * @title vwap lower 值
   * @description vwap lower 字段。
   */
  vwap_lower?: string;
  /**
   * @title vwap upper 值
   * @description vwap upper 字段。
   */
  vwap_upper?: string;
}

/**
 * @title Get Time Series Wcl Price 200 response 数据结构
 * @description Get Time Series Wcl Price 200 response 字段。
 */
export type GetTimeSeriesWclPrice_200_response = {
  meta: GetTimeSeriesWclPrice_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesWclPrice_200_response_values_inner>;
}

/**
 * @title Get Time Series Wcl Price 200 response meta 数据结构
 * @description Get Time Series Wcl Price 200 response meta 字段。
 */
export type GetTimeSeriesWclPrice_200_response_meta = any

/**
 * @title Get Time Series Wcl Price 200 response meta indicator 数据结构
 * @description Get Time Series Wcl Price 200 response meta indicator 字段。
 */
export type GetTimeSeriesWclPrice_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
}

/**
 * @title Get Time Series Wcl Price 200 response values inner 数据结构
 * @description Get Time Series Wcl Price 200 response values inner 字段。
 */
export type GetTimeSeriesWclPrice_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
  /**
   * @title wclprice 值
   * @description wclprice 字段。
   */
  wclprice: string;
}

/**
 * @title Get Time Series Will R 200 response 数据结构
 * @description Get Time Series Will R 200 response 字段。
 */
export type GetTimeSeriesWillR_200_response = {
  meta: GetTimeSeriesWillR_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesWillR_200_response_values_inner>;
}

/**
 * @title Get Time Series Will R 200 response meta 数据结构
 * @description Get Time Series Will R 200 response meta 字段。
 */
export type GetTimeSeriesWillR_200_response_meta = any

/**
 * @title Get Time Series Will R 200 response meta indicator 数据结构
 * @description Get Time Series Will R 200 response meta indicator 字段。
 */
export type GetTimeSeriesWillR_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Will R 200 response values inner 数据结构
 * @description Get Time Series Will R 200 response values inner 字段。
 */
export type GetTimeSeriesWillR_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
  /**
   * @title willr 值
   * @description willr 字段。
   */
  willr: string;
}

/**
 * @title Get Time Series Wma 200 response 数据结构
 * @description Get Time Series Wma 200 response 字段。
 */
export type GetTimeSeriesWma_200_response = {
  meta: GetTimeSeriesWma_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<GetTimeSeriesWma_200_response_values_inner>;
}

/**
 * @title Get Time Series Wma 200 response meta 数据结构
 * @description Get Time Series Wma 200 response meta 字段。
 */
export type GetTimeSeriesWma_200_response_meta = any

/**
 * @title Get Time Series Wma 200 response meta indicator 数据结构
 * @description Get Time Series Wma 200 response meta indicator 字段。
 */
export type GetTimeSeriesWma_200_response_meta_indicator = {
  /**
   * @title name 值
   * @description 上游返回的金融工具名称。
   */
  name: string;
  /**
   * @title series type 值
   * @description 技术指标 series type 配置项。
   */
  series_type: string;
  /**
   * @title time period 值
   * @description 技术指标 time period 配置项。
   */
  time_period: number;
}

/**
 * @title Get Time Series Wma 200 response values inner 数据结构
 * @description Get Time Series Wma 200 response values inner 字段。
 */
export type GetTimeSeriesWma_200_response_values_inner = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close?: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high?: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low?: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open?: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
  /**
   * @title wma 值
   * @description wma 字段。
   */
  wma: string;
}

/**
 * @title Get Time Series 200 response 数据结构
 * @description Get Time Series 200 response 字段。
 */
export type GetTimeSeries_200_response = {
  meta: GetTimeSeries_200_response_meta;
  /**
   * @title status 值
   * @description 上游请求状态。
   */
  status: string;
  /**
   * @title values 值
   * @description 时间序列或指标值集合。
   */
  values: Array<TimeSeriesItem>;
}

/**
 * @title Get Time Series 200 response meta 数据结构
 * @description Get Time Series 200 response meta 字段。
 */
export type GetTimeSeries_200_response_meta = {
  /**
   * @title currency 值
   * @description 货币代码。
   */
  currency?: string;
  /**
   * @title exchange 值
   * @description 上游返回的交易场所名称。
   */
  exchange?: string;
  /**
   * @title exchange timezone 值
   * @description exchange timezone 字段。
   */
  exchange_timezone?: string;
  /**
   * @title interval 值
   * @description 时间序列或指标计算的时间间隔。
   */
  interval: string;
  /**
   * @title mic code 值
   * @description mic code 字段。
   */
  mic_code?: string;
  /**
   * @title symbol 值
   * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
   */
  symbol: string;
  /**
   * @title type 值
   * @description 金融工具类型。
   */
  type: string;
}

/**
 * @title Interval Enum 数据结构
 * @description Interval Enum 字段。
 */
export type IntervalEnum = '1min' | '5min' | '15min' | '30min' | '45min' | '1h' | '2h' | '4h' | '8h' | '1day' | '1week' | '1month'

/**
 * @title Ma Type Enum 数据结构
 * @description Ma Type Enum 字段。
 */
export type MaTypeEnum = 'SMA' | 'EMA' | 'WMA' | 'DEMA' | 'TEMA' | 'TRIMA' | 'KAMA' | 'MAMA' | 'T3MA'

/**
 * @title Order Enum 数据结构
 * @description Order Enum 字段。
 */
export type OrderEnum = 'asc' | 'desc'

/**
 * @title Series Type Enum 数据结构
 * @description Series Type Enum 字段。
 */
export type SeriesTypeEnum = 'close' | 'open' | 'high' | 'low' | 'volume'

/**
 * @title Series Type Stochrsi Enum 数据结构
 * @description Series Type Stochrsi Enum 字段。
 */
export type SeriesTypeStochrsiEnum = 'open' | 'high' | 'low' | 'close'

/**
 * @title Technical Indicators Response Macd Output Value 数据结构
 * @description Technical Indicators Response Macd Output Value 字段。
 */
export type TechnicalIndicatorsResponseMacdOutputValue = {
  /**
   * @title default color 值
   * @description default color 字段。
   */
  default_color?: string;
  /**
   * @title display 值
   * @description display 字段。
   */
  display?: 'line' | 'histogram' | 'candle' | 'points';
  /**
   * @title max range 值
   * @description max range 字段。
   */
  max_range?: number;
  /**
   * @title min range 值
   * @description min range 字段。
   */
  min_range?: number;
}

/**
 * @title Technical Indicators Response Macd Output Values 数据结构
 * @description Technical Indicators Response Macd Output Values 字段。
 */
export type TechnicalIndicatorsResponseMacdOutputValues = {
  parameter_name?: TechnicalIndicatorsResponseMacdOutputValue;
}

/**
 * @title Technical Indicators Response Macd Parameter 数据结构
 * @description Technical Indicators Response Macd Parameter 字段。
 */
export type TechnicalIndicatorsResponseMacdParameter = {
  /**
   * @title default 值
   * @description default 字段。
   */
  default?: number;
  /**
   * @title max range 值
   * @description max range 字段。
   */
  max_range?: number;
  /**
   * @title min range 值
   * @description min range 字段。
   */
  min_range?: number;
  /**
   * @title range 值
   * @description range 字段。
   */
  range?: Array<string>;
  /**
   * @title type 值
   * @description 金融工具类型。
   */
  type?: string;
}

/**
 * @title Technical Indicators Response Macd Parameters 数据结构
 * @description Technical Indicators Response Macd Parameters 字段。
 */
export type TechnicalIndicatorsResponseMacdParameters = {
  parameter_name?: TechnicalIndicatorsResponseMacdParameter;
}

/**
 * @title Technical Indicators Response Macd Tinting 数据结构
 * @description Technical Indicators Response Macd Tinting 字段。
 */
export type TechnicalIndicatorsResponseMacdTinting = {
  /**
   * @title color 值
   * @description color 字段。
   */
  color?: string;
  /**
   * @title display 值
   * @description display 字段。
   */
  display?: string;
  /**
   * @title lower bound 值
   * @description lower bound 字段。
   */
  lower_bound?: any;
  /**
   * @title transparency 值
   * @description transparency 字段。
   */
  transparency?: number;
  /**
   * @title upper bound 值
   * @description upper bound 字段。
   */
  upper_bound?: any;
}

/**
 * @title Time Series Indicator Meta 数据结构
 * @description Time Series Indicator Meta 字段。
 */
export type TimeSeriesIndicatorMeta = {
  /**
   * @title currency 值
   * @description 货币代码。
   */
  currency?: string;
  /**
   * @title exchange 值
   * @description 上游返回的交易场所名称。
   */
  exchange?: string;
  /**
   * @title exchange timezone 值
   * @description exchange timezone 字段。
   */
  exchange_timezone?: string;
  /**
   * @title interval 值
   * @description 时间序列或指标计算的时间间隔。
   */
  interval?: string;
  /**
   * @title mic code 值
   * @description mic code 字段。
   */
  mic_code?: string;
  /**
   * @title symbol 值
   * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
   */
  symbol?: string;
  /**
   * @title type 值
   * @description 金融工具类型。
   */
  type?: string;
}

/**
 * @title Time Series Item 数据结构
 * @description Time Series Item 字段。
 */
export type TimeSeriesItem = {
  /**
   * @title close 值
   * @description 收盘或最新价格。
   */
  close: string;
  /**
   * @title datetime 值
   * @description 上游返回的日期时间文本。
   */
  datetime: string;
  /**
   * @title high 值
   * @description 最高价格。
   */
  high: string;
  /**
   * @title low 值
   * @description 最低价格。
   */
  low: string;
  /**
   * @title open 值
   * @description 开盘价格。
   */
  open: string;
  /**
   * @title volume 值
   * @description volume 字段。
   */
  volume?: string;
}

/**
 * @title Type Enum 数据结构
 * @description Type Enum 字段。
 */
export type TypeEnum = 'American Depositary Receipt' | 'Bond' | 'Bond Fund' | 'Closed-end Fund' | 'Common Stock' | 'Depositary Receipt' | 'Digital Currency' | 'ETF' | 'Exchange-Traded Note' | 'Global Depositary Receipt' | 'Limited Partnership' | 'Mutual Fund' | 'Physical Currency' | 'Preferred Stock' | 'REIT' | 'Right' | 'Structured Product' | 'Trust' | 'Unit' | 'Warrant'
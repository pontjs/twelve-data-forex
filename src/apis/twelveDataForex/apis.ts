/**
 * @author pontx-generator
 * @description API 类型定义
 */

import type * as schemas from './schemas';

// ============ currencies 模块 ============

export declare namespace currencies {
  export type GetCurrencyConversionParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    /**
     * @title amount 值
     * @description 需要换算的金额。
     */
    amount: number;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
  };

  export type GetExchangeRateParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
  };

}

export type currencies = {
  /**
   * GET /currency_conversion
   * 按指定外汇货币对换算一个金额。
   * @summary: 换算货币金额
   */
  GetCurrencyConversion: (
    params: currencies.GetCurrencyConversionParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetCurrencyConversion_200_response>;

  /**
   * GET /exchange_rate
   * 返回指定基准/报价货币对的汇率。
   * @summary: 查询外汇汇率
   */
  GetExchangeRate: (
    params: currencies.GetExchangeRateParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetExchangeRate_200_response>;

};

// ============ market_data 模块 ============

export declare namespace market_data {
  export type GetEodParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
  };

  export type GetPriceParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
  };

  export type GetQuoteParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval?: schemas.IntervalEnum;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    /**
     * @title volume time period 值
     * @description volume time period 字段。
     */
    volume_time_period?: number;
    type?: schemas.TypeEnum;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    /**
     * @title eod 值
     * @description eod 字段。
     */
    eod?: boolean;
    /**
     * @title rolling period 值
     * @description rolling period 字段。
     */
    rolling_period?: number;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
  };

  export type GetTimeSeriesParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
  };

}

export type market_data = {
  /**
   * GET /eod
   * 返回指定外汇货币对的日终价格数据。
   * @summary: 查询外汇日终价格
   */
  GetEod: (
    params: market_data.GetEodParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetEod_200_response>;

  /**
   * GET /price
   * 返回指定外汇货币对当前可用的最新价格。
   * @summary: 查询外汇最新价格
   */
  GetPrice: (
    params: market_data.GetPriceParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetPrice_200_response>;

  /**
   * GET /quote
   * 返回指定外汇货币对的报价字段。
   * @summary: 查询外汇报价
   */
  GetQuote: (
    params: market_data.GetQuoteParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetQuote_200_response>;

  /**
   * GET /time_series
   * 按给定时间间隔返回外汇货币对的历史时间序列。
   * @summary: 查询外汇时间序列
   */
  GetTimeSeries: (
    params: market_data.GetTimeSeriesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeries_200_response>;

};

// ============ reference_data 模块 ============

export declare namespace reference_data {
  export type GetForexPairsParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    /**
     * @title currency base 值
     * @description 基准货币代码。
     */
    currency_base?: string;
    /**
     * @title currency quote 值
     * @description 报价货币代码。
     */
    currency_quote?: string;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title page 值
     * @description page 字段。
     */
    page?: number;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
  };

}

export type reference_data = {
  /**
   * GET /forex_pairs
   * 列出可用外汇货币对，可按货币对或基准/报价货币筛选。
   * @summary: 列出外汇货币对
   */
  GetForexPairs: (
    params: reference_data.GetForexPairsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetForexPairs_200_response>;

  /**
   * GET /intervals
   * 列出可用于时间序列与技术指标计算的时间间隔。
   * @summary: 列出时间间隔
   */
  GetIntervals: (
    requestInit?: RequestInit,
  ) => Promise<schemas.GetIntervals_200_response>;

  /**
   * GET /technical_indicators
   * 列出可用于外汇时间序列的技术指标标识。
   * @summary: 列出技术指标
   */
  GetTechnicalIndicators: (
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTechnicalIndicators_200_response>;

};

// ============ technical_indicator 模块 ============

export declare namespace technical_indicator {
  export type GetTimeSeriesAdParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesAdOscParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title fast period 值
     * @description 技术指标 fast period 配置项。
     */
    fast_period?: number;
    /**
     * @title slow period 值
     * @description 技术指标 slow period 配置项。
     */
    slow_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesAddParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type_1?: schemas.SeriesTypeEnum;
    series_type_2?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesAdxParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesAdxrParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesApoParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title fast period 值
     * @description 技术指标 fast period 配置项。
     */
    fast_period?: number;
    /**
     * @title slow period 值
     * @description 技术指标 slow period 配置项。
     */
    slow_period?: number;
    ma_type?: schemas.MaTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesAroonParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesAroonOscParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesAtrParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesAvgParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesAvgPriceParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesBBandsParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title sd 值
     * @description 技术指标 sd 配置项。
     */
    sd?: number;
    ma_type?: schemas.MaTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesBetaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type_1?: schemas.SeriesTypeEnum;
    series_type_2?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesBopParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesCciParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesCeilParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesCmoParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesCoppockParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title wma period 值
     * @description 技术指标 wma period 配置项。
     */
    wma_period?: number;
    /**
     * @title long roc period 值
     * @description long roc period 字段。
     */
    long_roc_period?: number;
    /**
     * @title short roc period 值
     * @description short roc period 字段。
     */
    short_roc_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesCorrelParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type_1?: schemas.SeriesTypeEnum;
    series_type_2?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesCrsiParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title rsi period 值
     * @description 技术指标 rsi period 配置项。
     */
    rsi_period?: number;
    /**
     * @title up down length 值
     * @description up down length 字段。
     */
    up_down_length?: number;
    /**
     * @title percent rank period 值
     * @description percent rank period 字段。
     */
    percent_rank_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesDemaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesDivParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type_1?: schemas.SeriesTypeEnum;
    series_type_2?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesDpoParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title centered 值
     * @description centered 字段。
     */
    centered?: boolean;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesDxParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesEmaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesExpParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesFloorParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesHeikinashiCandlesParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesHlc3Params = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesHtDcPeriodParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesHtDcPhaseParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesHtPhasorParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesHtSineParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesHtTrendModeParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesHtTrendlineParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesIchimokuParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title conversion line period 值
     * @description conversion line period 字段。
     */
    conversion_line_period?: number;
    /**
     * @title base line period 值
     * @description base line period 字段。
     */
    base_line_period?: number;
    /**
     * @title leading span b period 值
     * @description leading span b period 字段。
     */
    leading_span_b_period?: number;
    /**
     * @title lagging span period 值
     * @description lagging span period 字段。
     */
    lagging_span_period?: number;
    /**
     * @title include ahead span period 值
     * @description include ahead span period 字段。
     */
    include_ahead_span_period?: boolean;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesKamaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesKeltnerParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title atr time period 值
     * @description atr time period 字段。
     */
    atr_time_period?: number;
    /**
     * @title multiplier 值
     * @description 技术指标 multiplier 配置项。
     */
    multiplier?: number;
    series_type?: schemas.SeriesTypeEnum;
    ma_type?: schemas.MaTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesKstParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title roc period 1 值
     * @description roc period 1 字段。
     */
    roc_period_1?: number;
    /**
     * @title roc period 2 值
     * @description roc period 2 字段。
     */
    roc_period_2?: number;
    /**
     * @title roc period 3 值
     * @description roc period 3 字段。
     */
    roc_period_3?: number;
    /**
     * @title roc period 4 值
     * @description roc period 4 字段。
     */
    roc_period_4?: number;
    /**
     * @title sma period 1 值
     * @description sma period 1 字段。
     */
    sma_period_1?: number;
    /**
     * @title sma period 2 值
     * @description sma period 2 字段。
     */
    sma_period_2?: number;
    /**
     * @title sma period 3 值
     * @description sma period 3 字段。
     */
    sma_period_3?: number;
    /**
     * @title sma period 4 值
     * @description sma period 4 字段。
     */
    sma_period_4?: number;
    /**
     * @title signal period 值
     * @description signal period 字段。
     */
    signal_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesLinearRegParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesLinearRegAngleParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesLinearRegInterceptParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesLinearRegSlopeParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesLnParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesLog10Params = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    ma_type?: schemas.MaTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMacdParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title fast period 值
     * @description 技术指标 fast period 配置项。
     */
    fast_period?: number;
    /**
     * @title slow period 值
     * @description 技术指标 slow period 配置项。
     */
    slow_period?: number;
    /**
     * @title signal period 值
     * @description signal period 字段。
     */
    signal_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMacdExtParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title fast period 值
     * @description 技术指标 fast period 配置项。
     */
    fast_period?: number;
    fast_ma_type?: schemas.MaTypeEnum;
    /**
     * @title slow period 值
     * @description 技术指标 slow period 配置项。
     */
    slow_period?: number;
    slow_ma_type?: schemas.MaTypeEnum;
    /**
     * @title signal period 值
     * @description signal period 字段。
     */
    signal_period?: number;
    signal_ma_type?: schemas.MaTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMacdSlopeParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title fast period 值
     * @description 技术指标 fast period 配置项。
     */
    fast_period?: number;
    /**
     * @title slow period 值
     * @description 技术指标 slow period 配置项。
     */
    slow_period?: number;
    /**
     * @title signal period 值
     * @description signal period 字段。
     */
    signal_period?: number;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMamaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title fast limit 值
     * @description fast limit 字段。
     */
    fast_limit?: number;
    /**
     * @title slow limit 值
     * @description slow limit 字段。
     */
    slow_limit?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMaxParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMaxIndexParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMcGinleyDynamicParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMedPriceParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMfiParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMidPointParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMidPriceParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMinParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMinIndexParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMinMaxParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMinMaxIndexParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMinusDIParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMinusDMParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMomParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesMultParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type_1?: schemas.SeriesTypeEnum;
    series_type_2?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesNatrParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesObvParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesPercent_BParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title sd 值
     * @description 技术指标 sd 配置项。
     */
    sd?: number;
    ma_type?: schemas.MaTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesPivotPointsHLParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesPlusDIParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesPlusDMParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesPpoParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title fast period 值
     * @description 技术指标 fast period 配置项。
     */
    fast_period?: number;
    /**
     * @title slow period 值
     * @description 技术指标 slow period 配置项。
     */
    slow_period?: number;
    ma_type?: schemas.MaTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesRocParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesRocpParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesRocrParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesRocr100Params = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesRsiParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesRvolParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesSarParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title acceleration 值
     * @description acceleration 字段。
     */
    acceleration?: number;
    /**
     * @title maximum 值
     * @description maximum 字段。
     */
    maximum?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesSarExtParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title start value 值
     * @description start value 字段。
     */
    start_value?: number;
    /**
     * @title offset on reverse 值
     * @description offset on reverse 字段。
     */
    offset_on_reverse?: number;
    /**
     * @title acceleration limit long 值
     * @description acceleration limit long 字段。
     */
    acceleration_limit_long?: number;
    /**
     * @title acceleration long 值
     * @description acceleration long 字段。
     */
    acceleration_long?: number;
    /**
     * @title acceleration max long 值
     * @description acceleration max long 字段。
     */
    acceleration_max_long?: number;
    /**
     * @title acceleration limit short 值
     * @description acceleration limit short 字段。
     */
    acceleration_limit_short?: number;
    /**
     * @title acceleration short 值
     * @description acceleration short 字段。
     */
    acceleration_short?: number;
    /**
     * @title acceleration max short 值
     * @description acceleration max short 字段。
     */
    acceleration_max_short?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesSmaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesSqrtParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesStdDevParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title sd 值
     * @description 技术指标 sd 配置项。
     */
    sd?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesStochParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title fast k period 值
     * @description 技术指标 fast k period 配置项。
     */
    fast_k_period?: number;
    /**
     * @title slow k period 值
     * @description 技术指标 slow k period 配置项。
     */
    slow_k_period?: number;
    /**
     * @title slow d period 值
     * @description 技术指标 slow d period 配置项。
     */
    slow_d_period?: number;
    slow_kma_type?: schemas.MaTypeEnum;
    slow_dma_type?: schemas.MaTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesStochFParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title fast k period 值
     * @description 技术指标 fast k period 配置项。
     */
    fast_k_period?: number;
    /**
     * @title fast d period 值
     * @description 技术指标 fast d period 配置项。
     */
    fast_d_period?: number;
    fast_dma_type?: schemas.MaTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesStochRsiParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeStochrsiEnum;
    /**
     * @title rsi length 值
     * @description 技术指标 rsi length 配置项。
     */
    rsi_length?: number;
    /**
     * @title stoch length 值
     * @description 技术指标 stoch length 配置项。
     */
    stoch_length?: number;
    /**
     * @title k period 值
     * @description 技术指标 k period 配置项。
     */
    k_period?: number;
    /**
     * @title slow kma type 值
     * @description 技术指标 slow kma type 配置项。
     */
    slow_kma_type?: string;
    /**
     * @title d period 值
     * @description 技术指标 d period 配置项。
     */
    d_period?: number;
    /**
     * @title slow dma type 值
     * @description 技术指标 slow dma type 配置项。
     */
    slow_dma_type?: string;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesSubParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type_1?: schemas.SeriesTypeEnum;
    series_type_2?: schemas.SeriesTypeEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesSumParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesSuperTrendParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title period 值
     * @description 技术指标 period 配置项。
     */
    period?: number;
    /**
     * @title multiplier 值
     * @description 技术指标 multiplier 配置项。
     */
    multiplier?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesSuperTrendHeikinAshiCandlesParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title period 值
     * @description 技术指标 period 配置项。
     */
    period?: number;
    /**
     * @title multiplier 值
     * @description 技术指标 multiplier 配置项。
     */
    multiplier?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesT3maParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title v factor 值
     * @description 技术指标 v factor 配置项。
     */
    v_factor?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesTRangeParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesTemaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesTrimaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesTsfParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesTypPriceParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesUltOscParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 1 值
     * @description 技术指标 time period 1 配置项。
     */
    time_period_1?: number;
    /**
     * @title time period 2 值
     * @description 技术指标 time period 2 配置项。
     */
    time_period_2?: number;
    /**
     * @title time period 3 值
     * @description 技术指标 time period 3 配置项。
     */
    time_period_3?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesVarParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesVwapParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title sd time period 值
     * @description sd time period 字段。
     */
    sd_time_period?: number;
    /**
     * @title sd 值
     * @description 技术指标 sd 配置项。
     */
    sd?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesWclPriceParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesWillRParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

  export type GetTimeSeriesWmaParams = {
    /**
     * @title symbol 值
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    interval: schemas.IntervalEnum;
    /**
     * @title outputsize 值
     * @description 返回的数据点数量。
     */
    outputsize?: number;
    /**
     * @title exchange 值
     * @description 上游返回的交易场所名称。
     */
    exchange?: string;
    /**
     * @title mic code 值
     * @description mic code 字段。
     */
    mic_code?: string;
    /**
     * @title country 值
     * @description country 字段。
     */
    country?: string;
    type?: schemas.TypeEnum;
    /**
     * @title timezone 值
     * @description 输出时间使用的时区。
     */
    timezone?: string;
    /**
     * @title start date 值
     * @description 时间范围的起始日期或时间。
     */
    start_date?: string;
    /**
     * @title end date 值
     * @description 时间范围的结束日期或时间。
     */
    end_date?: string;
    /**
     * @title date 值
     * @description 用于查询或换算的日期。
     */
    date?: string;
    order?: schemas.OrderEnum;
    /**
     * @title prepost 值
     * @description prepost 字段。
     */
    prepost?: boolean;
    format?: schemas.FormatEnum;
    /**
     * @title delimiter 值
     * @description delimiter 字段。
     */
    delimiter?: string;
    /**
     * @title dp 值
     * @description dp 字段。
     */
    dp?: number;
    /**
     * @title previous close 值
     * @description 前一收盘价格。
     */
    previous_close?: boolean;
    adjust?: schemas.AdjustEnum;
    series_type?: schemas.SeriesTypeEnum;
    /**
     * @title time period 值
     * @description 技术指标 time period 配置项。
     */
    time_period?: number;
    /**
     * @title include ohlc 值
     * @description include ohlc 字段。
     */
    include_ohlc?: boolean;
  };

}

export type technical_indicator = {
  /**
   * GET /ad
   * 基于 EUR/USD 等外汇货币对的时间序列计算 AD 技术指标。
   * @summary: 计算外汇 AD 技术指标
   */
  GetTimeSeriesAd: (
    params: technical_indicator.GetTimeSeriesAdParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAd_200_response>;

  /**
   * GET /adosc
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ADOSC 技术指标。
   * @summary: 计算外汇 ADOSC 技术指标
   */
  GetTimeSeriesAdOsc: (
    params: technical_indicator.GetTimeSeriesAdOscParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAdOsc_200_response>;

  /**
   * GET /add
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ADD 技术指标。
   * @summary: 计算外汇 ADD 技术指标
   */
  GetTimeSeriesAdd: (
    params: technical_indicator.GetTimeSeriesAddParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAdd_200_response>;

  /**
   * GET /adx
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ADX 技术指标。
   * @summary: 计算外汇 ADX 技术指标
   */
  GetTimeSeriesAdx: (
    params: technical_indicator.GetTimeSeriesAdxParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAdx_200_response>;

  /**
   * GET /adxr
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ADXR 技术指标。
   * @summary: 计算外汇 ADXR 技术指标
   */
  GetTimeSeriesAdxr: (
    params: technical_indicator.GetTimeSeriesAdxrParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAdxr_200_response>;

  /**
   * GET /apo
   * 基于 EUR/USD 等外汇货币对的时间序列计算 APO 技术指标。
   * @summary: 计算外汇 APO 技术指标
   */
  GetTimeSeriesApo: (
    params: technical_indicator.GetTimeSeriesApoParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesApo_200_response>;

  /**
   * GET /aroon
   * 基于 EUR/USD 等外汇货币对的时间序列计算 AROON 技术指标。
   * @summary: 计算外汇 AROON 技术指标
   */
  GetTimeSeriesAroon: (
    params: technical_indicator.GetTimeSeriesAroonParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAroon_200_response>;

  /**
   * GET /aroonosc
   * 基于 EUR/USD 等外汇货币对的时间序列计算 AROONOSC 技术指标。
   * @summary: 计算外汇 AROONOSC 技术指标
   */
  GetTimeSeriesAroonOsc: (
    params: technical_indicator.GetTimeSeriesAroonOscParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAroonOsc_200_response>;

  /**
   * GET /atr
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ATR 技术指标。
   * @summary: 计算外汇 ATR 技术指标
   */
  GetTimeSeriesAtr: (
    params: technical_indicator.GetTimeSeriesAtrParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAtr_200_response>;

  /**
   * GET /avg
   * 基于 EUR/USD 等外汇货币对的时间序列计算 AVG 技术指标。
   * @summary: 计算外汇 AVG 技术指标
   */
  GetTimeSeriesAvg: (
    params: technical_indicator.GetTimeSeriesAvgParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAvg_200_response>;

  /**
   * GET /avgprice
   * 基于 EUR/USD 等外汇货币对的时间序列计算 AVGPRICE 技术指标。
   * @summary: 计算外汇 AVGPRICE 技术指标
   */
  GetTimeSeriesAvgPrice: (
    params: technical_indicator.GetTimeSeriesAvgPriceParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesAvgPrice_200_response>;

  /**
   * GET /bbands
   * 基于 EUR/USD 等外汇货币对的时间序列计算 BBANDS 技术指标。
   * @summary: 计算外汇 BBANDS 技术指标
   */
  GetTimeSeriesBBands: (
    params: technical_indicator.GetTimeSeriesBBandsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesBBands_200_response>;

  /**
   * GET /beta
   * 基于 EUR/USD 等外汇货币对的时间序列计算 BETA 技术指标。
   * @summary: 计算外汇 BETA 技术指标
   */
  GetTimeSeriesBeta: (
    params: technical_indicator.GetTimeSeriesBetaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesBeta_200_response>;

  /**
   * GET /bop
   * 基于 EUR/USD 等外汇货币对的时间序列计算 BOP 技术指标。
   * @summary: 计算外汇 BOP 技术指标
   */
  GetTimeSeriesBop: (
    params: technical_indicator.GetTimeSeriesBopParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesBop_200_response>;

  /**
   * GET /cci
   * 基于 EUR/USD 等外汇货币对的时间序列计算 CCI 技术指标。
   * @summary: 计算外汇 CCI 技术指标
   */
  GetTimeSeriesCci: (
    params: technical_indicator.GetTimeSeriesCciParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesCci_200_response>;

  /**
   * GET /ceil
   * 基于 EUR/USD 等外汇货币对的时间序列计算 CEIL 技术指标。
   * @summary: 计算外汇 CEIL 技术指标
   */
  GetTimeSeriesCeil: (
    params: technical_indicator.GetTimeSeriesCeilParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesCeil_200_response>;

  /**
   * GET /cmo
   * 基于 EUR/USD 等外汇货币对的时间序列计算 CMO 技术指标。
   * @summary: 计算外汇 CMO 技术指标
   */
  GetTimeSeriesCmo: (
    params: technical_indicator.GetTimeSeriesCmoParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesCmo_200_response>;

  /**
   * GET /coppock
   * 基于 EUR/USD 等外汇货币对的时间序列计算 COPPOCK 技术指标。
   * @summary: 计算外汇 COPPOCK 技术指标
   */
  GetTimeSeriesCoppock: (
    params: technical_indicator.GetTimeSeriesCoppockParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesCoppock_200_response>;

  /**
   * GET /correl
   * 基于 EUR/USD 等外汇货币对的时间序列计算 CORREL 技术指标。
   * @summary: 计算外汇 CORREL 技术指标
   */
  GetTimeSeriesCorrel: (
    params: technical_indicator.GetTimeSeriesCorrelParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesCorrel_200_response>;

  /**
   * GET /crsi
   * 基于 EUR/USD 等外汇货币对的时间序列计算 CRSI 技术指标。
   * @summary: 计算外汇 CRSI 技术指标
   */
  GetTimeSeriesCrsi: (
    params: technical_indicator.GetTimeSeriesCrsiParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesCrsi_200_response>;

  /**
   * GET /dema
   * 基于 EUR/USD 等外汇货币对的时间序列计算 DEMA 技术指标。
   * @summary: 计算外汇 DEMA 技术指标
   */
  GetTimeSeriesDema: (
    params: technical_indicator.GetTimeSeriesDemaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesDema_200_response>;

  /**
   * GET /div
   * 基于 EUR/USD 等外汇货币对的时间序列计算 DIV 技术指标。
   * @summary: 计算外汇 DIV 技术指标
   */
  GetTimeSeriesDiv: (
    params: technical_indicator.GetTimeSeriesDivParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesDiv_200_response>;

  /**
   * GET /dpo
   * 基于 EUR/USD 等外汇货币对的时间序列计算 DPO 技术指标。
   * @summary: 计算外汇 DPO 技术指标
   */
  GetTimeSeriesDpo: (
    params: technical_indicator.GetTimeSeriesDpoParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesDpo_200_response>;

  /**
   * GET /dx
   * 基于 EUR/USD 等外汇货币对的时间序列计算 DX 技术指标。
   * @summary: 计算外汇 DX 技术指标
   */
  GetTimeSeriesDx: (
    params: technical_indicator.GetTimeSeriesDxParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesDx_200_response>;

  /**
   * GET /ema
   * 基于 EUR/USD 等外汇货币对的时间序列计算 EMA 技术指标。
   * @summary: 计算外汇 EMA 技术指标
   */
  GetTimeSeriesEma: (
    params: technical_indicator.GetTimeSeriesEmaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesEma_200_response>;

  /**
   * GET /exp
   * 基于 EUR/USD 等外汇货币对的时间序列计算 EXP 技术指标。
   * @summary: 计算外汇 EXP 技术指标
   */
  GetTimeSeriesExp: (
    params: technical_indicator.GetTimeSeriesExpParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesExp_200_response>;

  /**
   * GET /floor
   * 基于 EUR/USD 等外汇货币对的时间序列计算 FLOOR 技术指标。
   * @summary: 计算外汇 FLOOR 技术指标
   */
  GetTimeSeriesFloor: (
    params: technical_indicator.GetTimeSeriesFloorParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesFloor_200_response>;

  /**
   * GET /heikinashicandles
   * 基于 EUR/USD 等外汇货币对的时间序列计算 HEIKINASHICANDLES 技术指标。
   * @summary: 计算外汇 HEIKINASHICANDLES 技术指标
   */
  GetTimeSeriesHeikinashiCandles: (
    params: technical_indicator.GetTimeSeriesHeikinashiCandlesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesHeikinashiCandles_200_response>;

  /**
   * GET /hlc3
   * 基于 EUR/USD 等外汇货币对的时间序列计算 HLC3 技术指标。
   * @summary: 计算外汇 HLC3 技术指标
   */
  GetTimeSeriesHlc3: (
    params: technical_indicator.GetTimeSeriesHlc3Params,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesHlc3_200_response>;

  /**
   * GET /ht_dcperiod
   * 基于 EUR/USD 等外汇货币对的时间序列计算 HT DCPERIOD 技术指标。
   * @summary: 计算外汇 HT DCPERIOD 技术指标
   */
  GetTimeSeriesHtDcPeriod: (
    params: technical_indicator.GetTimeSeriesHtDcPeriodParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesHtDcPeriod_200_response>;

  /**
   * GET /ht_dcphase
   * 基于 EUR/USD 等外汇货币对的时间序列计算 HT DCPHASE 技术指标。
   * @summary: 计算外汇 HT DCPHASE 技术指标
   */
  GetTimeSeriesHtDcPhase: (
    params: technical_indicator.GetTimeSeriesHtDcPhaseParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesHtDcPhase_200_response>;

  /**
   * GET /ht_phasor
   * 基于 EUR/USD 等外汇货币对的时间序列计算 HT PHASOR 技术指标。
   * @summary: 计算外汇 HT PHASOR 技术指标
   */
  GetTimeSeriesHtPhasor: (
    params: technical_indicator.GetTimeSeriesHtPhasorParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesHtPhasor_200_response>;

  /**
   * GET /ht_sine
   * 基于 EUR/USD 等外汇货币对的时间序列计算 HT SINE 技术指标。
   * @summary: 计算外汇 HT SINE 技术指标
   */
  GetTimeSeriesHtSine: (
    params: technical_indicator.GetTimeSeriesHtSineParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesHtSine_200_response>;

  /**
   * GET /ht_trendmode
   * 基于 EUR/USD 等外汇货币对的时间序列计算 HT TRENDMODE 技术指标。
   * @summary: 计算外汇 HT TRENDMODE 技术指标
   */
  GetTimeSeriesHtTrendMode: (
    params: technical_indicator.GetTimeSeriesHtTrendModeParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesHtTrendMode_200_response>;

  /**
   * GET /ht_trendline
   * 基于 EUR/USD 等外汇货币对的时间序列计算 HT TRENDLINE 技术指标。
   * @summary: 计算外汇 HT TRENDLINE 技术指标
   */
  GetTimeSeriesHtTrendline: (
    params: technical_indicator.GetTimeSeriesHtTrendlineParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesHtTrendline_200_response>;

  /**
   * GET /ichimoku
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ICHIMOKU 技术指标。
   * @summary: 计算外汇 ICHIMOKU 技术指标
   */
  GetTimeSeriesIchimoku: (
    params: technical_indicator.GetTimeSeriesIchimokuParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesIchimoku_200_response>;

  /**
   * GET /kama
   * 基于 EUR/USD 等外汇货币对的时间序列计算 KAMA 技术指标。
   * @summary: 计算外汇 KAMA 技术指标
   */
  GetTimeSeriesKama: (
    params: technical_indicator.GetTimeSeriesKamaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesKama_200_response>;

  /**
   * GET /keltner
   * 基于 EUR/USD 等外汇货币对的时间序列计算 KELTNER 技术指标。
   * @summary: 计算外汇 KELTNER 技术指标
   */
  GetTimeSeriesKeltner: (
    params: technical_indicator.GetTimeSeriesKeltnerParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesKeltner_200_response>;

  /**
   * GET /kst
   * 基于 EUR/USD 等外汇货币对的时间序列计算 KST 技术指标。
   * @summary: 计算外汇 KST 技术指标
   */
  GetTimeSeriesKst: (
    params: technical_indicator.GetTimeSeriesKstParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesKst_200_response>;

  /**
   * GET /linearreg
   * 基于 EUR/USD 等外汇货币对的时间序列计算 LINEARREG 技术指标。
   * @summary: 计算外汇 LINEARREG 技术指标
   */
  GetTimeSeriesLinearReg: (
    params: technical_indicator.GetTimeSeriesLinearRegParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesLinearReg_200_response>;

  /**
   * GET /linearregangle
   * 基于 EUR/USD 等外汇货币对的时间序列计算 LINEARREGANGLE 技术指标。
   * @summary: 计算外汇 LINEARREGANGLE 技术指标
   */
  GetTimeSeriesLinearRegAngle: (
    params: technical_indicator.GetTimeSeriesLinearRegAngleParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesLinearRegAngle_200_response>;

  /**
   * GET /linearregintercept
   * 基于 EUR/USD 等外汇货币对的时间序列计算 LINEARREGINTERCEPT 技术指标。
   * @summary: 计算外汇 LINEARREGINTERCEPT 技术指标
   */
  GetTimeSeriesLinearRegIntercept: (
    params: technical_indicator.GetTimeSeriesLinearRegInterceptParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesLinearRegIntercept_200_response>;

  /**
   * GET /linearregslope
   * 基于 EUR/USD 等外汇货币对的时间序列计算 LINEARREGSLOPE 技术指标。
   * @summary: 计算外汇 LINEARREGSLOPE 技术指标
   */
  GetTimeSeriesLinearRegSlope: (
    params: technical_indicator.GetTimeSeriesLinearRegSlopeParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesLinearRegSlope_200_response>;

  /**
   * GET /ln
   * 基于 EUR/USD 等外汇货币对的时间序列计算 LN 技术指标。
   * @summary: 计算外汇 LN 技术指标
   */
  GetTimeSeriesLn: (
    params: technical_indicator.GetTimeSeriesLnParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesLn_200_response>;

  /**
   * GET /log10
   * 基于 EUR/USD 等外汇货币对的时间序列计算 LOG10 技术指标。
   * @summary: 计算外汇 LOG10 技术指标
   */
  GetTimeSeriesLog10: (
    params: technical_indicator.GetTimeSeriesLog10Params,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesLog10_200_response>;

  /**
   * GET /ma
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MA 技术指标。
   * @summary: 计算外汇 MA 技术指标
   */
  GetTimeSeriesMa: (
    params: technical_indicator.GetTimeSeriesMaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMa_200_response>;

  /**
   * GET /macd
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MACD 技术指标。
   * @summary: 计算外汇 MACD 技术指标
   */
  GetTimeSeriesMacd: (
    params: technical_indicator.GetTimeSeriesMacdParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMacd_200_response>;

  /**
   * GET /macdext
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MACDEXT 技术指标。
   * @summary: 计算外汇 MACDEXT 技术指标
   */
  GetTimeSeriesMacdExt: (
    params: technical_indicator.GetTimeSeriesMacdExtParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMacdExt_200_response>;

  /**
   * GET /macd_slope
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MACD SLOPE 技术指标。
   * @summary: 计算外汇 MACD SLOPE 技术指标
   */
  GetTimeSeriesMacdSlope: (
    params: technical_indicator.GetTimeSeriesMacdSlopeParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMacdSlope_200_response>;

  /**
   * GET /mama
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MAMA 技术指标。
   * @summary: 计算外汇 MAMA 技术指标
   */
  GetTimeSeriesMama: (
    params: technical_indicator.GetTimeSeriesMamaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMama_200_response>;

  /**
   * GET /max
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MAX 技术指标。
   * @summary: 计算外汇 MAX 技术指标
   */
  GetTimeSeriesMax: (
    params: technical_indicator.GetTimeSeriesMaxParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMax_200_response>;

  /**
   * GET /maxindex
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MAXINDEX 技术指标。
   * @summary: 计算外汇 MAXINDEX 技术指标
   */
  GetTimeSeriesMaxIndex: (
    params: technical_indicator.GetTimeSeriesMaxIndexParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMaxIndex_200_response>;

  /**
   * GET /mcginley_dynamic
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MCGINLEY DYNAMIC 技术指标。
   * @summary: 计算外汇 MCGINLEY DYNAMIC 技术指标
   */
  GetTimeSeriesMcGinleyDynamic: (
    params: technical_indicator.GetTimeSeriesMcGinleyDynamicParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMcGinleyDynamic_200_response>;

  /**
   * GET /medprice
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MEDPRICE 技术指标。
   * @summary: 计算外汇 MEDPRICE 技术指标
   */
  GetTimeSeriesMedPrice: (
    params: technical_indicator.GetTimeSeriesMedPriceParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMedPrice_200_response>;

  /**
   * GET /mfi
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MFI 技术指标。
   * @summary: 计算外汇 MFI 技术指标
   */
  GetTimeSeriesMfi: (
    params: technical_indicator.GetTimeSeriesMfiParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMfi_200_response>;

  /**
   * GET /midpoint
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MIDPOINT 技术指标。
   * @summary: 计算外汇 MIDPOINT 技术指标
   */
  GetTimeSeriesMidPoint: (
    params: technical_indicator.GetTimeSeriesMidPointParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMidPoint_200_response>;

  /**
   * GET /midprice
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MIDPRICE 技术指标。
   * @summary: 计算外汇 MIDPRICE 技术指标
   */
  GetTimeSeriesMidPrice: (
    params: technical_indicator.GetTimeSeriesMidPriceParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMidPrice_200_response>;

  /**
   * GET /min
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MIN 技术指标。
   * @summary: 计算外汇 MIN 技术指标
   */
  GetTimeSeriesMin: (
    params: technical_indicator.GetTimeSeriesMinParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMin_200_response>;

  /**
   * GET /minindex
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MININDEX 技术指标。
   * @summary: 计算外汇 MININDEX 技术指标
   */
  GetTimeSeriesMinIndex: (
    params: technical_indicator.GetTimeSeriesMinIndexParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMinIndex_200_response>;

  /**
   * GET /minmax
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MINMAX 技术指标。
   * @summary: 计算外汇 MINMAX 技术指标
   */
  GetTimeSeriesMinMax: (
    params: technical_indicator.GetTimeSeriesMinMaxParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMinMax_200_response>;

  /**
   * GET /minmaxindex
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MINMAXINDEX 技术指标。
   * @summary: 计算外汇 MINMAXINDEX 技术指标
   */
  GetTimeSeriesMinMaxIndex: (
    params: technical_indicator.GetTimeSeriesMinMaxIndexParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMinMaxIndex_200_response>;

  /**
   * GET /minus_di
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MINUS DI 技术指标。
   * @summary: 计算外汇 MINUS DI 技术指标
   */
  GetTimeSeriesMinusDI: (
    params: technical_indicator.GetTimeSeriesMinusDIParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMinusDI_200_response>;

  /**
   * GET /minus_dm
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MINUS DM 技术指标。
   * @summary: 计算外汇 MINUS DM 技术指标
   */
  GetTimeSeriesMinusDM: (
    params: technical_indicator.GetTimeSeriesMinusDMParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMinusDM_200_response>;

  /**
   * GET /mom
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MOM 技术指标。
   * @summary: 计算外汇 MOM 技术指标
   */
  GetTimeSeriesMom: (
    params: technical_indicator.GetTimeSeriesMomParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMom_200_response>;

  /**
   * GET /mult
   * 基于 EUR/USD 等外汇货币对的时间序列计算 MULT 技术指标。
   * @summary: 计算外汇 MULT 技术指标
   */
  GetTimeSeriesMult: (
    params: technical_indicator.GetTimeSeriesMultParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesMult_200_response>;

  /**
   * GET /natr
   * 基于 EUR/USD 等外汇货币对的时间序列计算 NATR 技术指标。
   * @summary: 计算外汇 NATR 技术指标
   */
  GetTimeSeriesNatr: (
    params: technical_indicator.GetTimeSeriesNatrParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesNatr_200_response>;

  /**
   * GET /obv
   * 基于 EUR/USD 等外汇货币对的时间序列计算 OBV 技术指标。
   * @summary: 计算外汇 OBV 技术指标
   */
  GetTimeSeriesObv: (
    params: technical_indicator.GetTimeSeriesObvParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesObv_200_response>;

  /**
   * GET /percent_b
   * 基于 EUR/USD 等外汇货币对的时间序列计算 PERCENT B 技术指标。
   * @summary: 计算外汇 PERCENT B 技术指标
   */
  GetTimeSeriesPercent_B: (
    params: technical_indicator.GetTimeSeriesPercent_BParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesPercent_B_200_response>;

  /**
   * GET /pivot_points_hl
   * 基于 EUR/USD 等外汇货币对的时间序列计算 PIVOT POINTS HL 技术指标。
   * @summary: 计算外汇 PIVOT POINTS HL 技术指标
   */
  GetTimeSeriesPivotPointsHL: (
    params: technical_indicator.GetTimeSeriesPivotPointsHLParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesPivotPointsHL_200_response>;

  /**
   * GET /plus_di
   * 基于 EUR/USD 等外汇货币对的时间序列计算 PLUS DI 技术指标。
   * @summary: 计算外汇 PLUS DI 技术指标
   */
  GetTimeSeriesPlusDI: (
    params: technical_indicator.GetTimeSeriesPlusDIParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesPlusDI_200_response>;

  /**
   * GET /plus_dm
   * 基于 EUR/USD 等外汇货币对的时间序列计算 PLUS DM 技术指标。
   * @summary: 计算外汇 PLUS DM 技术指标
   */
  GetTimeSeriesPlusDM: (
    params: technical_indicator.GetTimeSeriesPlusDMParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesPlusDM_200_response>;

  /**
   * GET /ppo
   * 基于 EUR/USD 等外汇货币对的时间序列计算 PPO 技术指标。
   * @summary: 计算外汇 PPO 技术指标
   */
  GetTimeSeriesPpo: (
    params: technical_indicator.GetTimeSeriesPpoParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesPpo_200_response>;

  /**
   * GET /roc
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ROC 技术指标。
   * @summary: 计算外汇 ROC 技术指标
   */
  GetTimeSeriesRoc: (
    params: technical_indicator.GetTimeSeriesRocParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesRoc_200_response>;

  /**
   * GET /rocp
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ROCP 技术指标。
   * @summary: 计算外汇 ROCP 技术指标
   */
  GetTimeSeriesRocp: (
    params: technical_indicator.GetTimeSeriesRocpParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesRocp_200_response>;

  /**
   * GET /rocr
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ROCR 技术指标。
   * @summary: 计算外汇 ROCR 技术指标
   */
  GetTimeSeriesRocr: (
    params: technical_indicator.GetTimeSeriesRocrParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesRocr_200_response>;

  /**
   * GET /rocr100
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ROCR100 技术指标。
   * @summary: 计算外汇 ROCR100 技术指标
   */
  GetTimeSeriesRocr100: (
    params: technical_indicator.GetTimeSeriesRocr100Params,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesRocr100_200_response>;

  /**
   * GET /rsi
   * 基于 EUR/USD 等外汇货币对的时间序列计算 RSI 技术指标。
   * @summary: 计算外汇 RSI 技术指标
   */
  GetTimeSeriesRsi: (
    params: technical_indicator.GetTimeSeriesRsiParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesRsi_200_response>;

  /**
   * GET /rvol
   * 基于 EUR/USD 等外汇货币对的时间序列计算 RVOL 技术指标。
   * @summary: 计算外汇 RVOL 技术指标
   */
  GetTimeSeriesRvol: (
    params: technical_indicator.GetTimeSeriesRvolParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesRvol_200_response>;

  /**
   * GET /sar
   * 基于 EUR/USD 等外汇货币对的时间序列计算 SAR 技术指标。
   * @summary: 计算外汇 SAR 技术指标
   */
  GetTimeSeriesSar: (
    params: technical_indicator.GetTimeSeriesSarParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesSar_200_response>;

  /**
   * GET /sarext
   * 基于 EUR/USD 等外汇货币对的时间序列计算 SAREXT 技术指标。
   * @summary: 计算外汇 SAREXT 技术指标
   */
  GetTimeSeriesSarExt: (
    params: technical_indicator.GetTimeSeriesSarExtParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesSarExt_200_response>;

  /**
   * GET /sma
   * 基于 EUR/USD 等外汇货币对的时间序列计算 SMA 技术指标。
   * @summary: 计算外汇 SMA 技术指标
   */
  GetTimeSeriesSma: (
    params: technical_indicator.GetTimeSeriesSmaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesSma_200_response>;

  /**
   * GET /sqrt
   * 基于 EUR/USD 等外汇货币对的时间序列计算 SQRT 技术指标。
   * @summary: 计算外汇 SQRT 技术指标
   */
  GetTimeSeriesSqrt: (
    params: technical_indicator.GetTimeSeriesSqrtParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesSqrt_200_response>;

  /**
   * GET /stddev
   * 基于 EUR/USD 等外汇货币对的时间序列计算 STDDEV 技术指标。
   * @summary: 计算外汇 STDDEV 技术指标
   */
  GetTimeSeriesStdDev: (
    params: technical_indicator.GetTimeSeriesStdDevParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesStdDev_200_response>;

  /**
   * GET /stoch
   * 基于 EUR/USD 等外汇货币对的时间序列计算 STOCH 技术指标。
   * @summary: 计算外汇 STOCH 技术指标
   */
  GetTimeSeriesStoch: (
    params: technical_indicator.GetTimeSeriesStochParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesStoch_200_response>;

  /**
   * GET /stochf
   * 基于 EUR/USD 等外汇货币对的时间序列计算 STOCHF 技术指标。
   * @summary: 计算外汇 STOCHF 技术指标
   */
  GetTimeSeriesStochF: (
    params: technical_indicator.GetTimeSeriesStochFParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesStochF_200_response>;

  /**
   * GET /stochrsi
   * 基于 EUR/USD 等外汇货币对的时间序列计算 STOCHRSI 技术指标。
   * @summary: 计算外汇 STOCHRSI 技术指标
   */
  GetTimeSeriesStochRsi: (
    params: technical_indicator.GetTimeSeriesStochRsiParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesStochRsi_200_response>;

  /**
   * GET /sub
   * 基于 EUR/USD 等外汇货币对的时间序列计算 SUB 技术指标。
   * @summary: 计算外汇 SUB 技术指标
   */
  GetTimeSeriesSub: (
    params: technical_indicator.GetTimeSeriesSubParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesSub_200_response>;

  /**
   * GET /sum
   * 基于 EUR/USD 等外汇货币对的时间序列计算 SUM 技术指标。
   * @summary: 计算外汇 SUM 技术指标
   */
  GetTimeSeriesSum: (
    params: technical_indicator.GetTimeSeriesSumParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesSum_200_response>;

  /**
   * GET /supertrend
   * 基于 EUR/USD 等外汇货币对的时间序列计算 SUPERTREND 技术指标。
   * @summary: 计算外汇 SUPERTREND 技术指标
   */
  GetTimeSeriesSuperTrend: (
    params: technical_indicator.GetTimeSeriesSuperTrendParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesSuperTrend_200_response>;

  /**
   * GET /supertrend_heikinashicandles
   * 基于 EUR/USD 等外汇货币对的时间序列计算 SUPERTREND HEIKINASHICANDLES 技术指标。
   * @summary: 计算外汇 SUPERTREND HEIKINASHICANDLES 技术指标
   */
  GetTimeSeriesSuperTrendHeikinAshiCandles: (
    params: technical_indicator.GetTimeSeriesSuperTrendHeikinAshiCandlesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesSuperTrendHeikinAshiCandles_200_response>;

  /**
   * GET /t3ma
   * 基于 EUR/USD 等外汇货币对的时间序列计算 T3MA 技术指标。
   * @summary: 计算外汇 T3MA 技术指标
   */
  GetTimeSeriesT3ma: (
    params: technical_indicator.GetTimeSeriesT3maParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesT3ma_200_response>;

  /**
   * GET /trange
   * 基于 EUR/USD 等外汇货币对的时间序列计算 TRANGE 技术指标。
   * @summary: 计算外汇 TRANGE 技术指标
   */
  GetTimeSeriesTRange: (
    params: technical_indicator.GetTimeSeriesTRangeParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesTRange_200_response>;

  /**
   * GET /tema
   * 基于 EUR/USD 等外汇货币对的时间序列计算 TEMA 技术指标。
   * @summary: 计算外汇 TEMA 技术指标
   */
  GetTimeSeriesTema: (
    params: technical_indicator.GetTimeSeriesTemaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesTema_200_response>;

  /**
   * GET /trima
   * 基于 EUR/USD 等外汇货币对的时间序列计算 TRIMA 技术指标。
   * @summary: 计算外汇 TRIMA 技术指标
   */
  GetTimeSeriesTrima: (
    params: technical_indicator.GetTimeSeriesTrimaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesTrima_200_response>;

  /**
   * GET /tsf
   * 基于 EUR/USD 等外汇货币对的时间序列计算 TSF 技术指标。
   * @summary: 计算外汇 TSF 技术指标
   */
  GetTimeSeriesTsf: (
    params: technical_indicator.GetTimeSeriesTsfParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesTsf_200_response>;

  /**
   * GET /typprice
   * 基于 EUR/USD 等外汇货币对的时间序列计算 TYPPRICE 技术指标。
   * @summary: 计算外汇 TYPPRICE 技术指标
   */
  GetTimeSeriesTypPrice: (
    params: technical_indicator.GetTimeSeriesTypPriceParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesTypPrice_200_response>;

  /**
   * GET /ultosc
   * 基于 EUR/USD 等外汇货币对的时间序列计算 ULTOSC 技术指标。
   * @summary: 计算外汇 ULTOSC 技术指标
   */
  GetTimeSeriesUltOsc: (
    params: technical_indicator.GetTimeSeriesUltOscParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesUltOsc_200_response>;

  /**
   * GET /var
   * 基于 EUR/USD 等外汇货币对的时间序列计算 VAR 技术指标。
   * @summary: 计算外汇 VAR 技术指标
   */
  GetTimeSeriesVar: (
    params: technical_indicator.GetTimeSeriesVarParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesVar_200_response>;

  /**
   * GET /vwap
   * 基于 EUR/USD 等外汇货币对的时间序列计算 VWAP 技术指标。
   * @summary: 计算外汇 VWAP 技术指标
   */
  GetTimeSeriesVwap: (
    params: technical_indicator.GetTimeSeriesVwapParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesVwap_200_response>;

  /**
   * GET /wclprice
   * 基于 EUR/USD 等外汇货币对的时间序列计算 WCLPRICE 技术指标。
   * @summary: 计算外汇 WCLPRICE 技术指标
   */
  GetTimeSeriesWclPrice: (
    params: technical_indicator.GetTimeSeriesWclPriceParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesWclPrice_200_response>;

  /**
   * GET /willr
   * 基于 EUR/USD 等外汇货币对的时间序列计算 WILLR 技术指标。
   * @summary: 计算外汇 WILLR 技术指标
   */
  GetTimeSeriesWillR: (
    params: technical_indicator.GetTimeSeriesWillRParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesWillR_200_response>;

  /**
   * GET /wma
   * 基于 EUR/USD 等外汇货币对的时间序列计算 WMA 技术指标。
   * @summary: 计算外汇 WMA 技术指标
   */
  GetTimeSeriesWma: (
    params: technical_indicator.GetTimeSeriesWmaParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GetTimeSeriesWma_200_response>;

};

// ============ API 集合类型 ============

/**
 * API 类型定义
 */
export type APIs = {
  /** currencies 模块 */
  currencies: currencies;
  /** market_data 模块 */
  market_data: market_data;
  /** reference_data 模块 */
  reference_data: reference_data;
  /** technical_indicator 模块 */
  technical_indicator: technical_indicator;
};

export declare namespace APIs {
  export { currencies };
  export { market_data };
  export { reference_data };
  export { technical_indicator };
}

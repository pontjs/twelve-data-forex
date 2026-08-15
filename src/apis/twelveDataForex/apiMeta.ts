export const specMeta = {
  name: "Twelve Data Forex API",
  hasTags: true,
  url: [
    {
      url: "https://api.twelvedata.com"
    }
  ],
  apis: {
    "currencies/GetCurrencyConversion": {
      method: "GET",
      path: "/currency_conversion",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "amount", "date", "format", "delimiter", "dp", "timezone"],
      bodyParams: null
    },

    "currencies/GetExchangeRate": {
      method: "GET",
      path: "/exchange_rate",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "date", "format", "delimiter", "dp", "timezone"],
      bodyParams: null
    },

    "market_data/GetEod": {
      method: "GET",
      path: "/eod",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "exchange", "mic_code", "country", "type", "date", "prepost", "dp"],
      bodyParams: null
    },

    "market_data/GetPrice": {
      method: "GET",
      path: "/price",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "exchange", "mic_code", "country", "type", "format", "delimiter", "prepost", "dp"],
      bodyParams: null
    },

    "market_data/GetQuote": {
      method: "GET",
      path: "/quote",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "exchange", "mic_code", "country", "volume_time_period", "type", "format", "delimiter", "prepost", "eod", "rolling_period", "dp", "timezone"],
      bodyParams: null
    },

    "market_data/GetTimeSeries": {
      method: "GET",
      path: "/time_series",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust"],
      bodyParams: null
    },

    "reference_data/GetForexPairs": {
      method: "GET",
      path: "/forex_pairs",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "currency_base", "currency_quote", "format", "delimiter", "page", "outputsize"],
      bodyParams: null
    },

    "reference_data/GetIntervals": {
      method: "GET",
      path: "/intervals",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: null
    },

    "reference_data/GetTechnicalIndicators": {
      method: "GET",
      path: "/technical_indicators",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAd": {
      method: "GET",
      path: "/ad",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAdOsc": {
      method: "GET",
      path: "/adosc",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "fast_period", "slow_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAdd": {
      method: "GET",
      path: "/add",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type_1", "series_type_2", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAdx": {
      method: "GET",
      path: "/adx",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAdxr": {
      method: "GET",
      path: "/adxr",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesApo": {
      method: "GET",
      path: "/apo",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "fast_period", "slow_period", "ma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAroon": {
      method: "GET",
      path: "/aroon",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAroonOsc": {
      method: "GET",
      path: "/aroonosc",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAtr": {
      method: "GET",
      path: "/atr",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAvg": {
      method: "GET",
      path: "/avg",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesAvgPrice": {
      method: "GET",
      path: "/avgprice",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesBBands": {
      method: "GET",
      path: "/bbands",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "sd", "ma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesBeta": {
      method: "GET",
      path: "/beta",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type_1", "series_type_2", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesBop": {
      method: "GET",
      path: "/bop",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesCci": {
      method: "GET",
      path: "/cci",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesCeil": {
      method: "GET",
      path: "/ceil",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesCmo": {
      method: "GET",
      path: "/cmo",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesCoppock": {
      method: "GET",
      path: "/coppock",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "wma_period", "long_roc_period", "short_roc_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesCorrel": {
      method: "GET",
      path: "/correl",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type_1", "series_type_2", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesCrsi": {
      method: "GET",
      path: "/crsi",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "rsi_period", "up_down_length", "percent_rank_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesDema": {
      method: "GET",
      path: "/dema",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesDiv": {
      method: "GET",
      path: "/div",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type_1", "series_type_2", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesDpo": {
      method: "GET",
      path: "/dpo",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "centered", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesDx": {
      method: "GET",
      path: "/dx",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesEma": {
      method: "GET",
      path: "/ema",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesExp": {
      method: "GET",
      path: "/exp",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesFloor": {
      method: "GET",
      path: "/floor",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesHeikinashiCandles": {
      method: "GET",
      path: "/heikinashicandles",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesHlc3": {
      method: "GET",
      path: "/hlc3",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesHtDcPeriod": {
      method: "GET",
      path: "/ht_dcperiod",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesHtDcPhase": {
      method: "GET",
      path: "/ht_dcphase",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesHtPhasor": {
      method: "GET",
      path: "/ht_phasor",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesHtSine": {
      method: "GET",
      path: "/ht_sine",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesHtTrendMode": {
      method: "GET",
      path: "/ht_trendmode",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesHtTrendline": {
      method: "GET",
      path: "/ht_trendline",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesIchimoku": {
      method: "GET",
      path: "/ichimoku",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "conversion_line_period", "base_line_period", "leading_span_b_period", "lagging_span_period", "include_ahead_span_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesKama": {
      method: "GET",
      path: "/kama",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesKeltner": {
      method: "GET",
      path: "/keltner",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "atr_time_period", "multiplier", "series_type", "ma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesKst": {
      method: "GET",
      path: "/kst",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "roc_period_1", "roc_period_2", "roc_period_3", "roc_period_4", "sma_period_1", "sma_period_2", "sma_period_3", "sma_period_4", "signal_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesLinearReg": {
      method: "GET",
      path: "/linearreg",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesLinearRegAngle": {
      method: "GET",
      path: "/linearregangle",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesLinearRegIntercept": {
      method: "GET",
      path: "/linearregintercept",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesLinearRegSlope": {
      method: "GET",
      path: "/linearregslope",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesLn": {
      method: "GET",
      path: "/ln",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesLog10": {
      method: "GET",
      path: "/log10",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMa": {
      method: "GET",
      path: "/ma",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "ma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMacd": {
      method: "GET",
      path: "/macd",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "fast_period", "slow_period", "signal_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMacdExt": {
      method: "GET",
      path: "/macdext",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "fast_period", "fast_ma_type", "slow_period", "slow_ma_type", "signal_period", "signal_ma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMacdSlope": {
      method: "GET",
      path: "/macd_slope",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "fast_period", "slow_period", "signal_period", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMama": {
      method: "GET",
      path: "/mama",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "fast_limit", "slow_limit", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMax": {
      method: "GET",
      path: "/max",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMaxIndex": {
      method: "GET",
      path: "/maxindex",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMcGinleyDynamic": {
      method: "GET",
      path: "/mcginley_dynamic",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMedPrice": {
      method: "GET",
      path: "/medprice",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMfi": {
      method: "GET",
      path: "/mfi",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMidPoint": {
      method: "GET",
      path: "/midpoint",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMidPrice": {
      method: "GET",
      path: "/midprice",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMin": {
      method: "GET",
      path: "/min",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMinIndex": {
      method: "GET",
      path: "/minindex",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMinMax": {
      method: "GET",
      path: "/minmax",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMinMaxIndex": {
      method: "GET",
      path: "/minmaxindex",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMinusDI": {
      method: "GET",
      path: "/minus_di",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMinusDM": {
      method: "GET",
      path: "/minus_dm",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMom": {
      method: "GET",
      path: "/mom",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesMult": {
      method: "GET",
      path: "/mult",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type_1", "series_type_2", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesNatr": {
      method: "GET",
      path: "/natr",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesObv": {
      method: "GET",
      path: "/obv",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesPercent_B": {
      method: "GET",
      path: "/percent_b",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "sd", "ma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesPivotPointsHL": {
      method: "GET",
      path: "/pivot_points_hl",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesPlusDI": {
      method: "GET",
      path: "/plus_di",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesPlusDM": {
      method: "GET",
      path: "/plus_dm",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesPpo": {
      method: "GET",
      path: "/ppo",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "fast_period", "slow_period", "ma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesRoc": {
      method: "GET",
      path: "/roc",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesRocp": {
      method: "GET",
      path: "/rocp",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesRocr": {
      method: "GET",
      path: "/rocr",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesRocr100": {
      method: "GET",
      path: "/rocr100",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesRsi": {
      method: "GET",
      path: "/rsi",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesRvol": {
      method: "GET",
      path: "/rvol",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesSar": {
      method: "GET",
      path: "/sar",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "acceleration", "maximum", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesSarExt": {
      method: "GET",
      path: "/sarext",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "start_value", "offset_on_reverse", "acceleration_limit_long", "acceleration_long", "acceleration_max_long", "acceleration_limit_short", "acceleration_short", "acceleration_max_short", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesSma": {
      method: "GET",
      path: "/sma",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesSqrt": {
      method: "GET",
      path: "/sqrt",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesStdDev": {
      method: "GET",
      path: "/stddev",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "sd", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesStoch": {
      method: "GET",
      path: "/stoch",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "fast_k_period", "slow_k_period", "slow_d_period", "slow_kma_type", "slow_dma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesStochF": {
      method: "GET",
      path: "/stochf",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "fast_k_period", "fast_d_period", "fast_dma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesStochRsi": {
      method: "GET",
      path: "/stochrsi",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "rsi_length", "stoch_length", "k_period", "slow_kma_type", "d_period", "slow_dma_type", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesSub": {
      method: "GET",
      path: "/sub",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type_1", "series_type_2", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesSum": {
      method: "GET",
      path: "/sum",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesSuperTrend": {
      method: "GET",
      path: "/supertrend",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "period", "multiplier", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesSuperTrendHeikinAshiCandles": {
      method: "GET",
      path: "/supertrend_heikinashicandles",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "period", "multiplier", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesT3ma": {
      method: "GET",
      path: "/t3ma",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "v_factor", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesTRange": {
      method: "GET",
      path: "/trange",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesTema": {
      method: "GET",
      path: "/tema",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesTrima": {
      method: "GET",
      path: "/trima",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesTsf": {
      method: "GET",
      path: "/tsf",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesTypPrice": {
      method: "GET",
      path: "/typprice",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesUltOsc": {
      method: "GET",
      path: "/ultosc",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period_1", "time_period_2", "time_period_3", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesVar": {
      method: "GET",
      path: "/var",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesVwap": {
      method: "GET",
      path: "/vwap",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "sd_time_period", "sd", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesWclPrice": {
      method: "GET",
      path: "/wclprice",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesWillR": {
      method: "GET",
      path: "/willr",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "time_period", "include_ohlc"],
      bodyParams: null
    },

    "technical_indicator/GetTimeSeriesWma": {
      method: "GET",
      path: "/wma",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["symbol", "interval", "outputsize", "exchange", "mic_code", "country", "type", "timezone", "start_date", "end_date", "date", "order", "prepost", "format", "delimiter", "dp", "previous_close", "adjust", "series_type", "time_period", "include_ohlc"],
      bodyParams: null
    }
  }
} as const;

export type StreamOperations = {
  heartbeat: {
    action: "send";
    channel: "quotesPrice";
    messages: {
      heartbeat: {
        /**
         * @description 动作
         */
        action: string
      };
    };
  };

  receiveHeartbeat: {
    action: "receive";
    channel: "quotesPrice";
    messages: {
      heartbeatStatus: {
        /**
         * @description 事件名称
         */
        event: string;
        /**
         * @description 服务状态
         */
        status: string
      };
    };
  };

  receivePrice: {
    action: "receive";
    channel: "quotesPrice";
    messages: {
      price: {
        /**
         * @description 基准货币名称
         */
        currency_base: string;
        /**
         * @description 报价货币名称
         */
        currency_quote: string;
        /**
         * @description 事件名称
         */
        event: string;
        /**
         * @description 外汇价格数值
         */
        price: number;
        /**
         * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
         */
        symbol: string;
        /**
         * @description 上游时间标识
         */
        timestamp: number;
        /**
         * @description 上游返回的工具类型
         */
        type: string
      };
    };
  };

  receiveSubscribeStatus: {
    action: "receive";
    channel: "quotesPrice";
    messages: {
      subscribeStatus: {
        /**
         * @description 事件名称
         */
        event: string;
        /**
         * @description 未成功订阅的货币对
         */
        fails: Array<{
          /**
           * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
           */
          symbol: string
        }>;
        /**
         * @description 服务状态
         */
        status: 'ok' | 'error';
        /**
         * @description 成功订阅的货币对
         */
        success: Array<{
          /**
           * @description 上游返回的交易场所
           */
          exchange: string;
          /**
           * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
           */
          symbol: string;
          /**
           * @description 上游返回的工具类型
           */
          type: string
        }>
      };
    };
  };

  reset: {
    action: "send";
    channel: "quotesPrice";
    messages: {
      reset: {
        /**
         * @description 动作
         */
        action: string
      };
    };
  };

  subscribe: {
    action: "send";
    channel: "quotesPrice";
    messages: {
      subscribe: {
        /**
         * @description 动作
         */
        action: string;
        /**
         * @description 以逗号分隔的外汇货币对
         */
        params: {
          /**
           * @description 以逗号分隔的外汇货币对
           */
          symbols: string
        }
      };
    };
  };

  unsubscribe: {
    action: "send";
    channel: "quotesPrice";
    messages: {
      unsubscribe: {
        /**
         * @description 动作
         */
        action: string;
        /**
         * @description 以逗号分隔的外汇货币对
         */
        params: {
          /**
           * @description 以逗号分隔的外汇货币对
           */
          symbols: string
        }
      };
    };
  };
};

export type StreamSendMessage = {
  /**
   * @description 动作
   */
  action: string
} | {
  /**
   * @description 动作
   */
  action: string;
  /**
   * @description 以逗号分隔的外汇货币对
   */
  params: {
    /**
     * @description 以逗号分隔的外汇货币对
     */
    symbols: string
  }
};

export type StreamReceivedMessage = {
  /**
   * @description 事件名称
   */
  event: string;
  /**
   * @description 服务状态
   */
  status: string
} | {
  /**
   * @description 基准货币名称
   */
  currency_base: string;
  /**
   * @description 报价货币名称
   */
  currency_quote: string;
  /**
   * @description 事件名称
   */
  event: string;
  /**
   * @description 外汇价格数值
   */
  price: number;
  /**
   * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
   */
  symbol: string;
  /**
   * @description 上游时间标识
   */
  timestamp: number;
  /**
   * @description 上游返回的工具类型
   */
  type: string
} | {
  /**
   * @description 事件名称
   */
  event: string;
  /**
   * @description 未成功订阅的货币对
   */
  fails: Array<{
    /**
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string
  }>;
  /**
   * @description 服务状态
   */
  status: 'ok' | 'error';
  /**
   * @description 成功订阅的货币对
   */
  success: Array<{
    /**
     * @description 上游返回的交易场所
     */
    exchange: string;
    /**
     * @description 外汇货币对，使用 BASE/QUOTE 格式，例如 EUR/USD。
     */
    symbol: string;
    /**
     * @description 上游返回的工具类型
     */
    type: string
  }>
};

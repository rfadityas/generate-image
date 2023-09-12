export interface Response {
    id: string;
    version: string;
    input: Input;
    logs: string;
    output?: (string)[] | null;
    error?: null;
    status: string;
    created_at: string;
    started_at: string;
    completed_at: string;
    metrics: Metrics;
    urls: Urls;
  }
  export interface Input {
    prompt: string;
    negative_prompt: string;
    width: number;
    height: number;
  }
  export interface Metrics {
    predict_time: number;
  }
  export interface Urls {
    cancel: string;
    get: string;
  }
  
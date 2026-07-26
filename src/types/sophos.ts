export interface SophosAction {
  label: string;
  href: string;
  external?: boolean;
  closePanel?: boolean;
}

export type SophosActionMap =
  Record<string, SophosAction[]>;

export interface SophosIntent {
  name: string;
  label: string;
  keywords: string[];
  answers: string[];
}

export type SophosSuggestionMap =
  Record<string, string[]>;

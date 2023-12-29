export type Reqs = Array<{
  description: string;
  regex: RegExp;
  error: boolean;
  negate?: boolean;
}>;

export interface PCProps {
  reqs: Reqs;
  setReqs: React.Dispatch<React.SetStateAction<Reqs>>;
}

export interface ICProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
